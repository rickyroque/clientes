import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LaddaModule,
  ],
  providers: [
  ],
})
export class AuthModule { }
