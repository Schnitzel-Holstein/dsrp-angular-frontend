import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule
  ]
})
export class DashboardModule { }
