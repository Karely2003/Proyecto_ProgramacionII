// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Pagos from "./pages/Pagod";
import Citas from "./pages/Citas";
import Reportes from "./pages/Reportes";
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;