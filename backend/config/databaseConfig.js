const express = require('express');
const mongoose= require('mongoose');

const MONGODB_URL=process.env.MONGODB_URL || 'mongodb://localhost:27017/my_database';

const databaseconnect = () => {
    mongoose
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to MongoDB: ${conn.connection.host}`))
        .catch((err) => console.log(`Error connecting to MongoDB: ${err.message}`)); 
}

module.exports = databaseconnect;