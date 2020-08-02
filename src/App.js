import React from 'react';
import Layout from './components/Layout/Layout';
import { ThemeProvider} from '@material-ui/core/styles';
import appTheme from './components/Theme/AppTheme'


function App() {
  return (
    <ThemeProvider theme={appTheme}>
  <Layout/>
  </ThemeProvider>
  );
}

export default App;
