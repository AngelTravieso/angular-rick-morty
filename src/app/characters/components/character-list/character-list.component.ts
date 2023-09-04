import { Component } from '@angular/core';
import { CharacterService } from '../../services/characters.service';
import { Characters } from '../../interfaces/characters-response.interface';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {

  constructor(
    private characterService: CharacterService
  ) {}


  get characters(): Characters[] {
    return this.characterService.characters;
  }

}
