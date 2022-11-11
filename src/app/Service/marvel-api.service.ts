import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {

  constructor(private http:HttpClient) {

  }

  BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1&apikey=d5fac83cf3def3dae91d2174f11df030&hash=6e49c37510a044c82fc116074f8264be';

  allCharacters():Observable<any>
  {
    return this.http.get(this.BaseUrl);
  }

  allComics():Observable<any>
  {
    const comicUrl ='https://gateway.marvel.com:443/v1/public/comics?limit=10&ts=1&apikey=d5fac83cf3def3dae91d2174f11df030&hash=6e49c37510a044c82fc116074f8264be';
    ;
    return this.http.get(comicUrl);
  }


  allSeries():Observable<any>
  {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/series?limit=10&ts=1&apikey=d5fac83cf3def3dae91d2174f11df030&hash=6e49c37510a044c82fc116074f8264be';
    ;
    return this.http.get(seriesUrl);
  }

  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=d5fac83cf3def3dae91d2174f11df030&hash=6e49c37510a044c82fc116074f8264be`;
    return this.http.get(comicByCharacterUrl);
  }
  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=d5fac83cf3def3dae91d2174f11df030&hash=6e49c37510a044c82fc116074f8264be`;
    return this.http.get(comicByCharacterUrl);
  }


  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=d5fac83cf3def3dae91d2174f11df030&hash=6e49c37510a044c82fc116074f8264be`;
    return this.http.get(characterBYNameUrl);
  }


}
