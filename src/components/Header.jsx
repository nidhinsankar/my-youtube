import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/constants";
import searchIcon from "../assets/search-icon.svg";
import { addCacheResults } from "../store/searchSLice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const cacheResult = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResult[searchQuery]) {
        console.log("inside timer");
        setSuggestions(cacheResult[searchQuery]);
      } else {
        searchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const onBlurChange = () => {
    setSuggestions([]);
  };

  const searchSuggestion = async () => {
    const res = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(addCacheResults({ [searchQuery]: data[1] }));
  };

  return (
    <div className="grid grid-flow-col py-3 px-2 shadow-lg items-center">
      <div className="flex col-span-1 items-center">
        <img
          className="h-8 mx-3 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
          onClick={() => handleMenuToggle()}
        />
        <Link to={"/"}>
          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-oItycwznL-_N-twiWaT3y3m8lonfj6xjA&usqp=CAU"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="col-span-10 mx-20">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 w-1/3 px-3 py-2 rounded-l-full"
          type="text"
          name="search"
          id="search-input"
          onBlur={onBlurChange}
        />
        <button
          className=" border border-gray-300 bg-gray-300 rounded-r-full py-2 px-2"
          // onClick={onSearch}
        >
          search
        </button>
        <div
          className={
            suggestions.length === 0
              ? "hidden"
              : "absolute bg-white w-[27rem] shadow-lg rounded-lg mt-1 p-3 border border-gray-300"
          }
        >
          <ul>
            {suggestions?.map((suggestionName) => (
              <li
                className="flex px-2 py-1 hover:bg-gray-100"
                key={suggestionName}
              >
                <img src={searchIcon} alt="search-icon" className="w-4 mr-3" />
                {suggestionName}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
