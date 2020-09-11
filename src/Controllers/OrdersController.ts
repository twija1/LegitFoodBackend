import express from 'express'
import  * as OrderService from '../Models/Orders/OrderService'
import {simplifyDBDocuments} from "../lib/DBObjectSimplifier";

const OrdersController = express.Router()

const serverError = (res: any) => () => res.status(500).send({message: 'Server error'})

OrdersController.get('/', (req, res, next) => {
    OrderService.displayAllOrders()
        .then(simplifyDBDocuments)
        .then(r => res.send(r))
        .catch(serverError(res))
})

OrdersController.post('/', (req, res, next) => {
// tslint:disable-next-line:no-console
    console.log(req.body)
    const data = OrderService.addOrder(req.body)
})

export default OrdersController;