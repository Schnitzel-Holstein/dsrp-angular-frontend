import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    public forumService: ForumService,
    public categoryService: CategoryService
  )
  {}

  ngOnInit() {
    this.categoryService.loadCategories().then((categories: Category[]) => { this.categories = categories; });
  }


}
