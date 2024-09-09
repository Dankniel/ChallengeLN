import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './presentation/App.tsx';
import './styles/_globals.scss';
import './styles/_variables.scss';
import './styles/_mixins.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
