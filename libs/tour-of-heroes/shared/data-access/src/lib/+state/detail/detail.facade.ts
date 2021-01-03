import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';
import { routerActions } from '@nx-toh/shared/utils';

import { heroesSelectors } from '../heroes.selectors';
import { HeroesState } from '../heroes.state';
import { heroDetailActions } from './detail.actions';
import { heroDetailSelectors } from './detail.selectors';

@Injectable({ providedIn: 'root' })
export class HeroDetailFacade {
  hero$ = this.store.select(heroDetailSelectors.getSelectedHero);
  heroLoaded$ = this.store.select(heroesSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

  goBack(): void {
    this.resetHeroState();
    this.store.dispatch(routerActions.back());
  }

  resetHeroState(): void {
    this.store.dispatch(heroDetailActions.resetSelectedHeroId());
  }

  saveHero(hero: Hero): void {
    this.store.dispatch(heroDetailActions.createHero({ hero }));
  }

  selectHeroId(id: number): void {
    this.store.dispatch(heroDetailActions.selectHeroId({ id }));
  }

  updateHero(hero: Hero): void {
    this.store.dispatch(heroDetailActions.updateHero({ hero }));
  }
}
