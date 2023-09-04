import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InputCharacterComponent } from './components/input-character/input-character.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    NavbarComponent,
    InputCharacterComponent,
    LazyImageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    LazyImageComponent,
    LoaderComponent,
  ],
})
export class SharedModule { }
