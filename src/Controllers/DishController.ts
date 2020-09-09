import express from 'express'
import {simplifyDBDocuments} from "../lib/dbobjectsimplifier";
import * as DishService from '../Models/Dishes/DishService'

const DishController = express.Router();

const serverError = (res: any) => () => res.status(500).send({message: 'Server error'})

DishController.get('/', (req, res, next) => {
    DishService.displayAllDishes()
        .then(simplifyDBDocuments)
        .then(r => res.send(r))
        .catch(serverError(res))
});

export default DishController;