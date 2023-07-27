export type Product = {
    id:number;
    name:string;
    description:string;
    productDetail: ProductDetail;
    price:number;
    productStatus:string;
    isActive:boolean;
    execptedReleaseDate:string;
};

export type ProductDetail = {
    id:number;
    productId:number;
    description:string;
    quantity: number;
    imgUrl: string;
    createdDate: Date,
    updatedDate: Date,
    color:string;
    size:string;
    brand:string;
    material:string;
    height:number;
    weigth:number;
    warranty:number;
};
