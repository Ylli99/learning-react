import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import Header from "./components/ui/Header";
import {lightTheme} from "./components/ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" component={() =>
                    <div>

                 </div>}/>
                <Route path="/services" component={() => <div>services</div>}/>
                <Route path="/customsoftware" component={() => <div>custom software</div>}/>
                <Route path="/mobileapps" component={() => <div>mobile apps</div>}/>
                <Route path="/websites" component={() => <div>websites</div>}/>
                <Route path="/revolution" component={() => <div>revolution</div>}/>
                <Route path="/about " component={() => <div>about</div>}/>
                <Route path="/contact" component={() => <div>contact</div>}/>
                <Route path="/estimate " component={() => <div>estimate</div>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
