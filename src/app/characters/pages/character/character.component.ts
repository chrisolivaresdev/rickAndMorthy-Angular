import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Result} from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character!:Result

  constructor(private ActivatedRoute:ActivatedRoute, private CharactersService:CharactersService) { }

  ngOnInit():void {
    this.ActivatedRoute.params
    .pipe(switchMap((params) => {
      return this.CharactersService.getCharacterId(params['id'])
    }))
    .subscribe( character =>
      this.character = character)
  }

}
