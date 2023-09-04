import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/characters-response.interface';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.css'],
})
export class CharacterCardComponent implements OnInit {

  @Input()
  public character!: Characters;

  ngOnInit(): void {
    if( !this.character ) {
      throw new Error('Character property is required');
    }
  }

}
