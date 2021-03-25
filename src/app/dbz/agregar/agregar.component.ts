import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo : Personaje={
    nombre:'',
    poder:0
  }

 @Output() nuevoPersonaje:  EventEmitter<Personaje> = new EventEmitter<Personaje>();

 constructor (private dbzServices: DbzService){}
  agregar(){

    this.nuevoPersonaje.emit(this.nuevo);

    if(this.nuevo.nombre.trim().length === 0){

      return;

    }

    this.dbzServices.agregarNuevoPersonaje(this.nuevo)
    
    this.nuevo = {
      nombre: '',
      poder : 0
    }

 }

}