import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InputCharacterComponent } from './components/input-character/input-character.component';


@NgModule({
  declarations: [
    NavbarComponent,
    InputCharacterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class SharedModule { }
