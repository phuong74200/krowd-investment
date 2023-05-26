import { create } from 'zustand';

interface ThemeState {
  kepp?: string;
}

export const useThemeStore = create<ThemeState>(() => ({}));
