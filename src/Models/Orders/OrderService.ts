import {OrderType, Order} from "./Order";

export const displayAllOrders = (): Promise<OrderType[]> => Order.find({}).exec()

export const addOrder = (order: OrderType) => Order.create(order)
    .then(r =>
// tslint:disable-next-line:no-console
            console.log(r)
    )
