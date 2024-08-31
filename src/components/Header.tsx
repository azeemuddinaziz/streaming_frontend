import lightLogo from "../assets/light-logo.svg";
import darkLogo from "../assets/dark-logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";

function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-between px-10 py-4 border-b">
      <div className="flex items-center gap-2">
        {theme == "dark" ? (
          <img src={darkLogo} alt="logo of videoTube" width={30} />
        ) : (
          <img src={lightLogo} alt="logo of videoTube" width={30} />
        )}
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
