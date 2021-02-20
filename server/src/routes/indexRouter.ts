import { Router } from 'express';
import { indexControllers } from '../controllers/indexControllers';

class indexRouter{
     
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', indexControllers.index);
    }
}

const indexRoutes = new indexRouter();

export default indexRoutes.router;