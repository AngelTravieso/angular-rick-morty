import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { CharactersPageComponent } from './shared/components/characters-page/characters-page.component';
import { LocationsPageComponent } from './shared/components/locations-page/locations-page.component';
import { EpisodesPageComponent } from './shared/components/episodes-page/episodes-page.component';

// Rutas
const routes: Routes = [
    {
        path: '',
        component: CharactersPageComponent,
    },
    {
        path: 'locations',
        component: LocationsPageComponent,
    },
    {
        path: 'episodes',
        component: EpisodesPageComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
