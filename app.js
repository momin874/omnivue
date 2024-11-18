const cors = require('cors')
const express = require('express')
const path = require('path');
const app = express()
const {adminPanelRoutes, webRoutes} = require('./routes')
const authenticateToken = require('./middleware')
const PORT = 3000;

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

Object.values(adminPanelRoutes.notProtected).forEach(route => {
    app.use('/AdminPanel', route)
})

Object.values(adminPanelRoutes.protected).forEach(route => {
    app.use('/AdminPanel',authenticateToken ,route)
})

Object.values(webRoutes).forEach(route => {
    app.use('/omnivue',route)
})

// app.get('*', (req, res) => {
//     res.redirect('/omnivue');
// });
app.listen(PORT, ()=>{
    console.log(`listening to the port ${PORT}`);
})
