import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

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

  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(dbName)

  cachedClient = client;
  cachedDb = db;

  return { client, db }
}