"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocks_1 = require("./mocks");
var core_1 = require("@angular/core");
// import {HttpModule} from "@angular/http";
// import { Races } from "";
// import 'rxjs/add/operator/map';
var RaceService = (function () {
    function RaceService() {
    }
    RaceService.prototype.getRaces = function () {
        // constructor(private http: Http) {}
        return mocks_1.RACES;
        // return this.http.get('app/races.json')
        // .map(response => <Race[]>response.json().racesData);
        //}
    };
    return RaceService;
}());
RaceService = __decorate([
    core_1.Injectable()
], RaceService);
exports.RaceService = RaceService;
// Fetches the appropriate
/**
 * Created by Окси on 02.03.2017.
 */
//# sourceMappingURL=race.service.js.map