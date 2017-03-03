import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './race.service';
import { FormsModule } from '@angular/forms';
// import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        //HttpModule
    ],
    declarations: [
        AppComponent,
        RacesComponent
    ],
    providers: [ RaceService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}



/**
 * Created by Окси on 10.02.2017.
 */
