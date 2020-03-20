import { Component, OnInit, Input } from '@angular/core';
import { Forum } from 'src/app/interfaces/forum.interface';

@Component({
  selector: 'app-sub-forum',
  templateUrl: './sub-forum.component.html',
  styleUrls: ['./sub-forum.component.css']
})
export class SubForumComponent implements OnInit {

  @Input() forum: Forum = null;
  constructor() { }

  ngOnInit() {
  }

}
