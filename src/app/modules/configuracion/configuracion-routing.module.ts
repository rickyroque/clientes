import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Configuracion', breadcrumb: 'configuracion' }, component: ConfiguracionComponent
    }
];
 
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ], 
    exports: [
        RouterModule
    ]
})
export class ConfiguracionRoutingModule { }
