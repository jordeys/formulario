import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  constructor(private router: Router) { }
  nombre: any;
  correo: any;
  contra: any;
  numero: any;
  confirmar:any;
  ngOnInit(): void {
  }
  navegacion(){
  this.router.navigate([''])
  }
recuperar()
{
  this.nombre = localStorage.getItem('nombre');
  this.correo = localStorage.getItem('email');
  this.numero = localStorage.getItem('numero');
}
}
