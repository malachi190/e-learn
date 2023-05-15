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
        <div className="flex flex-1 justify-between items-baseline align-middle mx-auto">
          <Link className="mx-4 relative top-5">
            <img src={logo} alt="" className="relative top-0 md:w-[80px] md:h-[60px] w-[60px] h-[60px]"/>
          </Link>
          <Searchbar />
          <div className="w-full md:flex gap-10 items-center justify-center hidden">
            <Link to={"/"} className="text-sm">Courses</Link>
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
