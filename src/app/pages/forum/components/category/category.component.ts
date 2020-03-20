import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { ForumService } from 'src/app/services/forum.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category = null;
  constructor(
    public forumService: ForumService,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.forumService.loadForums(this.category.id).then((forums) => {
      this.category.forums = forums;
    });
  }

  loadForums(){}

}
