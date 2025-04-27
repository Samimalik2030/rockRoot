import { FileDto } from "./IUser";

export interface Product {
    _id: string; 
    name: string;
    price: number;
    description: string;
    dimensions: string;
    thickness: string;
    finish: string;
    category: string;
    image: FileDto;
    inStock: boolean;
    color: string;
    origin: string;
    tags: string[];
  }
  