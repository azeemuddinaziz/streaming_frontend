import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import SimpleLayout from "./SimpleLayout";

type Props = {
  isSimple?: boolean;
};

function ProtectedRoute({ isSimple }: Props) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isSimple) {
    return <SimpleLayout />;
  }

  return <MainLayout />;
}

export { ProtectedRoute };
