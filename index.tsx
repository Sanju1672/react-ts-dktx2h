import { TextField } from '@mui/material';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MyApps from './my-apps';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <MyApps filterAppVersion="Version 1" />
  </StrictMode>
);
