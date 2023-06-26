import { Container, Grid } from '@mui/material';

import useSettings from '@/shared/hooks/use-settings';

import Page from '../../../components/Page';
import AppFeatured from '../components/carousel';

export default function DashBoardPage() {
  const { themeStretch } = useSettings();
  // const { user } = useAuth();

  return (
    <Page title="Dashboard: App | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div style={{ background: 'red', height: 400 }}>asd</div>
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <AppTotalActiveUsers /> */}
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <AppTotalInstalled /> */}
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <AppTotalDownloads /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppCurrentDownload /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppAreaInstalled /> */}
          </Grid>

          <Grid item xs={12} lg={8}>
            {/* <AppNewInvoice /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppTopRelated /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppTopInstalledCountries /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppTopAuthors /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <AppWidgets1 /> */}
              </Grid>
              <Grid item xs={12}>
                {/* <AppWidgets2 /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
