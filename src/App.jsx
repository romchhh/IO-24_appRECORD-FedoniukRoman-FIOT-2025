import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Lab1 from "./pages/Lab1.jsx";
import Lab2 from "./pages/Lab2.jsx";
import Lab3 from "./pages/Lab3.jsx";
import Lab4 from "./pages/Lab4.jsx";
import Lab5 from "./pages/Lab5.jsx";
import Lab6 from "./pages/Lab6.jsx";
import Lab7 from "./pages/Lab7.jsx";
import Lab8 from "./pages/Lab8.jsx";
import Lab9 from "./pages/Lab9.jsx";
import MainText from "./components/MainText.jsx";


const MyComponent = () => {
    return (
        <Router>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen bg-gradient-to-b from-white to-blue-50'>
                <MainText/>
                <Navigation/>
                <div className="bg-white rounded-lg shadow-md p-4 my-6">
                    <Routes>
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L1" element={<Lab1/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L2" element={<Lab2/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L3" element={<Lab3/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L4" element={<Lab4/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L5" element={<Lab5/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L6" element={<Lab6/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L7" element={<Lab7/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L8" element={<Lab8/>} />
                        <Route path="/IO-24_appRECORD-FedoniukRoman-FIOT-2025/L9" element={<Lab9/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default MyComponent;