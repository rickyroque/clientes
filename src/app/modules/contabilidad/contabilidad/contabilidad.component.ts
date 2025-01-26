import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Clientes } from 'src/app/models/clientes.model';
import { Pdf } from 'src/app/models/pdf.model';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {
  
  title = 'Contabilidad';

  //Para Balance

  dataSourceBalance: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortBalance', { static: true }) sortBalance!: MatSort;
  @ViewChild('paginatorBalance', { static: true }) paginatorBalance!: MatPaginator;
  
  displayedColumnsBalance: string[] = [
    'descripcion',
    'viaje1',
    'mes',
    'pasajeros',
    'valorU',
    'ingresos',
    'gastos',
    'final',
  ];
  
  listBalance: Clientes[] = [];

  //Para Ingresos

  dataSourceIngresos: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortIngresos', { static: true }) sortIngresos!: MatSort;
  @ViewChild('paginatorIngresos', { static: true }) paginatorIngresos!: MatPaginator;
  
  displayedColumnsIngresos: string[] = [
    'descripcion',
    'ingreso',
    'egreso',
    'final',
  ];
  
  listIngresos: Clientes[] = [];

  //Para Saldos

  dataSourceSaldos: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortSaldos', { static: true }) sortSaldos!: MatSort;
  @ViewChild('paginatorSaldos', { static: true }) paginatorSaldos!: MatPaginator;
  
  displayedColumnsSaldos: string[] = [
    'descripcion',
    'pacifico',
    'pichincha',
    'total',
    'final',
  ];
  
  listSaldos: Clientes[] = [];

  //demas

  isLoading!: boolean;
  loadDepartamento : boolean = false;

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

  cargarCalendario() {
    
    this.listBalance = [
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala' },
      
    ].map((el) => new Clientes(el));

    this.dataSourceBalance.data = this.listBalance;
    this.dataSourceBalance.paginator = this.paginatorBalance;
    this.dataSourceBalance.sort = this.sortBalance;

    this.dataSourceIngresos.data = this.listBalance;
    this.dataSourceIngresos.paginator = this.paginatorIngresos;
    this.dataSourceIngresos.sort = this.sortIngresos;

    this.dataSourceSaldos.data = this.listBalance;
    this.dataSourceSaldos.paginator = this.paginatorSaldos;
    this.dataSourceSaldos.sort = this.sortSaldos;
          
  }

  ir(id: any) {
    
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
