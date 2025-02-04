import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ExpDetComponent } from './experiencias/exp-det/exp-det.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Experiencias', breadcrumb: 'experiencias' },  children: [
            { path: '', component: ExperienciasComponent },
            {
                path: 'exp-det/:id',
                data: { title: 'Experiencia - Detalle', breadcrumb: 'exp-det' }, component: ExpDetComponent
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
export class ExperienciasRoutingModule { }
