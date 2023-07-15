import axios from "axios";
import React, { useEffect } from 'react';

import 'firebase/compat/auth';

import Cookies from 'js-cookie';

const parseParams = (params) => {
  const keys = Object.keys(params);
  let options = "";

  keys.forEach((key) => {
    const isParamTypeObject = typeof params[key] === "object";
    const isParamTypeArray =
      isParamTypeObject &&
      Array.isArray(params[key]) &&
      params[key].length >= 0;

    if (!isParamTypeObject) {
      options += `${key}=${params[key]}&`;
    }

    if (isParamTypeObject && isParamTypeArray) {
      params[key].forEach((element) => {
        options += `${key}=${element}&`;
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  paramsSerializer: parseParams,
});

const gzpRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TESTGZP_URL,
  paramsSerializer: parseParams,
});

request.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      error.response && error.response.data
      // || "Có lỗi xảy ra"
    )
);

export { request, gzpRequest};
