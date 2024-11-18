const signIn = require('./signIn')
const inclusions = require('./inclusions')
const services = require('./services')
const processes = require('./processes')
const web = require('./web')
const signInProtected = require('./signinProtected')
const inclusionsProtected = require('./inclusionsProtected')
const processesProtected = require('./processesProtected')
const servicesProtected = require('./servicesProtected')
const routes = {
    adminPanelRoutes: {
        protected: {
            signInProtected,
            inclusionsProtected,
            processesProtected,
            servicesProtected
        },
        notProtected: {
            signIn,
            inclusions,
            services,
            processes
        } 
    },

    webRoutes: {
        web
    }
}
module.exports = routes