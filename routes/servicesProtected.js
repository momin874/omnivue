
const { v4: uuidv4 } = require('uuid');

const db = require('../models')
// Required modules
const express = require('express');
const router = express.Router();

router.put('/updateService', async (req, res) => {
    const data = req.body
    const service_id = data.id
    const inclusions = data.inclusionTitle.map((title, index) => ({
        id: uuidv4(),
        name:title,
        description: data.inclusionDescription[index],
        service_id
    }));
    const processes = data.processNumber.map((number, index) => ({
        id: uuidv4(),
        order: number,
        name: data.processName[index],
        description: data.processDescription[index],
        service_id 
    }))
    try {
        await db.Service.update({
            name: data.name,
            slogan: data.slogan
        }, {
            where: {
                id : service_id
            }
        })
        await db.Inclusion.destroy( {
            where: {
                service_id
            }
        })
        await db.Inclusion.bulkCreate(inclusions)
        await db.Process.destroy( {
            where: {
                service_id
            }
        })
        await db.Process.bulkCreate(processes)
        res.send({message: 'service updated successfully', code: 200})        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})
module.exports = router;
