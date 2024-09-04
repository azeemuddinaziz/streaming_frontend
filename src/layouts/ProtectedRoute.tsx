import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <MainLayout />;
}

export { ProtectedRoute };
