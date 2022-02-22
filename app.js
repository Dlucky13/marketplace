const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoDB)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(passport.initialize({}));
require('./middleware/passport')(passport);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('morgan')('dev'));
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/product', productRoutes);

module.exports = app;