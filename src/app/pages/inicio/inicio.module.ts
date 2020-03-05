import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    NgbModule,
    InicioRoutingModule,
    SimplebarAngularModule
  ]
})
export class InicioModule { }
