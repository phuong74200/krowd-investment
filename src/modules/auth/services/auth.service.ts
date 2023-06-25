import { create } from 'zustand';

import { authApi } from '../api/auth.api';
import { UserModel } from '../types/user.model';

interface AuthServiceState {
  me: UserModel | null;
  get: () => void;
  authenticate: () => any;
  userInfo: () => any;
}

export const useAuthService = create<AuthServiceState>((set) => ({
  me: null,
  get: async () => {
    const user = await authApi.get();
    set({ me: user.data });
  },
  authenticate: async () => {
    const res = await authApi.authenticate();
    return res.data;
  },
  userInfo: async () => {
    const res = await authApi.getCurrentUserInfo();
    return res.data;
  },
}));
