import { Request, Response } from 'express';
import pool from '../database';

class GameControllers{

    public games(req:Request, resp:Response){
        pool.query('SELECT * FROM Games', (err, games) => {
            if(err){
                resp.status(200).json({ message: {
                    msgBody: 'Unabled to get Games',
                    msgError: true
                }});
            } else {
                resp.status(200).json({ games });
            }
        });
    }

    public createGames(req:Request, resp:Response){
        const { title, description, image } = req.body;
        const dataGames = {
            title,
            description,
            image
        }
        pool.query('INSERT INTO Games set ?', [dataGames], err => {
            if(err){
                resp.status(200).json({ message: {
                    msgBody: 'Unabled to add Game.',
                    msgError: true
                }});
            } else {
                resp.status(200).json({ message: {
                    msgBody: 'Successfully Added Game.',
                    msgError: false
                }});
            }
        });
    }

    public game(req:Request, resp:Response){
        const { id } = req.params;
        pool.query('SELECT * FROM Games WHERE id = ?', [id], (err, game) => {
            if(err){
                resp.status(200).json({ message: {
                    msgBody: 'Unabled to get Game.',
                    msgError: true
                }});
            } else {
                resp.status(200).json({ game: game[0] });
            }
        });
    }

    public updateGame(req:Request, resp:Response){
        const { id } = req.params;
        const { title, description, image } = req.body;
        const updateGames = {
            title,
            description,
            image
        }
        pool.query('UPDATE Games set ? WHERE id = ?', [updateGames, id], err => {
            if(err){
                resp.status(200).json({ message: {
                    msgBody: 'Unabled to Update Game.',
                    msgError: true
                }});
            } else {
                resp.status(200).json({ message: {
                    msgBody: 'Successfully Updated Game.',
                    msgError: false
                }});
            }
        });
    }

    public deleteGames(req:Request, resp:Response){
        const { id } = req.params;
        pool.query('DELETE FROM Games WHERE id = ?', [id], err => {
            if(err){
                resp.status(200).json({ message: {
                    msgBody: 'Unabled to Delete Game.',
                    msgError: true
                }});
            } else {
                resp.status(200).json({ message: {
                    msgBody: 'Successfully Deleted Game.',
                    msgError: false
                }});
            }
        });
    }

}

export const gameControllers = new GameControllers();