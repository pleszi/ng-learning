import { HeroService } from './../service/hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  superPowers: Array<string> = [
    "Fixflex",
    "Home Ing",
    "Cookley",
    "Cardify",
    "Cardguard",
    "really smart",
    "rich",
    "hard",
    "Stronghold"
  ];

  constructor(private ar: ActivatedRoute,
    private hService: HeroService) {

    this.ar.params.subscribe(params => {
      this.hService.getOne(params.id).forEach(hero => {
        this.hero = hero;
        console.log('dsd', hero);
      });
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.hService.update(this.hero).forEach(value => {
      console.log("Update hero: ", value);
    });

  }
}
