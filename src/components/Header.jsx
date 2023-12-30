import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
  const search = useRef(null);
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    console.log(search.current?.value);
  }, [search]);

  const onSearch = () => {};

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
      <div className="col-span-10 text-center">
        <input
          ref={search}
          className="border border-gray-300 w-1/3 px-3 py-2 rounded-l-full"
          type="text"
          name="search"
          id="search-input"
        />
        <button
          className="px-3 py-2 border border-gray-300 bg-gray-300 rounded-r-full"
          onClick={onSearch}
        >
          search
        </button>
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
