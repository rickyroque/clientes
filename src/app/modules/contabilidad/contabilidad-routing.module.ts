import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Contabilidad', breadcrumb: 'contabilidad' },  children: [
            { path: '', component: ContabilidadComponent },
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
export class ContabilidadRoutingModule { }
