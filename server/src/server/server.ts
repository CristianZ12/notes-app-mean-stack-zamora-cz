import express, { Application, urlencoded } from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from '../routes/indexRouter';
import gamesRoutes from '../routes/gamesRouter';

export default (app:Application) => {
    
    class Server {
        private app:Application;
        
        constructor(){
            this.app = app;
            this.config();
            this.middlewares();
            this.routes();
        }

        config():void{
            this.app.set('Port', process.env.PORT || 3500);
        }

        middlewares():void{
            this.app.use(morgan('dev'));
            this.app.use(cors());
            this.app.use(express.json());
            this.app.use(urlencoded({ extended: false }));
        }

        routes():void{
            this.app.use(indexRoutes);
            this.app.use('/api/games', gamesRoutes);
        }

    }

    new Server();

    return app;
}