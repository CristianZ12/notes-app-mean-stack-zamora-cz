import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { Router, ActivatedRoute } from '@angular/router';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game:Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    createdAt: new Date()
  };

  game1:any;

  edit:boolean = false;

  gameMessage:any;

  constructor(private gamesService:GamesService, private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.gamesService.getGame(params.id)
        .subscribe(
          resp => {
            this.game1 = resp;
            console.log(this.game1.game);
            this.game = this.game1.game;
            this.edit = true;
          },
          err => console.log(err)
        );
    }
  }

  saveNewGame(){
    delete this.game.createdAt;
    delete this.game.id;

    console.log(this.game);
    this.gamesService.saveGame(this.game)
      .subscribe(
        resp => {
          this.gameMessage = resp;
          console.log(this.gameMessage.message);
          if(this.gameMessage.message.msgError){
            console.log('AH PERRO NO TE GUARDO EN LA BASE DE DATOS POR CHISTOSITO');
            this.game.id = 0;
            this.game.createdAt = new Date();
          } else {
            this.route.navigate(['/games']);
          }
        },
        err => console.error(err)
      );
  }

  updateGame(){
    delete this.game.createdAt;
    this.gamesService.updateGame(this.game.id.toString(), this.game)
      .subscribe(
        resp => {
          console.log(resp);
          this.gameMessage = resp;
          if(this.gameMessage.message.msgError){
            console.log('AH PERRO NO TE GUARDO EN LA BASE DE DATOS POR CHISTOSITO');
          } else {
            this.route.navigate(['/games']);
          }
        },
        err => console.error(err)
      )
  }
}
