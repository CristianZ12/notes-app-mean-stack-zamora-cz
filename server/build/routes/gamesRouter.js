"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameControllers_1 = require("../controllers/gameControllers");
class gamesRouter {
    constructor() {
        this.router = express_1.Router();
        this.games();
    }
    games() {
        this.router.get('/', gameControllers_1.gameControllers.games);
        this.router.post('/', gameControllers_1.gameControllers.createGames);
        this.router.get('/:id', gameControllers_1.gameControllers.game);
        this.router.put('/:id', gameControllers_1.gameControllers.updateGame);
        this.router.delete('/:id', gameControllers_1.gameControllers.deleteGames);
    }
}
const gamesRoutes = new gamesRouter();
exports.default = gamesRoutes.router;
