require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;

// const client = new MongoClient(uri);

// const db = client.db(process.env.DB_NAME);

// module.exports = {
//     db: db,
//     client: client
// };

if (!uri) {
    throw new Error("MONGO_URL is not defined. Check your environment variables!");
}

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = client.db(process.env.DB_NAME || "membersDB");

module.exports = { db, client };