import { Injectable } from '@angular/core';
import { Forum } from '../interfaces/forum.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForumGetInterface } from '../interfaces/forumGet.interface';
import { Thread } from '../interfaces/thread.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(public http: HttpClient) { }

  /**
   * Get a page of forums, filtered or not by a category id
   * @param page <number> Desired page to search
   * @param categoryId <number> Optional category id to filter
   */
  getPage(page: number = 1, categoryId?: number, parentId?: number): Promise<ForumGetInterface> {
    return new Promise<ForumGetInterface>((resolve, reject) => {
      // Build the url
      let url = `${environment.apiUrl}/forum?limit=100&page=${page}`;
      // is there any category id?
      if (categoryId) {
        url += `&category-id=${categoryId}`;
      }
      if (!parentId) {
        url += `&type=parent`;
      } else {
        url += `&type=child&parent-id=${parentId}`;
      }
      this.http.get(url)
        .subscribe((res: ForumGetInterface) => {
          return resolve(res);
        }, (err) => {
          return reject(err);
        });
    });
  }

  /**
   * Load the forums for a given category
   * @param categoryId <number> Id of the category to load
   */
  loadForums(categoryId?: number, parentForum: boolean = true, parentId?: number): Promise<Forum[]> {
    return new Promise<Forum[]>(async (resolve, reject) => {
      const forums: Forum[] = [];
      let resultValue: ForumGetInterface = null;
      let currentPage = 1;
      let requestResult: any = null;
      do {
        // Get the page
        requestResult = await this.getPage(currentPage, categoryId, parentId).catch((err) => reject());
        resultValue = requestResult;
        // Increment the page
        currentPage++;
        // Push the results
        forums.push(...resultValue.forums);
      } while (resultValue.forums.length === 100);
      // Return the forums
      return resolve(forums);
    });
  }

  /**
   * Get the total of threads that exists in a forum
   * @param forumId <number> Id of the forum to search
   */
  totalThreads(forumId: number): Promise<number> {
    const url = `${environment.apiUrl}/forum/total-threads/${forumId}`;
    return new Promise<number>((resolve, reject) => {
      this.http.get(url)
      .subscribe((res: {total: number}) => {
        return resolve(res.total);
      }, (err) => {
        return reject(err);
      });
    });
  }

  /**
   * Get the last message and thread where that message is present (if any)
   * @param forumId <number> id of the forum
   */
  getLastMessage(forumId: number): Promise<{thread: {thread: Thread, totalPosts: number}, post: Post}> {
    return new Promise<{thread: {thread: Thread, totalPosts: number}, post: Post}>((resolve, reject) => {
      const url = `${environment.apiUrl}/forum/last-post/${forumId}`;
      this.http.get(url)
      .subscribe((res: {thread: {thread: Thread, totalPosts: number}, post: Post}) => {
        return resolve(res);
      }, (err) => {
        return reject(err);
      });
    });
  }
}
