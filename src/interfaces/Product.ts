export interface Dimensions {
  length: number;
  width: number;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  dimensions: Dimensions;

  thickness: string;
  finish: string;
  category: string;
  image: FileDto;
  inStock: boolean;
  tags: string[];
}




export interface FileDto {
  fileId: string;
  url: string;
}



export interface ICreateProduct {
  name: string;
  price: number;
  length: number;
  width: number;
  description?: string;
  thickness: number;
  finish: string;
  category: string;
  inStock: boolean;
  tags: string[];
}


export interface Project {
  location: string;
  author: string;
  title: string;
  description: string;
  materials: string[];
  isFeatured?: boolean;
  image: FileDto;
}
