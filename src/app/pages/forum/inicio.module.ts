import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CategoryComponent } from './components/category/category.component';
import { ForumComponent } from './components/forum/forum.component';
import { SubForumComponent } from './components/sub-forum/sub-forum.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';


@NgModule({
  declarations: [InicioComponent, CategoryComponent, ForumComponent, SubForumComponent, HomeComponent, LoginComponent, RegisterComponent, SectionTitleComponent],
  imports: [
    CommonModule,
    NgbModule,
    InicioRoutingModule,
    SimplebarAngularModule
  ]
})
export class InicioModule { }
