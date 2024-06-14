import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Incidents from "./pages/Incidents.jsx";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
