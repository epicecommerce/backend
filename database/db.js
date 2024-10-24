require('dotenv').config();
const mongoose = require("mongoose");

exports.connectToDB = async () => {
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'; // Use an environment variable for the URI

    try {
        await mongoose.connect(dbURI);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
};
