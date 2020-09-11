import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import DishesController from "./Controllers/DishesController";
import config from 'config'
import Config from './lib/Const'
import OrdersController from "./Controllers/OrdersController";

const app = express()
const port = 8080

if(!config.get(Config.DB_URI)) {
    // tslint:disable-next-line:no-console
    console.error("FATAL ERROR: dbUri is not defined");
    process.exit(1);
}

const uri: string = config.get(Config.DB_URI)

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(
        // tslint:disable-next-line:no-console
        () => console.log('DB connection successful!')
    )

app.use(cors());
app.use(express.json());

app.use('/dishes', DishesController)
app.use('/orders', OrdersController)

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
})
