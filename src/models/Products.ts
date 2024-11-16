import mongoose, { Schema, Document, Model } from "mongoose";

interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: mongoose.Types.ObjectId;
  images: string[];
  properties: Record<string, any>;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }, // Reference to Category collection
    images: { type: [String], default: [] }, // Array of strings, default empty
    properties: { type: Object, default: {} }, // Generic object
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
export type { IProduct };
