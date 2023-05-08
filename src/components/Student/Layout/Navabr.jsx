import React, {useState} from "react";
import logo from "../../../assets/logo-two.jpeg";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Notification from './Notification'


const Navabr = () => {
  const [notif, setNotif] = useState(false);
  const handleNotif = () => {
    setNotif((prev) => !prev);
  };

  return (
    <>
      <header className="w-full relative bg-slate-50 p-5 shadow-md">
        <div className="flex flex-1 justify-between items-center align-middle mx-auto">
          <Link className="mx-4 relative top-1">
            <img src={logo} alt="" width={50} height={50}  className="relative top-0"/>
          </Link>
          <div className="ml-2 md:block hidden">
            <span className="text-sm cursor-pointer">Courses</span>
          </div>
          <Searchbar />
          <div className="mx-3 md:flex flex-1 justify-normal gap-5  hidden">
            <Link to={"/"} className="text-sm">Mentorship</Link>
            <Link to={"/"} className="text-sm">Live Courses</Link>
            <Link to={"/"} className="text-sm">My Wishlist</Link>
            <button onClick={handleNotif} className="text-lg mx-3 inline-block bg-transparent">
            <i class="fa-regular fa-bell"></i>
            </button>
          </div>
          <Notification notif={notif}/>
          <div className="mx-2 flex flex-auto justify-end items-end float-right relative cursor-pointer">
            <Profile/>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navabr;
