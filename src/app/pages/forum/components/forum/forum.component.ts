import { Component, OnInit, Input } from '@angular/core';
import { Forum } from 'src/app/interfaces/forum.interface';
import { ForumService } from 'src/app/services/forum.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Thread } from 'src/app/interfaces/thread.interface';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  // Receive the forum as input
  @Input() forum: Forum = null;
  totalThreads = 0;
  subForums: Forum[] = [];
  lastPost: Post = null;
  lastThread: Thread = null;

  constructor(public forumService: ForumService) { }

  ngOnInit() {
    // Load total of threads
    this.forumService.totalThreads(this.forum.id)
      .then((total: number) => {
        console.log(total);
        this.totalThreads = total;
      });

    // Load sub forums
    this.forumService.loadForums(null, true, this.forum.id)
      .then((forums) => {
        this.subForums = forums;
      });

    // Get the last message of the forum
    this.forumService.getLastMessage(this.forum.id)
      .then((details) => {
        this.lastThread = details.thread ? details.thread.thread : null;
        this.lastPost = details.post;
      });
  }

}
