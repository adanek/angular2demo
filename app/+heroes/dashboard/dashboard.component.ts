import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {Hero, HeroService} from '../shared/index';
import {HeroSearchComponent} from "../hero-search/index";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/+heroes/dashboard/dashboard.component.html',
    styleUrls: ['./app/+heroes/dashboard/dashboard.component.css'],
    directives: [HeroSearchComponent]
})
export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private router:Router,
                private heroService:HeroService){
    }

    ngOnInit(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}
