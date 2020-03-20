import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryGetInterface } from '../interfaces/categoryGet.interface';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  /**
   * Get a page of forums, filtered or not by a category id
   * @param page <number> Desired page to search
   * @param categoryId <number> Optional category id to filter
   */
  getPage(page: number = 1): Promise<CategoryGetInterface> {
    return new Promise<CategoryGetInterface>((resolve, reject) => {
      // Build the url
      const url = `${environment.apiUrl}/categories?limit=100&page=${page}`;

      this.http.get(url)
        .subscribe((res: CategoryGetInterface) => {
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
  loadCategories(): Promise<Category[]> {
    return new Promise<Category[]>(async (resolve, reject) => {
      const categories: Category[] = [];
      let resultValue: CategoryGetInterface = null;
      let currentPage = 1;
      let requestResult: any = null;
      do {
        // Get the page
        requestResult = await this.getPage(currentPage).catch((err) => reject());
        resultValue = requestResult;
        // Increment the page
        currentPage++;
        // Push the results
        categories.push(...resultValue.categories);
      } while (resultValue.categories.length === 100);
      // Return the forums
      return resolve(categories);
    });
  }
}
