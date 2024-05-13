import React from "react";
import AddPost from "../UserList";
import FetchPost from "../FetchPost";
import { Link } from "react-router-dom";
import { pathConstant } from "../../routes/pathConstants";

const Header: React.FC = () => {
  return (
    <header className="flex gap-4 my-5">
      <ul className="flex gap-">
        <li className="flex gap-4">
          <Link to={pathConstant.UserList} className="font-bold text-2xl">User List</Link>
          {/* <Link to={pathConstant.FetchPost}>Fetch Post</Link> */}
          <Link to={pathConstant.Counter} className="font-bold text-2xl">Counter</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
