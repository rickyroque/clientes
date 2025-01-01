import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesComponent } from './ordenes/ordenes.component';

const routes: Routes = [
    {
        path: '',
        data: { title: 'Ordenes', breadcrumb: 'ordenes' }, component: OrdenesComponent
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
export class OrdenesRoutingModule { }
