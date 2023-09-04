import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CharacterListComponent,
  ]
})
export class CharactersModule { }
