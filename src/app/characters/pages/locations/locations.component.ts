import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

import { Result } from '../../interfaces/location.interface';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor( private CharactersService:CharactersService) { }

  locations:Result[] = []

  ngOnInit(): void {
  this.CharactersService.getLocation()
  .subscribe(resp => {
    this.locations = resp.results
  })
  }



}
