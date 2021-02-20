import Dotenv from 'dotenv';
Dotenv.config();
import express from 'express';
import server from './server/server';
const app = server(express());

class index {

    private app:express.Application;

    constructor(){
        this.app = app;
        this.start(); 
    }

    start():void{
        this.app.listen(this.app.get('Port'), () => {
            console.log(`Server on Port ${this.app.get('Port')}`);
        });
    }
}

new index();