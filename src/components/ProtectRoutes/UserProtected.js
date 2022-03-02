import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function UserProtected({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth/login" />;
}

export default UserProtected;
