import {DishType, Dish} from "./Dish";

export const displayAllDishes = (): Promise<DishType[]> => Dish.find({}).exec()

export const addDish = (dish: DishType) => Dish.create(dish)
    .then(r =>
// tslint:disable-next-line:no-console
        console.log(r)
)
