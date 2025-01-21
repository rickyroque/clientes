import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent {

  @ViewChild('mdlEjemplo', { static: true }) public mdlEjemplo!: TemplateRef<any>;
  modalRef!: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) {}

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
