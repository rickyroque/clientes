import { NgModule } from "@angular/core";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

/**
 * Módulo de bootstrap.
 */
@NgModule({
  exports: [
    CollapseModule,
    ModalModule,
    TooltipModule,
    BsDatepickerModule
  ],
  imports:[
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class AppBootstrapModule {}