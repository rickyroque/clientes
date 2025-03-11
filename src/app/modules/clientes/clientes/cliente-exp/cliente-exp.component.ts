import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Clientes } from 'src/app/models/clientes.model';
import { Pdf } from 'src/app/models/pdf.model';

@Component({
  selector: 'app-cliente-exp',
  templateUrl: './cliente-exp.component.html',
  styleUrls: ['./cliente-exp.component.scss']
})
export class ClienteExpComponent implements OnInit{

    title = 'Experiencias del Cliente';
  
  
    displayedColumns: string[] = [
      'nombre',
      'identificacion',
      'observacion',
      'accion',
    ];
  
    dataSource: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
    @ViewChild(MatSort, { static: true }) sort!: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
    isLoading!: boolean;
    loadDepartamento : boolean = false;
  
    listClientes: Clientes[] = [];
  
    formClientes: FormGroup;
  
    constructor(
      private paginatorIntl: MatPaginatorIntl, private modalService: BsModalService,
      private builder: FormBuilder, private router: Router,
    ) { 
      this.paginatorIntl.itemsPerPageLabel = 'Elementos por página: ';
  
      this.formClientes = this.builder.group({
        viaje: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        valor: ['', [Validators.required]],
      });
    }
  
    ngOnInit(): void {
      this.cargarCalendario();
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    
      this.paginator.page.subscribe(() => {
        setTimeout(() => {
          this.reaplicarEstilos();
        }, 0);
      });
    }
  
    reaplicarEstilos() {
      const headerCells = document.querySelectorAll('.modelo-tabla');
  
      headerCells.forEach((cell) => {
        cell.classList.add('modelo-tabla');
      });
    }
  
    cargarCalendario() {
      
      this.listClientes = [
        { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
        { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
        { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
        { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
        { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
        { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
        
      ].map((el) => new Clientes(el));
  
      this.dataSource.data = this.listClientes;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
            
    }
  
    ir(id: any) {
      this.router.navigate(['/home/calendario/calendario-det', id]);
    }
  
    generarPDF() {
      const testData = [
        { columna1: 'Nombre1', columna2: 'Nombre2', columna3: 'Nombre3', columna4: 'Nombre4', columna5: 'Nombre5' },
        { columna1: 'xxx', columna2: 'xxx', columna3: 'xxx', columna4: 'xxx', columna5: 'xxx' },
        { columna1: 'xxx', columna2: 'xxx', columna3: 'xxx', columna4: 'xxx', columna5: 'xxx' },
      ];
    
      Pdf.getPDFInversionistas(this.dataForExport(testData)).open();
    }
    
    dataForExport(data: any[]) {
      return data.map((t) => {
        return {
          'Columna 1': t.columna1,
          'Columna 2': t.columna2,
          'Columna 3': t.columna3,
          'Columna 4': t.columna4,
          'Columna 5': t.columna5,
        };
      });
    }
    
    addClassValidator(inputForm:AbstractControl){
      return {
        'is-valid': inputForm.valid && (inputForm.dirty || inputForm.touched),
        'is-invalid': inputForm.invalid && (inputForm.dirty || inputForm.touched)
      }
    }

}
