import { ScrollArea } from "@/components/ui/scroll-area";
import VideoTile from "@/components/VideoTile";
import { getAllVideos } from "@/services/video.services";
import { useEffect, useState } from "react";

type Video = {
  thumbnail: string;
  title: string;
  username: string;
  views: number;
  _id: string;
};

function Subscriptions() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      //TODO: make this working as getting all videos of channel subscribed.
      setVideos(await getAllVideos());
    })();
  }, []);

  return (
    <ScrollArea>
      <div className="grid md:grid-cols-4 gap-4 p-2 ">
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

export default Subscriptions;
