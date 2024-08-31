import logo from "../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <div className="flex justify-between px-10 py-4 border-b">
      {/* //logo
        //searchbar
        //login
         //themeswitch button */}

      <div className="flex items-center gap-2">
        <img src={logo} alt="logo of videoTube" width={30} />
        <span className="text-xl font-bold">VideoTube</span>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search"
          className="focus-visible:ring-transparent focus-visible:border-white"
        />
        <Button type="submit" variant={"outline"}>
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant={"outline"}>Login</Button>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
