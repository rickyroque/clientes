import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin:FormGroup;
  showPass:boolean = false;
  
  constructor(
    private formBuilder: FormBuilder, private router : Router
  ) {
    this.formLogin = this.formBuilder.group({
      usuario: ['',[Validators.required]],
      pass:['',[Validators.required]]
    });
  }

  ir(){
    this.router.navigate(['/home/ordenes'])
  }

  toggleShowPass() {
    this.showPass = !this.showPass;
  }

  isInvalid(inputForm:AbstractControl | null){
    return inputForm?.errors && (inputForm.dirty || inputForm.touched)
  }
}
