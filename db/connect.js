const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url); // returns promise 
    // check connection using async await
    // if connection, then listen on port
};

module.exports = connectDB;