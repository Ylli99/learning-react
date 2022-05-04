import React, {useState} from 'react';
import {ThemeProvider} from "@material-ui/styles";
import Header from "./components/ui/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/ui/Footer";
import LandingPage from "./components/LandingPage";
import {lightTheme} from "./components/ui/Theme";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);


    return (
        <ThemeProvider theme={lightTheme}>
            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/services" element={<div>Services</div>}/>
                    <Route path="/customsoftware" element={<div>Custom Software</div>}/>
                    <Route path="/mobileapps" element={<div>Mobile Apps</div>}/>
                    <Route path="/websites" element={<div>Websites</div>}/>
                    <Route path="/revolution" element={<div>The Revolution</div>}/>
                    <Route path="/about" element={<div>About Us</div>}/>
                    <Route path="/contact" element={<div>Contact Us</div>}/>
                    <Route path="/estimate" element={<div>Estimate</div>}/>
                </Routes>
                <Footer value={value} setValue={setValue} selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
            </BrowserRouter>
    </ThemeProvider>);
}

export default App;
