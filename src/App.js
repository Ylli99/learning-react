import React from 'react';
import Header from "./components/ui/Header";
import { ThemeProvider } from '@material-ui/styles'
import {lightTheme} from './components/ui/Theme';

function App() {
    const test=lightTheme;
    console.log('theme',test);
    //const [themeLocal,setTheme]=useState(theme);
  return (
    <ThemeProvider theme={lightTheme}>
        <Header/>
        Hi!
    </ThemeProvider>
  );
}

export default App;
