import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header isSimple={false} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ScrollArea>
          <Outlet />
        </ScrollArea>
      </div>
    </div>
  );
}
