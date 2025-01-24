import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  @ViewChild('mdlEjemplo', { static: true }) public mdlEjemplo!: TemplateRef<any>;
  modalRef!: BsModalRef;

  displayedColumns: string[] = [
    'viaje',
    'fecha1',
    'fecha2',
    'fecha3',
    'fecha4',
    'fecha5',
    'estado',
    'valor',
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
    private builder: FormBuilder
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

  openModalDepartamento(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-supremo' })
    );
  }

  public open() {
    this.openModalDepartamento(this.mdlEjemplo);
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
