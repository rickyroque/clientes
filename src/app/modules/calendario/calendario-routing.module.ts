import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Calendario de Viajes', breadcrumb: 'calendario' }, component: CalendarioComponent
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
export class CalendarioRoutingModule { }
