require('dotenv').config()
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB;

console.log("URI:", uri); // Debug: Log the URI
console.log("Database Name:", dbName); // Debug: Log the Database Name

let cachedClient: MongoClient;
let cachedDb: Db;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

if (!dbName) {
  throw new Error('Please define the MONGO_DB environment dbName/variable')
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = new MongoClient(uri as string)
  await client.connect()
  const db = client.db(dbName)

  cachedClient = client;
  cachedDb = db;

  return { client, db }
}