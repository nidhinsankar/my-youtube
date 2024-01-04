import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/appSlice";
import { useDispatch } from "react-redux";
import CommentContainer from "../components/CommentContainer";
import LiveChat from "../components/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full  m-3">
      <div className="flex">
        <iframe
          width="70%"
          height="600px"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <LiveChat />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
