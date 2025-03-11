import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertsMsgComponent } from './components/alerts/alerts-msg.component';


@NgModule({
  declarations: [
    LoadingComponent,
    AlertsMsgComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoadingComponent,
    AlertsMsgComponent,
  ]
})
export class SharedModule { }
