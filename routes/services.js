const db = require('../models')
// Required modules
const express = require('express');
const router = express.Router();


router.get('/services', async (req, res) => {
    try {
        const services = await db.Service.findAll()
        res.send({message: services, code: 200})        
                
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }

})

router.get('/service/:id', async (req, res) => {
    try {
        const {id} = req.params 
        const service = await db.Service.findByPk(id)
        res.send({message: service, code: 200})        
        
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }

})
module.exports = router;
