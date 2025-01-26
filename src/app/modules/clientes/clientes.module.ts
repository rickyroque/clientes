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
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteExpComponent } from './clientes/cliente-exp/cliente-exp.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteExpComponent
  ],
  imports: [
    ClientesRoutingModule,
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
export class ClientesModule { }
