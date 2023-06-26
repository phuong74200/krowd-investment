import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const onRequest = (config: InternalAxiosRequestConfig) => {
  return config;
};

export const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const onResponseSuccess = (response: AxiosResponse) => {
  return response;
};

export const onResponseError = (error: AxiosError) => {
  return Promise.reject(error);
};
