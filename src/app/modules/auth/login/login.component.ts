import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { GeneralService } from 'src/app/services/general.service';
import { AlertService } from 'src/app/shared/components/alerts/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  showPass:boolean = false;
  loading: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder, private router : Router,
    private generalService: GeneralService, private alertService: AlertService,
  ) {
    this.formLogin = this.formBuilder.group({
      user: ['',[Validators.required]],
      pass:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
     sessionStorage.clear();
  }

  login() {
    this.loading = true;
    this.generalService.useService(User.login(this.formLogin.getRawValue()))
      .subscribe((data: any) => {
          if(data?.datos?.token){
            sessionStorage.setItem('idUser', data?.datos?.id_usuario);
            sessionStorage.setItem('token_fks', data?.datos?.token);
            this.ir();
          } else {
            sessionStorage.clear();
            this.alertService.error(data.datos[0].mensaje);
          }
          this.loading = false;
        }
      );
  }

  ir(){
    this.router.navigate(['/home/calendario'])
  }

  toggleShowPass() {
    this.showPass = !this.showPass;
  }

  isInvalid(inputForm:AbstractControl | null){
    return inputForm?.errors && (inputForm.dirty || inputForm.touched)
  }
}
