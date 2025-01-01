import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
  declarations: [
    ConfiguracionComponent
  ],
  imports: [
    ConfiguracionRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [
  ],
})
export class ConfiguracionModule { }
