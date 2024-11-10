export default interface Item {
  image: string;
  occasion: string[];
  color: string;
  brand: string;
  category: string;
  type: string;
}
export enum ClothType {
  PANTS = "pants",
  SHORTS = "shorts",
  SHORTSLEEVE = "shortsleeve",
  LONGSLEEVE = "longsleeve",
  FOOTWEAR = "footwear",
  ACCESSORIES = "accessory",
}

export enum OCCASION {
  DATE = "date",
  CASUAL = "casual",
  WORK = "work",
  ATHLEISURE = "athleisure",
}
