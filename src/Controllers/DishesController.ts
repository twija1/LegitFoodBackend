import express from 'express'
import {simplifyDBDocuments} from "../lib/DBObjectSimplifier";
import * as DishService from '../Models/Dishes/DishService'

const DishesController = express.Router();

const serverError = (res: any) => () => res.status(500).send({message: 'Server error'})

DishesController.get('/', (req, res, next) => {
    DishService.displayAllDishes()
        .then(simplifyDBDocuments)
        .then(r => res.send(r))
        .catch(serverError(res))
});

export default DishesController;