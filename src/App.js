import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { darkTheme } from './styles/theme.js';
import { ThemeProvider } from 'styled-components';

import { Layout } from './components/layout';
import Dashboard from './pages/dashboard';
// import Error from './Pages/Errors/Error';
import './App.css'
import { GlobalStyles } from './styles/global.styles';

const App = () => {
  return (
    <ThemeProvider theme={ darkTheme }>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route exact sensitive path="/" element={<Dashboard />} />
          {/* <Route element={Error} /> */}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;