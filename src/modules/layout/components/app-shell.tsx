import { Box } from '@mui/material';

export interface AppShellProps extends React.PropsWithChildren {
  navbar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function AppShell({
  header,
  navbar,
  footer,
  children,
}: AppShellProps) {
  return (
    <Box>
      {header}
      <div>
        {navbar}
        <main>{children}</main>
      </div>
      {footer}
    </Box>
  );
}
