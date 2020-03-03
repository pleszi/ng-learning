import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';
import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  myHero: Hero;
  numbers: Array<number> = [8, 7, 4, 9, 13, 28, 1];
  /*Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  }
    */


  listObservable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService

  ) {
    this.listObservable = hService.getAll();

    console.log(this.getSmallestItem());
    console.log(this.getLargestItem());
    console.log(this.getAverageOfItems(this.numbers));



    /*this.hService.getAll().forEach(value => {
      console.log("All hero: ", value);
    });
  
    this.hService.getOne(1).forEach(value => {
      console.log("First hero: ", value);
    });
  
    this.hService.add({ id: 600, name: "Jack", address: "Budapest", superpower: "hungry" }).forEach(value => {
      console.log("Added Hero: ", value);
    });
  
    this.hService.update({ id: 1, name: "Lucy" }).forEach(value => {
      console.log("Update hero: ", value);
    });
  
    this.hService.remove(3).forEach(value => {
      console.log("Remove hero: ", value);
    });*/
  }

  setHero(hero: Hero): void {
    this.myHero = hero;
  }

  getSmallestItem() {
    return Math.min(...this.numbers);
  }

  getLargestItem() {
    return Math.max(...this.numbers);
  }

  getAverageOfItems(paramArray: Array<number>) {

    return paramArray.reduce((a, b) => a + b, 0);

  }

}
