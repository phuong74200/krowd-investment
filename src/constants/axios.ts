import axios from 'axios';

import { BASE_API_URL } from '@/constants/env';

import { onRequest, onRequestError } from './interceptors';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(onRequest, onRequestError);

export default axiosInstance;
