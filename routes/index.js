const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.json({"message": "Api Route"}))

router.post('/dish', controllers.createDish);
router.get('/dish', controllers.getAllDishes);

module.exports = router;