const db = require('../models')
// Required modules
const express = require('express');
const router = express.Router();


router.get('/processes/:service_id', async (req, res) => {
    const { service_id } = req.params
    try {
        const processes = await db.Processes.findAll({
            where: {
                service_id
            }
        })
        res.send({message: processes, code: 200})        
                
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }

})

module.exports = router;
