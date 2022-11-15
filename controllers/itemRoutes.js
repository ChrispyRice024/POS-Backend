const router = require('express').Router();
const {Item} = require('../models');

router.get('/', async (req, res) => {
    try{
        const itemData = await Item.findAll();
        res.json(itemData)
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const itemData = await Item.findOne({where:{id: req.params.id}});
        res.json(itemData)
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.post('/', async (req, res) => {
    try{
        const itemData = await Item.create(req.body);
        res.status(200).json({msg:'Your POST request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your POST request could not be completed'})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const itemData = await Item.update({...req.body},
            {
                where:{
                    id: req.params.id
                }
            })
        res.status(200).json({ item: itemData, msg:'Your PUT request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your PUT request could not be completed'})
    }
})

module.exports = router;