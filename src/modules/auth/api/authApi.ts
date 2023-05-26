import axiosInstance from '@/constants/axios';

import { UserModel } from '../types/user.model';

const END_POINT = '/auth';

export const authApi = {
  async get() {
    const response = await axiosInstance.get<UserModel>(END_POINT);
    return response;
  },
};
