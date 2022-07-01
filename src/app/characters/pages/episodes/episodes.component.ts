import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Result } from '../../interfaces/episode.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes:Result[] = []
  constructor(private CharactersService:CharactersService) { }

  ngOnInit(): void {

      this.CharactersService.getEpisodes()
      .subscribe(resp => {
        this.episodes = resp.results
      })


  }


}
