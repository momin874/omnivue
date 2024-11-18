const db = require('../models')
// Required modules
const express = require('express');
const router = express.Router();

router.put('/inclusions/:id',  async (req, res) => {
    const {title , description} = req.body;
    const id = req.params.id
    try {
        await db.Inclusions.update({
            name: title, 
            description
        },{
            where: {
                id
            }
        })
        res.send({message: 'inclusion updated successfully', code: 200})        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})
module.exports = router;
