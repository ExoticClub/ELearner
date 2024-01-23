import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import API from "./API";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<API />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
