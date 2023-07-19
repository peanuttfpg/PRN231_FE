import { TAuth } from "../types/auth";
import { PostResponse } from "../types/request"
import { TUser } from "../types/user";
import { request } from "./util";

const authorize = (accessToken: string) => {
  const auth = {
    idToken: accessToken,
  };
  return request.post(`/account/GoogleLogin`, auth);
};
const refresh = (refreshToken: string) => {
  const auth = {
    idToken: refreshToken,
  };
  return request.post<PostResponse<string>>(`/account/GoogleLogi`, auth);
};

const getUserInfo = (accessToken: string) => {
  const config = {
    headers: {
      authorization: "Bearer " + accessToken,
    },
  };
  return request.get<TUser>("/api/users/user/me", config).then((res) => res.data);
};

const updateUserInfo = (accessToken: string, userInfo: TUser) => {
  const config = {
    headers: {
      authorization: "Bearer " + accessToken,
    },
  };
  return request.put<PostResponse<TAuth>>(`/api/users/user/me`, userInfo, config);
};

const authApi = {
  authorize,
  refresh,
  getUserInfo,
  updateUserInfo,
};

export default authApi;