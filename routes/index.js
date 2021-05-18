const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.json({"message": "Api Route"}))

router.post('/dish', controllers.createDish);
router.get('/dish', controllers.getAllDishes);
router.get('/dish/:DishId', controllers.getDishById);
router.put('/dish/:DishId', controllers.updateDish);
router.delete('/dish/:DishId', controllers.deleteDish);



module.exports = router;