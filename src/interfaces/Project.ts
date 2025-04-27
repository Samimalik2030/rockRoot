import { FileDto } from "./IUser";

export interface Project {
    _id:string;
    location: string;
    author: string;
    title: string;
    description: string;
    materials: any[];
    isFeatured?: boolean;
    image: FileDto;
  }
  