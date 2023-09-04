import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CharacterListComponent,
  ]
})
export class CharactersModule { }
