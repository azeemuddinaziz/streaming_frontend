import { getVideoById } from "@/services/video.services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  MoreHorizontal,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Home from "./Home";

function PlayVideo() {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      //@ts-ignore
      setVideo(await getVideoById(videoId));
    })();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-[minmax(900px,_1fr)_280px] overflow-y-scroll w-full">
      <Card className="w-full">
        <CardContent className="p-0">
          <div className="aspect-video w-full bg-black">
            <video
              className="w-full h-full"
              controls
              //@ts-ignore
              poster={video.thumbnail}
              //@ts-ignore
              src={video.videoFile}
            ></video>
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {
              //@ts-ignore
              video.title
            }
          </CardTitle>
          <CardDescription className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={
                    //@ts-ignore
                    video.owner?.avatar
                  }
                  alt="Channel avatar"
                />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <div className="flex gap-2  items-center">
                <span className="text-sm font-medium">
                  {
                    //@ts-ignore
                    video.owner?.username
                  }
                </span>
                <Separator orientation="vertical" />
                <span className="text-xs text-muted-foreground">
                  1.2M subscribers
                </span>
              </div>
            </div>
            <Button variant="secondary">Subscribe</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Button
              variant={isLiked ? "default" : "secondary"}
              size="sm"
              onClick={handleLike}
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Like
            </Button>
            <Button
              variant={isDisliked ? "default" : "secondary"}
              size="sm"
              onClick={handleDislike}
            >
              <ThumbsDown className="mr-2 h-4 w-4" />
              Dislike
            </Button>
            <Button variant="secondary" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="secondary" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="secondary" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col bg-muted p-4 rounded-lg">
            <span className="text-sm font-medium mb-2">
              {
                //@ts-ignore
                video.views
              }
              <span> • Views</span>
            </span>
            <span className="text-sm">
              {
                //@ts-ignore
                video.description
              }
            </span>
          </div>
        </CardContent>
      </Card>
      <Home className={"md:grid-cols-none overflow-hidden"} />
    </div>
  );
}
export default PlayVideo;
