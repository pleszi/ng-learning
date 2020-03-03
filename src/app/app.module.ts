import { HomeComponent } from './home/home.component';
import { HeroService } from './service/hero.service';
import { FootballService } from './service/football.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { HeroParentComponent } from './hero-parent/hero-parent.component';


import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';


const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hero",
    component: HeroComponent
  },
  {
    path: "hero/:id",
    component: HeroDetailComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AppComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective,
    HeroParentComponent,
    HeroChildComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FootballService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
