import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioDetComponent } from './calendario/calendario-det/calendario-det.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Calendario de Viajes', breadcrumb: 'calendario' }, children: [
            { path: '', component: CalendarioComponent },
            {
                path: 'calendario-det/:id',
                data: { title: 'Calendario - detalle', breadcrumb: 'calendario-det' }, component: CalendarioDetComponent
            }
        ]
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
