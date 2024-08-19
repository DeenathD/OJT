import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../config/firebaseConfigs";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log('Auth state changed:', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  if (loading) {
    return <div>Loading...</div>; // Show a loading message while checking auth state
  }

  return user ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoutes;