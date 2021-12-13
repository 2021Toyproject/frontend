import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';

const theme = {
  black: '#343a40',
  grey: '#868E96',
  green: '#12B886',
  hover: '#f7f7f8',
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
