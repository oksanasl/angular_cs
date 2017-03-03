import { RACES } from './mocks';
import { Injectable } from '@angular/core';
// import {HttpModule} from "@angular/http";
// import { Races } from "";
// import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {
    getRaces() {

        // constructor(private http: Http) {}
        return RACES;

    // return this.http.get('app/races.json')
    // .map(response => <Race[]>response.json().racesData);
    //}

}
}

// Fetches the appropriate


/**
 * Created by Окси on 02.03.2017.
 */
