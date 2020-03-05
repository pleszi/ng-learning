import { FootballService } from "./service/football.service";
import { HeroService } from "./service/hero.service";
import { Component } from "@angular/core";
import { Hero } from "./model/hero";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myFirstAngularApp";
  myHero: Hero;
  numbers: Array<number> = [8, 7, 4, 9, 13, 28, 1];
  anything: Array<any> = [
    "alma",
    "barack",
    1,
    "narancs",
    13,
    28,
    42,
    5,
    6,
    "bicikli",
    22.5,
    "banan",
    23
  ];
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
    console.log(this.getSumOfItems(this.numbers));
    console.log(this.getAverageOfItems(this.numbers));
    console.log(this.getSumOfEvenItems(this.numbers));
    console.log(this.getCountOfEvenItems(this.numbers));
    console.log(this.getSecondSmallerItem(this.numbers));
    console.log(this.getThirdBiggestItem(this.numbers));
    console.log(this.findGivenItemWithLinearSearch(this.anything, 1));
    console.log(this.findGivenItemWithBinarySearch(this.anything, "alma"));

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
    return this.getSumOfItems(paramArray) / paramArray.length;
  }

  getSumOfItems(paramArray: Array<number>) {
    return paramArray.reduce((a, b) => a + b, 0);
  }

  orderItems(paramArray: Array<number>) {
    paramArray.sort(function(a, b) {
      return a - b;
    });
    return paramArray;
  }

  getSumOfEvenItems(paramArray: Array<number>) {
    let sum = 0;
    paramArray.forEach(element => {
      sum += element % 2 == 0 ? element : 0;
    });

    return sum;
  }

  getCountOfEvenItems(paramArray: Array<number>) {
    let count = 0;
    paramArray.forEach(element => {
      count += element % 2 == 0 ? 1 : 0;
    });
    return count;
  }

  getSecondSmallerItem(paramArray: Array<number>) {
    paramArray = this.orderItems(paramArray);
    if (paramArray.length > 1) return paramArray[1];
    else return 0;
  }

  getThirdBiggestItem(paramArray: Array<number>) {
    paramArray = this.orderItems(paramArray);
    paramArray.reverse();
    if (paramArray.length > 1) return paramArray[2];
    else return 0;
  }

  findGivenItemWithBinarySearch(paramArray: Array<any>, item: any) {
    let left = 0;
    let right = paramArray.length - 1;
    paramArray.sort();
    console.log("paramArray: " + paramArray);
    while (left <= right) {
      console.log("left: " + left + ", right: " + right);
      const mid = left + Math.floor(right - left) / 2;
      console.log("mid: " + mid);
      if (paramArray[mid] === item) {
        return "The array contains the searched item";
      } else if (paramArray[mid] == item) {
        return "Megvan";
      }

      if (paramArray[mid] < item) {
        console.log(paramArray[mid] + " smaller than " + item);
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return "The array doesn't contain the searched item";
  }

  findGivenItemWithLinearSearch(paramArray: Array<any>, item: number) {
    let find: boolean = false;
    paramArray = this.orderItems(paramArray);
    paramArray.forEach(element => {
      if (element == item) find = true;
    });

    if (find) return "The array contains the searched item";
    else return "The array doesn't contain the searched item";
  }

  bubbleSort(paramArray: Array<number>) {
    let len = paramArray.length;
  }
}
