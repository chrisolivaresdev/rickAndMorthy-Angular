import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { ErrorComponent } from './pages/error/error.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { CharacterComponent } from './pages/character/character.component';
import { LoadersComponent } from './components/loaders/loaders.component';

@NgModule({
  declarations: [
    ErrorComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    CharacterComponent,
    LoadersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
   exports:[
    ErrorComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent
   ]
  })
export class CharactersModule { }
