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
  selector: 'app-calendario-det',
  templateUrl: './calendario-det.component.html',
  styleUrls: ['./calendario-det.component.css']
})
export class CalendarioDetComponent implements OnInit{
  
  title = 'Detalle del Viaje';

  //Para pasajeros

  dataSourcePasajeros: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortPasajeros', { static: true }) sortPasajeros!: MatSort;
  @ViewChild('paginatorPasajeros', { static: true }) paginatorPasajeros!: MatPaginator;

  displayedColumnsPasajeros: string[] = [
    'nombre',
    'identificacion',
    'abono',
    'saldo',
    'seleccion',
    'pareja',
    'balance',
  ];

  listPasajeros: Clientes[] = [];
  
  //Para presupuestos proyectado

  dataSourceGastosF: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortGastosF', { static: true }) sortGastosF!: MatSort;
  @ViewChild('paginatorGastosF', { static: true }) paginatorGastosF!: MatPaginator;

  displayedColumnsGastosF: string[] = [
    'descripcion',
    'valor',
    'final',
  ];

  listGastosF: Clientes[] = [];

  dataSourceGastosEMV: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortGastosEMV', { static: true }) sortGastosEMV!: MatSort;
  @ViewChild('paginatorGastosEMV', { static: true }) paginatorGastosEMV!: MatPaginator;

  displayedColumnsGastosEMV: string[] = [
    'descripcion',
    'guia',
    'ayudante',
    'chofer',
    'final',
  ];

  listGastosEMV: Clientes[] = [];

  dataSourceGastosXP: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortGastosXP', { static: true }) sortGastosXP!: MatSort;
  @ViewChild('paginatorGastosXP', { static: true }) paginatorGastosXP!: MatPaginator;

  displayedColumnsGastosXP: string[] = [
    'descripcion',
    'valorU',
    'final',
  ];

  listGastosXP: Clientes[] = [];

  dataSourceBalanceG: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortBalanceG', { static: true }) sortBalanceG!: MatSort;
  @ViewChild('paginatorBalanceG', { static: true }) paginatorBalanceG!: MatPaginator;

  displayedColumnsBalanceG: string[] = [
    'descripcion',
    'pasajeros',
    'valorU',
    'ingresos',
    'gastos',
    'final',
  ];

  listBalanceG: Clientes[] = [];

  // Para presupuesto real

  dataSourceGastosR: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortGastosR', { static: true }) sortGastosR!: MatSort;
  @ViewChild('paginatorGastosR', { static: true }) paginatorGastosR!: MatPaginator;

  displayedColumnsGastosR: string[] = [
    'descripcion',
    'pasajeros',
    'valorU',
    'descuento',
    'final',
  ];

  listGastosR: Clientes[] = [];

  dataSourceBalanceF: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortBalanceF', { static: true }) sortBalanceF!: MatSort;
  @ViewChild('paginatorBalanceF', { static: true }) paginatorBalanceF!: MatPaginator;

  displayedColumnsBalanceF: string[] = [
    'descripcion',
    'pasajeros',
    'valorU',
    'ingresos',
    'gastos',
    'final',
  ];

  listBalanceF: Clientes[] = [];

  // Demas variables

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
    
    this.listPasajeros = [
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

    this.dataSourcePasajeros.data = this.listPasajeros;
    this.dataSourcePasajeros.paginator = this.paginatorPasajeros;
    this.dataSourcePasajeros.sort = this.sortPasajeros;

    this.dataSourceGastosF.data = this.listPasajeros;
    this.dataSourceGastosF.paginator = this.paginatorGastosF;
    this.dataSourceGastosF.sort = this.sortGastosF;

    this.dataSourceGastosEMV.data = this.listPasajeros;
    this.dataSourceGastosEMV.paginator = this.paginatorGastosEMV;
    this.dataSourceGastosEMV.sort = this.sortGastosEMV;

    this.dataSourceGastosXP.data = this.listPasajeros;
    this.dataSourceGastosXP.paginator = this.paginatorGastosXP;
    this.dataSourceGastosXP.sort = this.sortGastosXP;

    this.dataSourceBalanceG.data = this.listPasajeros;
    this.dataSourceBalanceG.paginator = this.paginatorBalanceG;
    this.dataSourceBalanceG.sort = this.sortBalanceG;

    this.dataSourceGastosR.data = this.listPasajeros;
    this.dataSourceGastosR.paginator = this.paginatorGastosR;
    this.dataSourceGastosR.sort = this.sortGastosR;

    this.dataSourceBalanceF.data = this.listPasajeros;
    this.dataSourceBalanceF.paginator = this.paginatorBalanceF;
    this.dataSourceBalanceF.sort = this.sortBalanceF;
          
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
