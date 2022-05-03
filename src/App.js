import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import Header from "./components/ui/Header";
import {lightTheme} from "./components/ui/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (<ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
                <Route path="/services" element={<div>services</div>}/>
                <Route path="/customsoftware" element={<div>custom software</div>}/>
                <Route path="/mobileapps" element={<div>mobile apps</div>}/>
                <Route path="/websites" element={<div>websites</div>}/>
                <Route path="/revolution" element={<div>revolution</div>}/>
                <Route path="/about " element={<div>about</div>}/>
                <Route path="/contact" element={<div>contact</div>}/>
                <Route path="/estimate " element={<div>estimate</div>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>);
}

export default App;
