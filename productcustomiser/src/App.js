import React from 'react';
import theme from './theme/customTheme';
import ProductCustomerPage from './components/pdp/buildingBlocks/pdpContainer'; 
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ProductCustomerPage />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App;
