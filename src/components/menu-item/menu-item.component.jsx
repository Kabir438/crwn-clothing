import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <>
  <Card sx={{ width: size ? '46vw !important' : '30vw !important', height: size ? '380px' : '290px', cursor: 'pointer'}} style={{marginBottom: size ? null : '20px'}} onClick={() => history.push(`/${linkUrl}`)}>
      <div className='MuiContentImage-root' style={{height: '100%',
                   width: '100%',
                   backgroundImage: `url("${imageUrl}")`}}>

      </div>
      <CardContent>
        <Typography variant="h5" component="div">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Typography>
        <Typography>SHOP NOW</Typography>
      </CardContent>
  </Card>
  </>
);

export default withRouter(MenuItem);
