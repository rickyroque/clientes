import { NgModule } from "@angular/core";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

/**
 * Módulo de bootstrap.
 */
@NgModule({
  exports: [
    CollapseModule,
    ModalModule,
    TooltipModule
  ],
  imports:[
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ]
})
export class AppBootstrapModule {}