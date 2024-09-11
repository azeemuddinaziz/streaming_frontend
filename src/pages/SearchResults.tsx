import { ScrollArea } from "@/components/ui/scroll-area";
import VideoTile from "@/components/VideoTile";
import { getAllVideos } from "@/services/video.services";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Define types for the video data
type OwnerDetails = {
  username: string;
  avatar: string;
};

type Video = {
  _id: string;
  title: string;
  thumbnail: string;
  views: number;
  ownerDetails?: OwnerDetails; // Mark as optional if this data might not always exist
};

function SearchResults() {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Type for isLoading
  const [results, setResults] = useState<Video[]>([]); // Ensure results is an array of Video objects
  const location = useLocation(); // Get the current location (URL)

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryValue = params.get("query");

    const fetchData = async () => {
      try {
        setIsLoading(true);
        //@ts-ignore
        const videos: Video[] = await getAllVideos(queryValue); // Fetch videos based on query
        setResults(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setIsLoading(false); // Ensure loading state is properly updated
      }
    };

    if (queryValue) {
      fetchData(); // Fetch data when query exists
    }
  }, [location.search]); // Re-run effect when the query changes

  if (isLoading) return <div>Loading...</div>;

  return (
    <ScrollArea>
      <div className="grid md:grid-cols-4 gap-4 p-2">
        {results.length > 0 ? (
          results.map((video) => (
            <VideoTile
              key={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              username={video.ownerDetails?.username || "Unknown"} // Fallback if username is missing
              avatar={video.ownerDetails?.avatar || ""} // Fallback for avatar
              views={video.views}
              id={video._id}
            />
          ))
        ) : (
          <div className="text-gray-500 col-span-4">
            No videos found or something went wrong while loading videos.
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

export default SearchResults;
