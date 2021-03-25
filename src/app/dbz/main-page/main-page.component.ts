import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({

  selector: 'app-main-page',

  templateUrl: './main-page.component.html'

})

export class MainPageComponent{

  nuevo : Personaje = {
   nombre : 'Goku',
    poder: 12000
  }


  
}

  // cambiarNombre(event: any) {

  //   console.log(event.target.value);

  // }

