const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    ref: 'categories',
    types: Schema.Types.ObjectId
  },
  user: {
    ref: 'users',
    types: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('products', productSchema);