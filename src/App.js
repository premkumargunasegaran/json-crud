import "./App.css";
import { toast, ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />

      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Read />} />
            <Route path="/create" element={<Create />} />
            
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
