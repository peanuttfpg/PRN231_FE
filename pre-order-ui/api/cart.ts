import { Cart, OrderRequest, OrderResponse } from "../types/cart";
import { PostResponse } from "../types/request";
import { request } from "./util";

const prepareOrder = (cartPrepare: OrderRequest, accessToken: string) => {
  console.log("accessToken", accessToken);
  return request.post<PostResponse<OrderResponse>>(
    `/order/create`,
    cartPrepare,
    {
      headers: {
        authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzM2ZhYTg0ZC0yMzhmLTRkMGEtYjJhYS05N2QyZTMzNjExYzAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQuG6o28gTMOqIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMiIsImV4cCI6MTY5MzAzMzY0OSwiaXNzIjoiUFJOMjMxLkFQSSIsImF1ZCI6IlBSTjIzMS5BUEkifQ.PmUj3XkcJCieG1dxgopZH9Fy0hxruIYP_tmp04qY0NQ",
      }
    },
  ).then((res) => res.data);

};

const prod = {
  "paymentType": 1,
  "deliveryPhone": "0933930519",
  "note": "Tuyệt",
  "orderDetails": [
    {
      "productId": 8,
      "quantity": 1,
      "note": "Nothing"
    }
  ]
}
const checkout = (cartOrder: OrderRequest, accessToken: string) => {
  
  return request.post<PostResponse<OrderResponse>>(`/order/create`, prod, {
    headers: {
      authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzM2ZhYTg0ZC0yMzhmLTRkMGEtYjJhYS05N2QyZTMzNjExYzAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQuG6o28gTMOqIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMiIsImV4cCI6MTY5MzAzMzY0OSwiaXNzIjoiUFJOMjMxLkFQSSIsImF1ZCI6IlBSTjIzMS5BUEkifQ.PmUj3XkcJCieG1dxgopZH9Fy0hxruIYP_tmp04qY0NQ",
    }
  },);
};

const cartApi = {
  prepareOrder,
  checkout,
};

export default cartApi;