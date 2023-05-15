import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import security from "../../assets/security.png";
import business from "../../assets/business.png";
import access from "../../assets/access_control.png";
import network from "../../assets/computer_op.png";

const CoursesScroll = () => {
  const responsive = {
    0: {
      items: 1,
      nav: true
    },

    480: {
      items: 1,
      nav: false
    },

    800: {
      items: 3,
      nav: true
    },

    1000:{
      items: 4,
      nav: true
    }

  }

  return (
    <div className="container-fluid mx-auto p-5 mt-10 w-full">
      <div className="mt-3">
        <h1 className="text-xl">Our Top Courses</h1>
      </div>

      {/* Slider */}
      <div className="m-auto overflow-auto w-full relative top-10 mb-10">
        <ReactOwlCarousel className="owl-theme md:flex-nowrap sm:flex-wrap" loop margin={20} items={4}
        responsiveClass={true} responsive={responsive} nav>
          <div className="p-5 shadow-lg w-fit h-fit rounded-md">
            <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
              <img src={access} alt="" width={200} height={200} />
            </div>
            <h2 className="text-[0.99em] text-center">Security Principles</h2>
            <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
              <small className="text-sm">4.5</small>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-regular fa-star text-xs"></i>
            </div>
            <div className="mt-4 p-4 text-center align-middle">
              <button className="bg-black px-4 py-2 text-sm text-center text-white border border-white ">
                See More
              </button>
            </div>
          </div>

          <div className="p-5 shadow-lg w-fit h-fit  rounded-md">
            <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
              <img src={access} alt="" width={200} height={200} />
            </div>
            <h2 className="text-[0.99em] text-center">
              Business Continuity (BC), Disaster Recovery (DR) & Incident
              Response Concepts
            </h2>
            <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
              <small className="text-sm">4.5</small>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-regular fa-star text-xs"></i>
            </div>
            <div className="mt-4 p-4 text-center align-middle">
              <button className="bg-black px-4 py-2 text-sm text-center text-white border border-white ">
                See More
              </button>
            </div>
          </div>
          <div className="p-5 shadow-lg w-fit h-fit rounded-md">
            <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
              <img src={access} alt="" width={200} height={200} />
            </div>
            <h2 className="text-[0.99em] text-center">
              Access Controls Concepts
            </h2>
            <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
              <small className="text-sm">4.5</small>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-regular fa-star text-xs"></i>
            </div>
            <div className="mt-4 p-4 text-center align-middle">
              <button className="bg-black px-4 py-2 text-sm text-center text-white border border-white ">
                See More
              </button>
            </div>
          </div>
          <div className="p-5 shadow-lg w-fit h-fit rounded-md">
            <div className="p-3 rounded-md w-fit shadow-md mb-4 mx-auto">
              <img src={access} alt="" width={200} height={200} />
            </div>
            <h2 className="text-[0.99em] text-center">Network Security</h2>
            <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
              <small className="text-sm">4.5</small>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-regular fa-star text-xs"></i>
            </div>
            <div className="mt-4 p-4 text-center align-middle">
              <button className="bg-black px-4 py-2 text-sm text-center text-white border border-white ">
                See More
              </button>
            </div>
          </div>
          <div className="p-5 shadow-lg w-fit h-fit rounded-md">
            <div className="p-3 rounded-md w-fit shadow-md mb-4 mx-auto">
              <img src={access} alt="" width={200} height={200} />
            </div>
            <h2 className="text-[0.99em] text-center">Security Operations</h2>
            <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
              <small className="text-sm">4.5</small>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-solid fa-star text-xs text-yellow-400"></i>
              <i class="fa-regular fa-star text-xs"></i>
            </div>
            <div className="mt-4 p-4 text-center align-middle">
              <button className="bg-black px-4 py-2 text-sm text-center text-white border border-white ">
                See More 
              </button>
            </div>
          </div>
        </ReactOwlCarousel>
      </div>
    </div>
  );
};

export default CoursesScroll;
