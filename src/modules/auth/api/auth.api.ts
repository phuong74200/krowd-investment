import axiosInstance from '@/constants/axios';

import { UserModel } from '../types/user.model';

const END_POINT = '/auth';
const AUTHENTICATE_ENDPOINT = '/api/authenticate';
const USER_INFO_ENDPOINT = '/api/user';

export const authApi = {
  async get() {
    const response = await axiosInstance.get<UserModel>(END_POINT);
    return response;
  },
  async authenticate() {
    const res = await axiosInstance.get(AUTHENTICATE_ENDPOINT);
    return res;
  },
  async getCurrentUserInfo() {
    const res = await axiosInstance.get(USER_INFO_ENDPOINT);
    return res;
  },
};
