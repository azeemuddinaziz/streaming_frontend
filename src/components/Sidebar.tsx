import { History, Home, ListVideo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="border border-t-0 h-full">
      <div className="flex flex-col gap-2 p-2">
        <Link to={"/"}>
          <Button
            className="flex items-center justify-start gap-4 w-full py-2 h-full"
            variant={"ghost"}
          >
            <Home className="h-5 w-5" />
            <span className="text-md  font-normal">Home</span>
          </Button>
        </Link>
        <Button
          className="flex items-center justify-start gap-4 w-full py-2 h-full"
          variant={"ghost"}
        >
          <History className="h-5 w-5" />
          <span className="text-md font-normal">History</span>
        </Button>
        <Button
          className="flex items-center justify-start gap-4 w-full py-2 h-full"
          variant={"ghost"}
        >
          <ListVideo className="h-5 w-5" />
          <span className="text-md font-normal">Subscriptions</span>
        </Button>
      </div>

      <Separator />

      <div className="flex flex-col gap-2 p-2">
        <h4 className="text-base font-bold  px-2 py-2">Subscriptions</h4>
        <div className="flex flex-col gap-2">
          <Button
            className="flex items-center justify-start gap-4 w-full py-2 h-full"
            variant={"ghost"}
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src="http://res.cloudinary.com/dkjj20tvd/image/upload/v1724997677/dbkh5o3bi8pm4va1zlhs.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-md font-normal overflow-hidden text-ellipsis">
              Azeemuddin Aziz
            </span>
          </Button>

          <Button
            className="flex items-center justify-start gap-4 w-full py-2 h-full"
            variant={"ghost"}
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src="http://res.cloudinary.com/dkjj20tvd/image/upload/v1725021234/x70kcrftagfwm2sbrjxj.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-md font-normal overflow-hidden text-ellipsis">
              Rakazone Gaming
            </span>
          </Button>

          <Button
            className="flex items-center justify-start gap-4 w-full py-2 h-full"
            variant={"ghost"}
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src="http://res.cloudinary.com/dkjj20tvd/image/upload/v1725066628/v4s31dpyoq9intfmqggg.webp" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-md font-normal overflow-hidden text-ellipsis">
              Shadman
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
