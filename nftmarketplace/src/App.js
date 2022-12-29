import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}></Route>
                <Route path="/home" element={<HomeScreen />}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
