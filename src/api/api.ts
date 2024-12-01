import axios, { InternalAxiosRequestConfig } from 'axios';
import { getToken } from '@/utils/user';

export const api = axios.create({
  baseURL: 'https://14.design.htmlacademy.pro/six-cities/',
  timeout: 5000,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getToken();

  if (token !== '') {
    config.headers['x-token'] = token;
  }

  return config;
});
