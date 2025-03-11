import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Calendario } from 'src/app/models/calendario.model';
import { Pdf } from 'src/app/models/pdf.model';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit{

  title = 'Calendario de Viajes';
 
  @ViewChild('mdlCalendario', { static: true }) public mdlCalendario!: TemplateRef<any>;
  modalRef!: BsModalRef;

  displayedColumns: string[] = [
    'viaje',
    'fecha',
    'estado',
    'valor',
    'accion'
  ];

  dataSource: MatTableDataSource<Calendario> = new MatTableDataSource<Calendario>([]);
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  isLoading!: boolean;
  loadDepartamento : boolean = false;

  listCalendario: Calendario[] = [];

  formCalendario: FormGroup;

  constructor(
    private paginatorIntl: MatPaginatorIntl, private modalService: BsModalService,
    private builder: FormBuilder, private router: Router,
  ) { 
    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página: ';

    this.formCalendario = this.builder.group({
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
    
    this.listCalendario = [
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 3', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 1', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      { viaje: 'Nombre 2', fecha: '2025-01-20', estado: 'En venta', valor: '0.00' },
      
    ].map((el) => new Calendario(el));

    this.dataSource.data = this.listCalendario;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
          
  }

  openModalCalendario(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public open() {
    this.openModalCalendario(this.mdlCalendario);
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
  
  ir(id: any) {
    this.router.navigate(['/home/calendario/calendario-det', id]);
  }

  addClassValidator(inputForm:AbstractControl){
    return {
      'is-valid': inputForm.valid && (inputForm.dirty || inputForm.touched),
      'is-invalid': inputForm.invalid && (inputForm.dirty || inputForm.touched)
    }
  }
}
