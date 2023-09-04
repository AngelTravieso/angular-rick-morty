import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public options: string[] = ['Characters', 'Locations', 'Episodes'];
}
