import dbConnect from "@/app/utils/db_connect";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({}).lean();

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
  }
}
