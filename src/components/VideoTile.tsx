import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type VideoTileProps = {
  title: string;
  thumbnail: string;
  username: string;
  views: number;
  id: string;
  avatar: string;
};

function VideoTile({
  title,
  thumbnail,
  username,
  views,
  id,
  avatar,
}: VideoTileProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/search/${id}`);
  };

  return (
    <Card onClick={handleCardClick} className="overflow-hidden cursor-pointer">
      <CardContent className="p-0 w-full">
        <img
          alt="Video thumbnail"
          className="aspect-video object-cover w-full"
          height="180"
          src={thumbnail}
          width="320"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <h3 className="font-semibold">{title}</h3>
        <Link
          to={`/profile/${username}`}
          className="flex items-center justify-center gap-4"
          onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling to the card
        >
          <Avatar className="w-6 h-6">
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground h-fit w-full hover:text-primary">
            {username}
          </span>
        </Link>
        <p className="text-sm text-muted-foreground">{views} • Views</p>
      </CardFooter>
    </Card>
  );
}

export default VideoTile;
