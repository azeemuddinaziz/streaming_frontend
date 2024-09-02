import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
        <Header isSimple={true} />
        <Outlet />
      </div>
    </AuthProvider>
  );
}
