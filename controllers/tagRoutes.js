const {Tags} = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        const tagData = await Tags.findAll();
        res.json(tagData)
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const tagData = await Tags.findOne({where:{id: req.params.id}});
        res.json(tagData)
    }catch(err){
        res.status(400).json({msg:'Your GET request could not be completed.'})
    }
})

router.post('/', async (req, res) => {
    try{
        const tagData = await Tags.create(req.body);
        res.status(200).json({msg:'Your POST request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your POST request could not be completed'})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const tagData = await Tags.update({...req.body},
            {
                where:{
                    id: req.params.id
                }
            })
        res.status(200).json({ item: tagData, msg:'Your PUT request has been completed.'})
    }catch(err){
        res.status(400).json({msg:'Your PUT request could not be completed'})
    }
})

module.exports = router;