import type { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "@/lib/dbConnection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database connected successfully");
    return NextResponse.json({ message: "Database connected successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Database connection failed" });
  }
};

export default dbConnect;
