import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UserProvider } from './UserContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11582F'}
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
