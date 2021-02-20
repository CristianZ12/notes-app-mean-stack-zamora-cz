import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:4000/api';

  constructor(private http:HttpClient) { }

  getGames(){
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id:string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id:string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(games:Game){
    return this.http.post(`${this.API_URI}/games`, games);
  }

  updateGame(id:string, updateGame:Game) {
    return this.http.put(`${this.API_URI}/games/${id}`, updateGame);
  }
}
