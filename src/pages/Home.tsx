import { ScrollArea } from "@/components/ui/scroll-area";
import VideoTile from "@/components/VideoTile.tsx";
import { getAllVideos } from "@/services/video.services.ts";
import { useEffect, useState } from "react";

type Video = {
  thumbnail: string;
  title: string;
  username: string;
  views: number;
  _id: string;
};

type Props = {
  className?: string;
};

function Home({ className }: Props) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      setError(null);
      (async () => {
        setVideos(await getAllVideos());
      })();
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <ScrollArea>
      <div className={`grid md:grid-cols-4 gap-6 p-4 w-full ${className}`}>
        {videos.length > 0 ? (
          videos.map((video) => {
            return (
              <VideoTile
                key={video._id}
                title={video.title}
                thumbnail={video.thumbnail}
                //@ts-ignore
                username={video.ownerDetails.username}
                //@ts-ignore
                avatar={video.ownerDetails.avatar}
                views={video.views}
                id={video._id}
              />
            );
          })
        ) : (
          <div>
            <div className="text-gray-500">
              Something went wrong while loading videos.
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

export default Home;
