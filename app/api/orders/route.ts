import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;
  if (uri) {
    const client = new MongoClient(uri);
    const clientPromise = client.connect();
    const db = (await clientPromise).db();
    return db;
  } else {
    throw new Error("Connecting to database failed! Sorry for any problems.");
  }
};

export async function POST(req: Request) {
  const db = await connectToDatabase();
  const data = await req.json();
  const order = await db.collection("orders").insertOne(data);
  return NextResponse.json({ order });
}
