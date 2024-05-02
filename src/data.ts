import {Product} from "./types";

// generate test double 30 products data
export const Products: Product[] = Array.from({length: 30}, (_, index) => ({
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 1000),
  description: `This is product ${index + 1}`,
  image: `https://picsum.photos/seed/${index + 1}/400/300`
}));
