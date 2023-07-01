const mongoose = require('mongoose');

// Connect to MongoDB
const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((conn) => {
            console.log(`connected to db: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1)
        })
}

module.exports = connectToDb;