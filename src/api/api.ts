import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from '@/utils/user';
import { BACKEND_URL, REQUEST_TIMEOUT } from './constants';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token !== '') {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
