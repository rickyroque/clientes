import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Calendario } from 'src/app/models/calendario.model';

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
  loadDepartamento : boolean = true;

  listCalendario: Calendario[] = [];

  constructor(
    private paginatorIntl: MatPaginatorIntl, private modalService: BsModalService
  ) { 
    this.paginatorIntl.itemsPerPageLabel = 'Elementos por página: ';
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
  
}
