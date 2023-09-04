import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters, CharactersResponse } from '../interfaces/characters-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public characters: Characters[] = [];
  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) {
    this.getCharacters();
  }


  // Obtener personajes
  public getCharacters() {

    this.http.get<CharactersResponse>(this.url)
      .subscribe( resp => {
        console.log(resp);

        this.characters = resp.results;

      });

  }

}
