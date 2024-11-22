import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/db_connect";
import Product from "@/models/Products";

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({}).lean();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}