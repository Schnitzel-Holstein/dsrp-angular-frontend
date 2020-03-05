import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SidebarModule,
    HttpClientModule
  ]
})
export class UsersModule { }
