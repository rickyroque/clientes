import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  menuVisible: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    console.log(this.menuVisible);
  }

  constructor(
      private router: Router,
    ) { 
  }

  irCalendario() {
    this.router.navigate(['/home/calendario']);
  }

  irExperiencias() {
    this.router.navigate(['/home/experiencias']);
  }

  irClientes() {
    this.router.navigate(['/home/clientes']);
  }

  irContabilidad() {
    this.router.navigate(['/home/contabilidad']);
  }

  irSalir() {
    this.router.navigate(['']);
  }

}
