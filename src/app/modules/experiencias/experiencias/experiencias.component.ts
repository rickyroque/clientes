import { formatDate } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Clientes } from 'src/app/models/clientes.model';
import { Pdf } from 'src/app/models/pdf.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {

  title = 'Experiencias';
  
    @ViewChild('mdlExperiencia', { static: true }) public mdlExperiencia!: TemplateRef<any>;
    modalRef!: BsModalRef;
  
    displayedColumns: string[] = [
      'nombre',
      'identificacion',
      'email',
      'pasajeros',
      'numero',
      'accion',
    ];
  
    dataSource: MatTableDataSource<Clientes> = new MatTableDataSource<Clientes>([]);
    @ViewChild(MatSort, { static: true }) sort!: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
    isLoading!: boolean;
    loadDepartamento : boolean = false;
  
    listClientes: Clientes[] = [];
  
    formExperiencia: FormGroup;
  
    constructor(
      private paginatorIntl: MatPaginatorIntl, private modalService: BsModalService,
      private builder: FormBuilder, private router: Router, private generalService: GeneralService,
    ) { 
      this.paginatorIntl.itemsPerPageLabel = 'Elementos por página: ';
  
      this.formExperiencia = this.builder.group({
        estado: [true],
        nombre: ['', [Validators.required]],
        costo: ['', [Validators.required]],

        file: [null],
        url: ['', [Validators.required]],
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
  
    openModalExperiencia(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'modal-supremo' })
      );
    }
  
    public open() {
      this.openModalExperiencia(this.mdlExperiencia);
    }
  
    ir(id: any) {
      this.router.navigate(['/home/experiencias/exp-det', id]);
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
    
    isSavingFile!: boolean;

    processFile(fileInput: any) {
      let date:Date = new Date();
      let file: File = fileInput.files[0];
      const reader = new FileReader();
  
      console.log('llega');
      reader.addEventListener('load', (event: any) => {
        let type = file.type.toLowerCase();
  
        if(type.search("png") != -1 || type.search("jpeg") != -1 || type.search("pdf") != -1 || type.search("vnd.ms-excel") != -1 || type.search("vnd.openxmlformats-officedocument.spreadsheetml.sheet") != -1){
          let blob = file.slice(0, file.size, file.type);
          
          console.log('entra');
          
          file = new File([blob],'Archivo-'+formatDate(date, 'yyyyMMddHHmmssSS', 'en-US')+'.'+file.name.split('.').pop(), {type: file.type});
          
          this.saveFile(file);

        }else{
         
          this.formExperiencia.get('file')!.setValue(null);
          this.formExperiencia.get('url')!.setValue('');
          console.log('sale error');
          //this.alertService.warn("Los formatos permitidos son: PNG, JPG y PDF.")
        }
      });
  
      reader.readAsDataURL(file);
    }

    saveFile(f : any){
      this.isSavingFile = true; 
      this.formExperiencia.get('file')!.disable();
      
  
      this.generalService.uploadImage(f).subscribe(
        (r:any)=>{
          this.isSavingFile = false;
          this.formExperiencia.get('file')!.enable();
          this.formExperiencia.get('url')!.setValue(r.datos[0].url);
        }
      );
  
    }

    addClassValidator(inputForm:AbstractControl){
      return {
        'is-valid': inputForm.valid && (inputForm.dirty || inputForm.touched),
        'is-invalid': inputForm.invalid && (inputForm.dirty || inputForm.touched)
      }
    }

}
