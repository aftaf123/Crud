const express = require('express');

const router = express.Router();

// For api(post request)
const controller = require('../controller/controller');

// for get request
const services = require('../services/render');

router.get('/', services.homeRoutes);

router.get('/add-user', services.add_user);

router.get('/update-user', services.update_user);



// API routes..

router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.delete);


module.exports = router;



