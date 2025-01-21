import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    OrdenesComponent
  ],
  imports: [
    OrdenesRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [
  ],
})
export class OrdenesModule { }
