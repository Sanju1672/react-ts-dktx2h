import { TextField } from '@mui/material';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MyApps from './my-apps';
import AuthenticationAppTile from './authentication/authentication-appTile';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthenticationAppTile />
    //
  </StrictMode>
);
