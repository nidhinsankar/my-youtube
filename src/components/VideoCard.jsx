import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../store/youtubeApiSlice";

const Card = ({ info }) => {
  const { id, snippet, statistics } = info;

  return (
    <div className="w-72 shadow-xl">
      <img className="w-full" src={snippet.thumbnails.medium.url} />
      <div className="p-3">
        <p>{snippet.title}</p>
        <p className="my-3">{snippet.channelTitle}</p>
        <p>{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

const VideoCard = () => {
  const { data, error, isLoading } = useGetVideosQuery();
  const videos = data?.items;

  return (
    <div className="flex flex-wrap justify-between gap-y-4">
      {videos?.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <Card key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoCard;
