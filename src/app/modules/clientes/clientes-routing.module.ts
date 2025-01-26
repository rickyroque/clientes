import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteExpComponent } from './clientes/cliente-exp/cliente-exp.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Listado de Clientes', breadcrumb: 'clientes' },  children: [
            { path: '', component: ClientesComponent },
            {
                path: 'cliente-exp/:id',
                data: { title: 'Clientes - Experiencias', breadcrumb: 'cliente-exp' }, component: ClienteExpComponent
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
export class ClientesRoutingModule { }
