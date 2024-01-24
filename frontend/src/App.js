import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import API from "./API";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import WebPractice from "./pages/WebPractice";
import FormPractice from "./pages/FormPractice";
import LoginPage from "./pages/Login";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="Home" element={<Home />} />
            <Route path="Learn" element={<Learn />} />
            <Route path="Practice/*">
              <Route index element={<Practice />} />
              <Route path="WebPractice" element={<WebPractice />} />
              <Route path="FormPractice" element={<FormPractice />} />
            </Route>
            <Route path="Admin" element={<Admin />} />
            <Route path="*" element={<API />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
