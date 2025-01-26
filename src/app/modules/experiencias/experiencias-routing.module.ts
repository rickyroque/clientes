import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciasComponent } from './experiencias/experiencias.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Experiencias', breadcrumb: 'experiencias' },  children: [
            { path: '', component: ExperienciasComponent },
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
