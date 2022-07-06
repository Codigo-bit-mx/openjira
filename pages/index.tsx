import type { NextPage } from 'next';
import { Typography, Grid, Card, CardHeader } from '@mui/material';
import {Layout} from '../components/Layout';

const HomePage: NextPage = () => {
  return (
    
    <Layout title= 'Home - Open Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
            <Card sx= {{ height: 'calc(100vh - 100px)'}}>
              <CardHeader title='Pendiente' />
            </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
            <Card sx= {{ height: 'calc(100vh - 100px)'}} >
              <CardHeader title='En Progreso' />
            </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
            <Card sx= {{ height: 'calc(100vh - 100px)'}} >
              <CardHeader title='Completada' />
            </Card>
        </Grid>
      </Grid>
    </Layout>
    
  )
}

export default HomePage;
