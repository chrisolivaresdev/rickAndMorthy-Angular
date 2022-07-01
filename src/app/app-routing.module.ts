import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './characters/pages/error/error.component';
import { CharactersComponent } from './characters/pages/characters/characters.component';
import { EpisodesComponent } from './characters/pages/episodes/episodes.component';
import { LocationsComponent } from './characters/pages/locations/locations.component';
import { CharacterComponent } from './characters/pages/character/character.component';


const routes: Routes = [
  {
    path:'',
    component: CharactersComponent,
    pathMatch: 'full'
  },
  {
    path:'episodes',
    component: EpisodesComponent,
  },
  {
    path:'locations',
    component: LocationsComponent
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: 'character/:id',
    component: CharacterComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
