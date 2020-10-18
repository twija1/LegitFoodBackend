import express from 'express'
import {simplifyDBDocuments, simplifyDBDocument} from "../lib/DBObjectSimplifier";
import * as DishService from '../Models/Dishes/DishService'

const DishesController = express.Router();

const serverError = (res: any) => () => res.status(500).send({message: 'Server error'})

DishesController.get('/', (req, res, next) => {
    DishService.listAllDishes()
        .then(simplifyDBDocuments)
        .then(r => res.send(r))
        .catch(serverError(res))
});

DishesController.get('/:id', (req, res, next) => {
    DishService.getDish(req.params.id)
        .then(simplifyDBDocument)
        .then(r => res.send(r))
        .catch(serverError(res))
})

DishesController.post('/', (req, res, next) => {
    DishService.addDish(req.body)
        .then()
        .catch(serverError(res))
})

export default DishesController;