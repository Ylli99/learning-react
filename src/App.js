import React, {useState} from 'react';
import {ThemeProvider} from "@material-ui/styles";
import Header from "./components/ui/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/ui/Footer";
import LandingPage from "./components/LandingPage";
import theme from "./components/ui/Theme";
import Services from './components/Services';
import CustomSoftware from './components/CustomSoftware'
import MobileApps from "./components/MobileApps";
import Websites from "./components/Websites";
import Revolution from "./components/Revolution";
import About from "./components/About";
import Contact from "./components/Contact";
import Estimate from "./components/Estimate"

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);


    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>
                <Routes>
                    <Route exact path="/"
                           element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/services"
                           element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/customsoftware"
                           element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/mobileapps"
                           element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/websites"
                           element={<Websites setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/revolution"
                           element={<Revolution setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/about"
                           element={<About setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/contact"
                           element={<Contact setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route exact path="/estimate"
                           element={<Estimate setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                </Routes>
                <Footer setValue={setValue}
                        setSelectedIndex={setSelectedIndex}/>
            </BrowserRouter>
        </ThemeProvider>);
}

export default App;
