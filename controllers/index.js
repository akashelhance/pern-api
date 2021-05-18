const models = require('../models');

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


const getAllDishes = async (req, res) => {
    try {
      const dishes = await models.Dish.findAll({});
      return res.status(200).json({ dishes });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

module.exports = {
  createDish,
  getAllDishes,
  
}