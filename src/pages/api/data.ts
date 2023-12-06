import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    // Database operations are performed here
    const data = await db.collection('mytasklist').find({}).toArray()
    res.status(200).json(data)
  } catch (error) {
    // Error handling here
    console.error("DB connection error", error)
    res.status(500).json({ error: 'Failed to connect to db BIG OOF!'})
  }

  console.log('working?')
}