import express from "express";
import cors from 'cors'
import router from "./routes/route.js";

const app = express()
app.use(cors());

app.use('/api', router)
app.get('/', ()=>{
    resizeBy.send('This is / routes page');
})
app.listen(3100, () => console.log('Server is running'))

