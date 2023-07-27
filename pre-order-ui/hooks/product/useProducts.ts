import { useQuery } from "react-query";
import productApi from "@/api/product";

// const useProducts = () => {
//   const getAllProducts = async () => {
//     const res = await productApi.getAllProducts();
//     return res;
//   };
//   return {
//     getAllProducts
//   };
// };


const useProducts = () => {
  const products = useQuery(["products"], () =>
    productApi.getAllProducts()
  );
  console.log("products->>>", products);
  return {
    ...products,
    data: products.data,
  };



};

export default useProducts;