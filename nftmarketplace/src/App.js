import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Buying from "./screens/Buying";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}></Route>
                <Route path="/home" element={<HomeScreen />}></Route>
                <Route path="/buy" element={<Buying />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
