"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameControllers = void 0;
const database_1 = __importDefault(require("../database"));
class GameControllers {
    games(req, resp) {
        database_1.default.query('SELECT * FROM Games', (err, games) => {
            if (err) {
                resp.status(200).json({ message: {
                        msgBody: 'Unabled to get Games',
                        msgError: true
                    } });
            }
            else {
                resp.status(200).json({ games });
            }
        });
    }
    createGames(req, resp) {
        const { title, description, image } = req.body;
        const dataGames = {
            title,
            description,
            image
        };
        database_1.default.query('INSERT INTO Games set ?', [dataGames], err => {
            if (err) {
                resp.status(200).json({ message: {
                        msgBody: 'Unabled to add Game.',
                        msgError: true
                    } });
            }
            else {
                resp.status(200).json({ message: {
                        msgBody: 'Successfully Added Game.',
                        msgError: false
                    } });
            }
        });
    }
    game(req, resp) {
        const { id } = req.params;
        database_1.default.query('SELECT * FROM Games WHERE id = ?', [id], (err, game) => {
            if (err) {
                resp.status(200).json({ message: {
                        msgBody: 'Unabled to get Game.',
                        msgError: true
                    } });
            }
            else {
                resp.status(200).json({ game: game[0] });
            }
        });
    }
    updateGame(req, resp) {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const updateGames = {
            title,
            description,
            image
        };
        database_1.default.query('UPDATE Games set ? WHERE id = ?', [updateGames, id], err => {
            if (err) {
                resp.status(200).json({ message: {
                        msgBody: 'Unabled to Update Game.',
                        msgError: true
                    } });
            }
            else {
                resp.status(200).json({ message: {
                        msgBody: 'Successfully Updated Game.',
                        msgError: false
                    } });
            }
        });
    }
    deleteGames(req, resp) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM Games WHERE id = ?', [id], err => {
            if (err) {
                resp.status(200).json({ message: {
                        msgBody: 'Unabled to Delete Game.',
                        msgError: true
                    } });
            }
            else {
                resp.status(200).json({ message: {
                        msgBody: 'Successfully Deleted Game.',
                        msgError: false
                    } });
            }
        });
    }
}
exports.gameControllers = new GameControllers();
