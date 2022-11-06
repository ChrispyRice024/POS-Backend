const router = require('express').Router();
const Categories = require('../models');

router.get('/', async (req, res) => {
    try{
        const catData = await Categories.findAll().then((catData) => {
            res.json(catData)
        })
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.post('/', async (req, res) => {
    try{
        const catData = await Categories.create(req.body)
        res.status(200).json({msg:'Your POST request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your POST request could not be completed'})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const catData = await Categories.update([{...req.body},
            {
                where:{
                    cat_id: req.params.cat_id
                }
            }])
        res.status(200).json({msg:'Your PUT request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your PUT request could not be completed'})
    }
})

module.exports = router;