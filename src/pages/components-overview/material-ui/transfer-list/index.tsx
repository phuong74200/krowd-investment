import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material

import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
import Page from '../../../../components/Page';
import { PATH_PAGE } from '../../../../routes/paths';
//
import { Block } from '../../Block';

import EnhancedTransferList from './EnhancedTransferList';
import SimpleTransferList from './SimpleTransferList';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
} as const;

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

export default function TransferListComponent() {
  return (
    <RootStyle title="Components: Transfer List | Minimal-UI">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) =>
            theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Transfer List"
            links={[
              { name: 'Components', href: PATH_PAGE.components },
              { name: 'Transfer List' },
            ]}
            moreLink="https://next.material-ui.com/components/transfer-list"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Block title="Simple" sx={style}>
            <SimpleTransferList />
          </Block>

          <Block title="Enhanced" sx={style}>
            <EnhancedTransferList />
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
