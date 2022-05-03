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
                <Route path="/services" element={<div>Services</div>}/>
                <Route path="/customsoftware" element={<div>Custom Software</div>}/>
                <Route path="/mobileapps" element={<div>Mobile Apps</div>}/>
                <Route path="/websites" element={<div>Websites</div>}/>
                <Route path="/revolution" element={<div>The Revolution</div>}/>
                <Route path="/about" element={<div>About Us</div>}/>
                <Route path="/contact" element={<div>Contact Us</div>}/>
                <Route path="/estimate" element={<div>Estimate</div>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>);
}

export default App;
