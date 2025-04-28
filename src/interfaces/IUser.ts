
export enum Role {
  ADMIN = 'Admin',
  CUSTOMER = 'Customer'
}


export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
  export interface FileDto{
    fileId:string
    url:string
  }
  