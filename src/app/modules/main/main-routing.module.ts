import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Main', breadcrumb: 'main' }, component: MainComponent,

        children: [
            {
                path: 'calendario',
                loadChildren: () => import('../calendario/calendario.module').then(m => m.CalendarioModule),
            },

            {
              path: 'ordenes',
              loadChildren: () => import('../ordenes/ordenes.module').then(m => m.OrdenesModule),
            },

            {
                path: 'configuracion',
                loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionModule),
            },
        ]
    },

    
];
 
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ], 
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
