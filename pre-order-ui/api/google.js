import { request } from "./util";
   
export const getAuthToken = (token) =>
  request().post("/api/account/GoogleLogin", { token }).then((res) => res.data);