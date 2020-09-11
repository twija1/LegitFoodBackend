import mongoose, {Schema, Document} from 'mongoose'

export type OrderItem = {
    dishId: string,
    quantity: number
}

const orderItem = {
    dishId: {
        type: Schema.Types.ObjectId,
        ref: "Dish"
    },
    quantity: Number
}

export type OrderType = {
    dishes: OrderItem[],
    location: string,
    comment: string
} & Document

const orderSchema = new Schema({
    dishes: {
        type: [orderItem],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
})

export const Order = mongoose.model<OrderType>("Order", orderSchema)