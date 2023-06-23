import { Component, OnInit } from '@angular/core';
import {Result} from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  characters: Result[] = [];
  constructor( private CharactersService:CharactersService){

   }

  ngOnInit() {

    this.CharactersService.getCharacters()
    .subscribe(resp =>
    this.characters = resp.results
    )
  }



}
