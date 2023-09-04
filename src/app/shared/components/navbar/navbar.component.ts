import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public options: string[] = ['Personajes', 'Localizaciones', 'Episodios'];
}
