import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/customswiper.scss';
import './styles/custom.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
