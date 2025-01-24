import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LaddaModule } from 'angular2-ladda';
import { AppBootstrapModule } from 'src/app/app-bootstrap.module';

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    CalendarioRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BreadcrumbModule,
    AppMaterialModule,
    AppBootstrapModule,
    SharedModule,
    LaddaModule,
  ],
  providers: [
  ],
})
export class CalendarioModule { }
