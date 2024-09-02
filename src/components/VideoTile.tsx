import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

type VideoTileProps = {
  title: string;
  thumbnail: string;
  description: string;
  views: number;
  createdAt: string;
  id: string;
};

function VideoTile({
  title,
  thumbnail,
  description,
  views,
  createdAt,
  id,
}: VideoTileProps) {
  return (
    <Link to={`/search/${id}`}>
      <Card className="overflow-hidden cursor-pointer">
        <CardContent className="p-0 w-full">
          <img
            alt="Video thumbnail"
            className="aspect-video object-cover w-full"
            height="180"
            src={thumbnail}
            width="320"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground">
            {views} • {createdAt || "No date"}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default VideoTile;
