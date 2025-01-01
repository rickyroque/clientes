import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [
  ],
})
export class MainModule { }
