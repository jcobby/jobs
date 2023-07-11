import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';
import { ThemeProvider } from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>

     <App />
     </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);


