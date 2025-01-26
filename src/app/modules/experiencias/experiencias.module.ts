import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LaddaModule } from 'angular2-ladda';
import { AppBootstrapModule } from 'src/app/app-bootstrap.module';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ExperienciasRoutingModule } from './experiencias-routing.module';

@NgModule({
  declarations: [
    ExperienciasComponent
  ],
  imports: [
    ExperienciasRoutingModule,
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
export class ExperienciasModule { }
