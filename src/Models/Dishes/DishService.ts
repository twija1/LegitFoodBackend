import {DishType, Dish} from "./Dish";

export const listAllDishes = (): Promise<DishType[]> => Dish.find({}).exec()

export const addDish = (dish: DishType) => Dish.create(dish)

export const getDish = (id: string) => Dish.findOne({_id: id}).exec()

export const editDish = ({dish, id}: {dish: DishType, id: string}) => Dish.findOneAndUpdate({_id: id}, dish, {new: true}).exec()
