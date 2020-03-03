import { Observable } from 'rxjs';
import { HeroService } from './../service/hero.service';
import { Hero } from '../model/hero';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroList: Observable<Hero[]>;
  constructor(private hService: HeroService, private router: Router) {
    this.heroList = this.hService.getAll();
  }

  ngOnInit(): void {
  }

  jumpToHero(hero: Hero): void {

    this.router.navigateByUrl(`/hero/${hero.id}`);

  }

}
