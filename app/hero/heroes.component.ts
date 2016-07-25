import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl:  'app/hero/heroes.component.html',
    styleUrls:  ['app/hero/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    addingHero = false;
    error: any;
    public heroes : Hero[];
    selectedHero: Hero;

    constructor(
        private router : Router,
        private heroService: HeroService) { }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    public deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

