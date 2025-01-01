import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent {

  formSetting:FormGroup;
  showPassOld:boolean = false;
  showPassNew:boolean = false;
  
  constructor(
    private formBuilder: FormBuilder, private router : Router
  ) {
    this.formSetting = this.formBuilder.group({
      passOld: ['',[Validators.required]],
      passNew:['',[Validators.required]]
    });
  }
  
  toggleShowPassOld() {
    this.showPassOld = !this.showPassOld;
  }

  toggleShowPassNew() {
    this.showPassNew = !this.showPassNew;
  }

  isInvalid(inputForm:AbstractControl | null){
    return inputForm?.errors && (inputForm.dirty || inputForm.touched)
  }
}
