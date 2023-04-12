import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    SupplierID: {
      type: String,
      required: true,
    },
    CategoryID: {
      type: String,
      required: true,
    },
    UnitPrice: {
      type: Number,
      default: 0,
    },
    QuantityPerUnit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model('Post', schema);
