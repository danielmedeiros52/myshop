import express  from "express";
import db from './conf/database.js';
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Connection error'))
db.once("open",()=> {

    console.log('Database is up');
})
const app = express();
routes(app)
app.use(express.json())






export default app