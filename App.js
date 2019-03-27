import express from 'express';
import bodyParser from 'body-parser'
import models from './models'
import toolRouter from './routes/toolRoute';


const app = express();

const port = 3001;
app.use(bodyParser.json())
app.use(toolRouter)
app.get('/', (req,res) => {
res.json({msg: "work"})
});












app.listen(port, () => console.log(`express-api app listening on port ${port}!`));