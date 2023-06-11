import { forwardRef } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

import { ButtonAnimate } from '../animate';

const MIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...other }, ref) => (
    <ButtonAnimate>
      <IconButton ref={ref} {...other}>
        {children}
      </IconButton>
    </ButtonAnimate>
  )
);

export default MIconButton;
