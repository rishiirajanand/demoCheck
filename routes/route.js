import express from "express";

const router = express.Router()


router.get('/', (req,res) => {

    res.status(200).json({msg: 'Home'})
});

router.get('/data', (req,res) => {
    const obj = [
        {id: 1, name: 'Rishi'},
        {id: 2, name: 'Raj'},
        {id: 3, name: 'Anand'},
    ]
    res.status(200).json(obj)
})

router.get('/data/1', (req,res) => {
    const obj = {id: 1, name: 'Raj'}
    
    res.status(200).json(obj)
});

export default router;