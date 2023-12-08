import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PrimeReactProvider>
    <React.StrictMode>
      <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </Router>
    </React.StrictMode>,
  </PrimeReactProvider>
);
