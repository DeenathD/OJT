import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoute";
import SidePage3 from "./Pages/SidePage3";
import LoginPage from "./Pages/LoginPage";
import SidePage2 from "./Pages/SidePage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidePage2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <SidePage3 />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Catch-all route */}
        </Routes>
        {/* Add other routes here */}
    </Router>
  );
}

export default App;

