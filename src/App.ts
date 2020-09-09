import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import DishController from "./Controllers/DishController";
import config from 'config'
import Config from './lib/Const'

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

app.use('/dishes', DishController)

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
})
