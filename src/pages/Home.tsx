import { ScrollArea } from "@/components/ui/scroll-area";
import VideoTile from "@/components/VideoTile.tsx";
import { getAllVideos } from "@/services/video.services.ts";
import { useEffect, useState } from "react";

type Video = {
  thumbnail: string;
  title: string;
  description: string;
  views: number;
  createdAt: string;
  _id: string;
};

function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      setVideos(await getAllVideos());
    })();
  }, []);

  return (
    <ScrollArea>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 p-2 ">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoTile
              key={video._id}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              views={video.views}
              createdAt={video.createdAt}
              id={video._id}
            />
          ))
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
