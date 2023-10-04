import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./UI/Modules/pages/Home";
import { Login } from "./UI/Modules/pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
