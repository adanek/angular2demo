import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Hero, HeroService, HeroDetailComponent} from './index';


@Component({
    selector: 'my-heroes',
    templateUrl: './app/+heroes/heroes.component.html',
    styleUrls: ['./app/+heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero:Hero;
    error: any;
    addingHero:boolean;

    constructor(private router:Router,
                private heroService:HeroService) {
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}
