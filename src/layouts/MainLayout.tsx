import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthProvider } from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
        <Header isSimple={false} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <ScrollArea>
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </AuthProvider>
  );
}
