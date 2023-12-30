import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="sidebar-container flex-none basis-56 shadow-lg bg-slate-200 p-3 h-[calc(100vh-70px)] overflow-y-hidden hover:overflow-y-scroll">
      <div className="first-section py-3">
        <h2 className="my-2">My channel</h2>
        <ul>
          <li>trending</li>
          <li>subscriptions</li>
          <li>History</li>
          <li>watch later</li>
        </ul>
      </div>
      <div className="second-section py-3">
        <h2 className="my-2">Library</h2>
        <ul>
          <li>Study Mix</li>
          <li>Running tunes</li>
          <li>Evening chill</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <div className="third-section py-3">
        <h2 className="my-2">Subscriptions</h2>
        <ul>
          <li>cat-lyle</li>
          <li>cat-lyle</li>
          <li>cat-lyle</li>
          <li>cat-lyle</li>
          <li>cat-lyle</li>
          <li>cat-lyle</li>
          <li>cat-lyle</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
