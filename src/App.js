import React from 'react';
import Layout from './Components/Layout/Layout';
import { ThemeProvider} from '@material-ui/core/styles';
import appTheme from './Components/Theme/AppTheme'


function App() {
  return (
    <ThemeProvider theme={appTheme}>
  <Layout/>
  </ThemeProvider>
  );
}

export default App;
