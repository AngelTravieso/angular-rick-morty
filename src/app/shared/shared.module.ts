import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { EpisodesPageComponent } from './components/episodes-page/episodes-page.component';
import { InputCharacterComponent } from './components/input-character/input-character.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersModule } from '../characters/characters.module';


@NgModule({
  declarations: [
    CharactersPageComponent,
    EpisodesPageComponent,
    InputCharacterComponent,
    LazyImageComponent,
    LoaderComponent,
    LocationsPageComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    // CharactersModule,
    
  ],
  exports: [
    NavbarComponent,
    LazyImageComponent,
    LoaderComponent,
  ],
})
export class SharedModule { }
