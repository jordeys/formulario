import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Componente1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class Componente1Module { }

