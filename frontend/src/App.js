import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route pasth="/" element={<Dashboard />} />
            <Route pasth="/" element={<Login />} />
            <Route pasth="/" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
