import mongoose, {Schema, Document} from "mongoose";

export type DishType = {
    name: string,
    photo: string,
    price: number,
    ingredients?: string[],
    allergens: string[],
    description: string,
    active: boolean
} & Document

const dishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        default: []
    },
    allergens: {
        type: [String],
        validate: {
            validator: (value: string[]) => value.length > 0,
            message: 'You need to add allergens!'
        },
        required: [true, 'You need to add allergens!']
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})

export const Dish = mongoose.model<DishType>("Dish", dishSchema)
