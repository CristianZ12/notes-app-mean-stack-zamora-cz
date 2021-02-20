import { Router } from 'express';
import { gameControllers } from '../controllers/gameControllers';

class gamesRouter{

    public router:Router = Router();

    constructor(){
        this.games();
    }

    games():void{
        this.router.get('/', gameControllers.games);
        this.router.post('/', gameControllers.createGames);
        this.router.get('/:id', gameControllers.game);
        this.router.put('/:id', gameControllers.updateGame);
        this.router.delete('/:id', gameControllers.deleteGames);
    }
}

const gamesRoutes = new gamesRouter();

export default gamesRoutes.router;