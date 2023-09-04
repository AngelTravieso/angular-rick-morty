import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './components/character-list/character-list.component';


@NgModule({
  declarations: [
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CharacterListComponent,
  ]
})
export class CharactersModule { }
