import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import API from "./API";
import Home from "./pages/Home";
import Learn from "./pages/Learn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/Learn" element={<Learn/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/apihandle" element={<API/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
