"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var race_service_1 = require("./race.service");
var RacesComponent = (function () {
    function RacesComponent(raceService) {
        this.raceService = raceService;
        this.heading = "Ultra Racing Schedule";
        this.cash = 10000;
    }
    RacesComponent.prototype.ngOnInit = function () {
        this.races = this.raceService.getRaces();
        //.subscribe(races => this.races = races);
    };
    //asks the service for data
    RacesComponent.prototype.totalCost = function () {
        var sum = 0;
        for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
            var race = _a[_i];
            if (race.isRacing)
                sum += race.entryFee;
        }
        return sum;
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    RacesComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        }
        else {
            alert("You don't have enough cash");
        }
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    return RacesComponent;
}());
RacesComponent = __decorate([
    core_1.Component({
        selector: 'my-races',
        templateUrl: './app/races.component.html',
        styleUrls: ['./app/races.component.css']
    }),
    __metadata("design:paramtypes", [race_service_1.RaceService])
], RacesComponent);
exports.RacesComponent = RacesComponent;
/**
 * Created by Окси on 28.02.2017.
 */
//# sourceMappingURL=races.component.js.map