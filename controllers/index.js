const models = require('../models');

//C
const createDish = async (req, res) => {
  try {
    const dish = await models.Dish.create(req.body);
    return res.status(201).json({
      dish,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

//R
const getAllDishes = async (req, res) => {
    try {
      const dishes = await models.Dish.findAll({});
      return res.status(200).json({ dishes });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
//R -> Single Dish
const getDishById = async (req, res) => {
    try {
      const { DishId } = req.params;
      const dish = await models.Dish.findOne({
        where: { id: DishId },
      });
      if (dish) {
        return res.status(200).json({ dish });
      }
      return res.status(404).json({"Message": 'Dish with the specified ID does not exists'})
    } catch (error) {
        return res.status(500).json({"Message":error.message});
    }
  }


//U

const updateDish = async (req, res) => {
    try {
      const { DishId } = req.params;
      const [ updated ] = await models.Dish.update(req.body, {
        where: { id: DishId }
      });
      if (updated) {
        const updatedDish = await models.Dish.findOne({ where: { id: DishId } });
        return res.status(200).json({ dish: updatedDish });
      }
      throw new Error('Dish not found');
    } catch (error) {
        return res.status(500).json({"Message":error.message});
    }
  };

//D:

const deleteDish = async (req, res) => {
    try {
      const { DishId } = req.params;
      const deleted = await models.Dish.destroy({
        where: { id: DishId }
      });
      if (deleted) {
        return res.status(204).json({"Message": "Dish deleted"});
      }
      throw new Error("Dish not found");
    } catch (error) {
      return res.status(500).json({"Message":error.message});
    }
  };


module.exports = {
  createDish,
  getAllDishes,
  getDishById ,
  updateDish,
  deleteDish,


}