const router = require('express').Router();
const {Category} = require('../models');

router.get('/', async (req, res) => {
    try{
        const catData = await Category.findAll(req.body);
        res.json(catData)
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const catData = await Category.findOne({where:{id: req.params.id}});
        res.json(catData);
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.post('/', async (req, res) => {
    try{
        const catData = await Category.create(req.body)
        res.status(200).json({msg:'Your POST request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your POST request could not be completed'})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const catData = await Category.update({...req.body},
            {
                where:{
                    id: req.params.id
                }
            })
        res.status(200).json({msg:'Your PUT request has been completed'})
    }catch(err){
        res.status(400).json({msg:'Your PUT request could not be completed'})
    }
})

module.exports = router;