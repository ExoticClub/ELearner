import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import API from "./API";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/apihandle" element={<API />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
