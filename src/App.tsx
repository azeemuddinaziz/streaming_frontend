import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="h-full grid grid-cols-[1.1fr_5fr_1fr]">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
