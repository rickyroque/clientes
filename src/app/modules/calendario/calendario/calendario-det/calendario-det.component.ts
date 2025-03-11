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
  styleUrls: ['./calendario-det.component.scss']
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
    'balance',
  ];

  displayedColumnsPasajerosMovil: string[] = [
    'nombre',
    'abono',
    'saldo',
  ];

  listPasajeros: Clientes[] = [];
  
  //Para presupuestos proyectado

  dataSourceGastosF: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortGastosF', { static: true }) sortGastosF!: MatSort;
  @ViewChild('paginatorGastosF', { static: true }) paginatorGastosF!: MatPaginator;

  displayedColumnsGastosF: string[] = [
    'descripcion',
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
    'extra',
    'final',
  ];

  listGastosEMV: Clientes[] = [];

  dataSourceGastosXP: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
  @ViewChild('sortGastosXP', { static: true }) sortGastosXP!: MatSort;
  @ViewChild('paginatorGastosXP', { static: true }) paginatorGastosXP!: MatPaginator;

  displayedColumnsGastosXP: string[] = [
    'descripcion',
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

  formPasajeros: FormGroup;
  formPPGF: FormGroup;
  formPPEMV: FormGroup;
  formPPGPP: FormGroup;
  formPRGG: FormGroup;

  //modales
  @ViewChild('mdlPasajero', { static: true }) public mdlPasajero!: TemplateRef<any>;
  modalRefPasajero!: BsModalRef;

  @ViewChild('mdlPPGF', { static: true }) public mdlPPGF!: TemplateRef<any>;
  modalRefPPGF!: BsModalRef;

  @ViewChild('mdlPPEMV', { static: true }) public mdlPPEMV!: TemplateRef<any>;
  modalRefPPEMV!: BsModalRef;

  @ViewChild('mdlPPGPP', { static: true }) public mdlPPGPP!: TemplateRef<any>;
  modalRefPPGPP!: BsModalRef;

  @ViewChild('mdlPRGG', { static: true }) public mdlPRGG!: TemplateRef<any>;
  modalRefPRGG!: BsModalRef;

  listEjemplo: Clientes[] = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María García' },
    { id: 3, nombre: 'Carlos López' },
    { id: 4, nombre: 'Ana Martínez' },
    { id: 5, nombre: 'Luis Rodríguez' }
  ];

  constructor(
    private paginatorIntl: MatPaginatorIntl, private modalService: BsModalService,
    private builder: FormBuilder, private router: Router,
  ) { 
    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página: ';

    this.formPasajeros = this.builder.group({
      color: ['#ffffff', [Validators.required]],
      lista: [1, [Validators.required]],
      abono: ['', [Validators.required]],
      banco: ['', [Validators.required]],
    });

    this.formPPGF = this.builder.group({
      descripcion: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });

    this.formPPEMV = this.builder.group({
      descripcion: ['', [Validators.required]],
      guia: ['', [Validators.required]],
      ayudante: ['', [Validators.required]],
      chofer: ['', [Validators.required]],
      extra: ['', [Validators.required]],
      total: ['', [Validators.required]],
    });

    this.formPPGPP = this.builder.group({
      descripcion: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });

    this.formPRGG = this.builder.group({
      descripcion: ['', [Validators.required]],
      pasajeros: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descuento: ['', [Validators.required]],
      total: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.cargarCalendario();
  }

  ngAfterViewInit() {
    this.dataSourcePasajeros.paginator = this.paginatorPasajeros;

    this.dataSourceGastosF.paginator = this.paginatorGastosF;
    this.dataSourceGastosEMV.paginator = this.paginatorGastosEMV;
    this.dataSourceGastosXP.paginator = this.paginatorGastosXP;
    this.dataSourceBalanceG.paginator = this.paginatorBalanceG;

    this.dataSourceGastosR.paginator = this.paginatorGastosR;
    this.dataSourceBalanceF.paginator = this.paginatorBalanceF;
  
    this.paginatorPasajeros.page.subscribe(() => {
      setTimeout(() => {
        this.reaplicarEstilos();
      }, 0);
    });

    this.paginatorGastosF.page.subscribe(() => {
      setTimeout(() => {
        this.reaplicarEstilos();
      }, 0);
    });

    this.paginatorGastosEMV.page.subscribe(() => {
      setTimeout(() => {
        this.reaplicarEstilos();
      }, 0);
    });

    this.paginatorGastosXP.page.subscribe(() => {
      setTimeout(() => {
        this.reaplicarEstilos();
      }, 0);
    });

    this.paginatorBalanceG.page.subscribe(() => {
      setTimeout(() => {
        this.reaplicarEstilos();
      }, 0);
    });

    this.paginatorGastosR.page.subscribe(() => {
      setTimeout(() => {
        this.reaplicarEstilos();
      }, 0);
    });

    this.paginatorBalanceF.page.subscribe(() => {
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
    
    this.listPasajeros = [
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      { nombre: 'Ricky Roque', identificacion: '0750484578', telefono: '+593 96 970 9838', email: 'rickyroque710@gmail.com', nacimiento: '07-10-1999', ciudad: 'Machala', saldo: '50' },
      
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

  //modales

  openModalPasajero(template: TemplateRef<any>) {
    this.modalRefPasajero = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public openPasajero() {
    this.openModalPasajero(this.mdlPasajero);
  }

  openModalPPGF(template: TemplateRef<any>) {
    this.modalRefPPGF = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public openPPGF() {
    this.openModalPPGF(this.mdlPPGF);
  }

  openModalPPEMV(template: TemplateRef<any>) {
    this.modalRefPPEMV = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public openPPEMV() {
    this.openModalPPEMV(this.mdlPPEMV);
  }

  openModalPPGPP(template: TemplateRef<any>) {
    this.modalRefPPGPP = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public openPPGPP() {
    this.openModalPPGPP(this.mdlPPGPP);
  }

  openModalPRGG(template: TemplateRef<any>) {
    this.modalRefPRGG = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public openPRGG() {
    this.openModalPRGG(this.mdlPRGG);
  }

  public pasajero(){
    if (this.formPasajeros.valid) {
      // Obtén el valor del color seleccionado
      const colorSeleccionado = this.formPasajeros.get('color')?.value;
      console.log('Color seleccionado:', colorSeleccionado);
      // Aquí puedes hacer lo que necesites con el valor del color
    } else {
      console.log('Por favor, selecciona un color.');
    }
  }

  seleccionados: Clientes[] = [];

  agregar() {
    const selectedId = Number(this.formPasajeros.get('lista')?.value); // Convertir a número
    console.log('ID seleccionado:', selectedId);
  
    if (!selectedId) {
      console.log('⚠️ No se ha seleccionado un cliente válido.');
      return;
    }
  
    const cliente = this.listEjemplo.find(c => c.id === selectedId);
    console.log('Cliente encontrado:', cliente);
  
    if (!cliente) {
      console.log('⚠️ No se encontró el cliente en listEjemplo.');
      return;
    }
  
    const existe = this.seleccionados.some(c => c.id === cliente.id);
    console.log('¿El cliente ya está agregado?', existe);
  
    if (!existe) {
      this.seleccionados = [...this.seleccionados, cliente]; // 🔹 FORZAR DETECCIÓN DE CAMBIO
      console.log('Cliente agregado:', cliente);
    } else {
      console.log('⚠️ Cliente ya existe en la lista.');
    }

    console.log(this.seleccionados);
  }
  

  eliminar(cliente: Clientes) {
    this.seleccionados = this.seleccionados.filter(c => c.id !== cliente.id);
  }

  preferido: Clientes | null = null; // Cliente preferido

  marcarPreferido(cliente: Clientes) {
    console.log('entra');
    if (this.preferido?.id === cliente.id) {
      // Si el cliente ya es preferido, lo desmarcamos
      this.preferido = null;
      console.log('entra1');
    } else {
      // Marcar este cliente como preferido y desmarcar el anterior
      this.preferido = cliente;
      console.log('entra2');
    }
    console.log(this.preferido);
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
