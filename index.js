import express from "express";
import cors from 'cors'
import router from "./routes/route.js";
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 1000;


const app = express()
app.use(cors());

app.use('/api', router)
app.get('/', (req,res)=>{
    res.send('This is / routes page');
})
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))

