import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters, Result } from '../interfaces/character.interface';
import { Episode } from '../interfaces/episode.interface';
import { Location } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private Apiurl:string= "https://rickandmortyapi.com/api"

  constructor(private http:HttpClient) {

  }

  getCharacters(): Observable<Characters>{
    const url = `${this.Apiurl}/character`
    return this.http.get<Characters>(url)
  }

  getCharacterId(id:string): Observable<Result>{
    const url = `${this.Apiurl}/character/${id}`
    return this.http.get<Result>(url)
  }

  getLocation(): Observable<Location>{
    const url = `${this.Apiurl}/location`
    return this.http.get<Location>(url)
  }

  getEpisodes(): Observable<Episode>{
    const url = `${this.Apiurl}/episode`
    return this.http.get<Episode>(url)
  }




}
