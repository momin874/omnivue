// Protected Route (Example)

const db = require('../models')
// Required modules
const express = require('express');
const router = express.Router();


router.get('/protected', (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Sign Out Route
router.post('/signout', (req, res) => {
// Since JWTs are stateless, to "sign out" you can just remove the token on the client side
    res.json({ message: 'Signed out successfully' });
});

router.get('/', async (req, res) => {
    try {
        const services = await db.Service.findAll({
            raw:true
        })
        const inclusions = await db.Inclusion.findAll({
            raw:true
        })
        const processes = await db.Process.findAll({
            raw:true
        })
        // Render index.ejs and pass the data
        // alert('stop')
        res.render('admin-panel', {services, inclusions, processes} );
        
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).send("Error loading services");
    }
});

module.exports = router