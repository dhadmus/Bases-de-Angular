import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //arreglo
    declarations:[
        HeroeComponent,
        ListadoComponent

    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        //sirve para las directivas
        CommonModule
    ],
})

export class HeroesModule{

}