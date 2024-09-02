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
import Sidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";

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
      setVideo(await getVideoById(videoId));
    })();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Card className="w-full  mx-auto">
        <CardContent className="p-0">
          <div className="aspect-video w-full bg-black">
            <video
              className="w-full h-full"
              controls
              poster={video.thumbnail}
              src={video.videoFile}
            ></video>
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{video.title}</CardTitle>
          <CardDescription className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Channel avatar"
                />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <div className="flex gap-2  items-center">
                <span className="text-sm font-medium">{video.owner}</span>
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
          <div className="bg-muted p-4 rounded-lg">
            <span className="text-sm font-medium mb-2">
              1,234,567 views • May 9, 2008
            </span>
            <span className="text-sm">
              Big Buck Bunny tells the story of a giant rabbit with a heart
              bigger than himself. When one sunny day three rodents rudely
              harass him, something snaps... and the rabbit ain't no bunny
              anymore! In the typical cartoon tradition he prepares the nasty
              rodents a comical revenge.
            </span>
          </div>
        </CardContent>
      </Card>
      <Sidebar />
    </div>
  );
}
export default PlayVideo;
