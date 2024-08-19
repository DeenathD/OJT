import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
// poddak idapn
