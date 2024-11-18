const db = require('../models')
// Required modules
const express = require('express');
const router = express.Router();


router.get('/inclusions/:service_id', async (req, res) => {
    const { service_id } = req.params
    try {
        const inclusions = await db.Inclusions.findAll({
            where: {
                service_id
            }
        })
        res.send({message: inclusions, code: 200})        
                
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }

})

module.exports = router;
