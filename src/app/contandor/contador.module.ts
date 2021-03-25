import { NgModule } from "@angular/core";
import { ContadorComponent } from './contandor/contador.component';

@NgModule ({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})

export class ContadorModule {

}