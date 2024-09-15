import { getVideoById } from "@/services/video.services";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import Home from "./Home";
import { toast } from "sonner";
import { toggleLikeVideo } from "@/services/like.services";

function PlayVideo() {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    try {
      (async () => {
        //@ts-ignore
        await toggleLikeVideo(videoId);
        setIsLiked(!isLiked);
        isLiked
          ? toast("Like removed from the video.")
          : toast("Like added to the video.");
      })();
    } catch (error) {
      setIsLiked(isLiked);
      //@ts-ignore
      toast("Error: " + error);
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      //@ts-ignore
      setVideo(await getVideoById(videoId));
      //@ts-ignore
      setIsLiked(video.isLiked);
    })();
    setLoading(false);
  }, [isLiked]);

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
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <CardTitle className="flex  flex-col gap-2 text-2xl font-bold">
              {
                //@ts-ignore
                video.title
              }
            </CardTitle>
            <CardDescription className="flex flex-row items-center justify-between">
              <div className="flex gap-2 items-center">
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
                <Link
                  className="hover:text-secondary-foreground"
                  to={`/profile/${
                    //@ts-ignore
                    video.owner?.username
                  }`}
                >
                  <span className="text-sm font-medium">
                    {
                      //@ts-ignore
                      video.owner?.username
                    }
                  </span>
                </Link>
              </div>
            </CardDescription>
          </div>

          <Button
            variant={isLiked ? "default" : "secondary"}
            size="sm"
            onClick={handleToggleLike}
          >
            <ThumbsUp className="mr-2 h-4 w-4" />
            {!isLiked ? "Like Video" : "Remove Like"}
          </Button>
        </CardHeader>
        <CardContent>
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
