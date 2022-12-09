import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    season: { type: String, required: true },
    location: { type: String, required: true },
    restaurant: { type: String, required: true },
    mainImage: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    period: { type: String, required: true },
    address: { type: String, required: true },
    site: { type: String, required: true },
    tel: { type: String, required: true },
    tag: { type: String, required: true },
    description: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Datas = mongoose.models.Datas || mongoose.model('Datas', dataSchema);
export default Datas;
