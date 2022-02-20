const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  list: [
    {
      name: {
        type: String
      },
      quantity: {
        type: Number
      },
      totalCost: {
        type: Number
      }
    }
  ],
  user: {
    ref: 'users',
    types: Schema.Types.ObjectId
  }
})