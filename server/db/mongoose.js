var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useCreateIndex: true }
);
mongoose.set('debug', false);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose 
}

