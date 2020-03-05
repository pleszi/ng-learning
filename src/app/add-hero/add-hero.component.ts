import { Superpowers, Hero } from "../model/hero";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HeroService } from "../service/hero.service";

@Component({
  selector: "app-add-hero",
  templateUrl: "./add-hero.component.html",
  styleUrls: ["./add-hero.component.css"]
})
export class AddHeroComponent implements OnInit {
  hero: Hero;
  powers: string[] = new Superpowers().list;
  newHeroGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    address: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z0-9-. ]{10,}")
    ]),
    superpower: new FormControl("")
  });

  constructor(private hService: HeroService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.newHeroGroup.value);
    this.hService.add(this.newHeroGroup.value).forEach(value => {
      console.log("Update hero: ", value);
    });
  }
}
