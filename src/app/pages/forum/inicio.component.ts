import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { ForumService } from 'src/app/services/forum.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/803/250`);

  // categories: Category[] = [];

  constructor(
    // public forumService: ForumService,
    // public categoryService: CategoryService
  )
  {}

  ngOnInit() {
    // this.categoryService.loadCategories().then((categories: Category[]) => { this.categories = categories; });
  }


}