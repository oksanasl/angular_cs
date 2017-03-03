import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';

@Component({
    selector: 'my-races',
    templateUrl: './app/races.component.html',
    styleUrls: ['./app/races.component.css']
})
export class RacesComponent {
    heading = "Ultra Racing Schedule";
    cash = 10000;
    races: Race[];

    constructor(private raceService: RaceService) { }
    ngOnInit() {
        this.races = this.raceService.getRaces()
            //.subscribe(races => this.races = races);
    }
    //asks the service for data

    totalCost() {
        let sum = 0;
        for (let race of this.races) {
            if (race.isRacing) sum += race.entryFee;
        }
        return sum;
    }

    cashLeft() {
        return this.cash - this.totalCost();
    }

    enterRace(race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        } else {
            alert("You don't have enough cash");
        }
    }
    cancelRace(race) {
        race.isRacing = false;
    }
}

/**
 * Created by Окси on 28.02.2017.
 */
