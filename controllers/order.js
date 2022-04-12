const OrderModel = require('../models/Order');
const errorHandler = require('../utils/errorHandler');

// (get) localhost:3000/api/orders?offset=2&limit=5
module.exports.getAll = async (req, res) => {
  try {
    const query = {
      user: req.user.id
    };

    // Фильтр если указываем дату старта
    if (req.query.start) {
      query.date = {
        //$gte = greater or equal
        $gte: req.query.start
      }
    }

    if (req.query.end) {
      if (!query.date) {
        query.date = {}
      }

      query.date['$lte'] = req.query.end;
    }

    if (req.query.order) {
      query.order = +req.query.order
    }

    const orders = await OrderModel
      .find(query)
      .sort({date: -1})
      .skip(+req.query.offset)
      .limit(+req.query.limit)

    res.status(200).json(orders)
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.create = async (req, res) => {
  try {
    const lastOrder = await OrderModel
      .findOne({user: req.user.id})
      .sort({date: -1})

    const maxOrder = lastOrder ? lastOrder.order : 0;

    const order = await new OrderModel({
      order: maxOrder + 1,
      list: req.body.list,
      user: req.user.id
    }).save();

    res.status(201).json(order);
    
  } catch (e) {
    errorHandler(res, e);
  }
}