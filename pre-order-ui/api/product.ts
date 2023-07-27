import { request } from "./util";
import { Product } from "@/types/product";
       

// type Props = {
//   params?: any;
// };


// export const getProdById = () :  Promise<Product[]> =>
// request.get('product/getById').then((res) => res.data);

export const getAllProducts = ( ) : Promise<Product[]> =>
    request.get('product/getAll').then((res) => res.data);


const productApi ={
  getAllProducts
};

export default productApi;