import React from 'react';
import Header from "./components/ui/Header";
import { ThemeProvider } from '@material-ui/styles'
import {lightTheme} from './components/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
        <Header/>
        Hi!
    </ThemeProvider>
  );
}

export default App;
