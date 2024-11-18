const express = require('express');
const db = require('../models');
const router = express.Router();

function chunkArray(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length - 1; i += 2) {
      result.push([arr[i], arr[i + 1]]);
    }
  
    // Add the last element as a single value if the array length is odd
    if (arr.length % 2 !== 0) {
      result.push(arr[arr.length - 1]);
    }
  
    return result;
  }
  

  
router.get('/', async (req, res) => {
    try {
        const services = await db.Service.findAll({
            raw:true
        })
        
        // Render index.ejs and pass the data
        res.render('index', {services} );
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).send("Error loading services");
    }
});


router.get('/services/:path', async (req, res) => {
    try {
        const {path} = req.params
        const services = await db.Service.findAll({
            raw:true
        })
        
        const service = services.filter(service => service.path.split('/').slice(-1)[0] === path)[0]

        const inclusions = await db.Inclusion.findAll({
            where: {
                service_id: service.id
            },
            raw: true
        })
        
        const processes = await db.Process.findAll({
            where: {
                service_id: service.id
            },
            raw: true
        })
        
        // Render index.ejs and pass the data
        res.render(`${path}`, {services, service, inclusions: chunkArray(inclusions), processes} );
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).send("Error loading services");
    }
});
module.exports = router