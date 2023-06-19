import { ExpandMoreRoundedIcon, Theme } from '@mui/material';

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreRoundedIcon,
      },

      styleOverrides: {
        root: {},
      },
    },
  };
}
