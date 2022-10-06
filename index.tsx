import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MyApps from './my-apps';
import AppTile from './AppTile';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyApps filterAppVersion="Version 1" />
  </StrictMode>
);
