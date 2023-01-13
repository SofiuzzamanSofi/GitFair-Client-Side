import React from "react";
import "./Resources.css";
import img1 from "../../assets/resources-image/resourse.jpeg";
// import img2 from "../../assets/resources-image/resourse.jpeg;
// import img3 from "../../assets/resources-image/resourse.jpeg;
// import img4 from "../../assets/resources-image/node.png";
// import img5 from "../../assets/resources-image/react.png";
// import img6 from "../../assets/resources-image/tailwind.png";
import img7 from "../../assets/resources-image/avatar2.png";
// import { } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";

const Resources = () => {
  const resources = [
    {
      id: 1,
      src: img1,
      imge: img7,
      userName: " Md Selim Alahi",
      category: "HTML and CSS",
      name: "Get started with GitLab",
      details:
        "Holisticly Leverage exiting user-centric action items without corporate initiatives",
    },
    {
      id: 2,
      src: img1,
      imge: img7,
      userName: " Md Selim Alahi",
      category: "HTML and CSS",
      name: "Get started with GitLab",
      details:
        "Holisticly Leverage exiting user-centric action items without corporate initiatives",
    },
    {
      id: 3,
      src: img1,
      imge: img7,
      userName: " Md Selim Alahi",
      category: "HTML and CSS",
      name: "Get started with GitLab",
      details:
        "Holisticly Leverage exiting user-centric action items without corporate initiatives",
    },
    {
      id: 5,
      src: img1,
      imge: img7,
      userName: " Md Selim Alahi",
      category: "HTML and CSS",
      name: "Get started with GitLab",
      details:
        "Holisticly Leverage exiting user-centric action items without corporate initiatives",
    },

    {
      id: 5,
      src: img1,
      imge: img7,
      userName: " Md Selim Alahi",
      category: "HTML and CSS",
      name: "Get started with GitLab",
      details:
        "Holisticly Leverage exiting user-centric action items without corporate initiatives",
    },

    {
      id: 6,
      src: img1,
      imge: img7,
      userName: " Md Selim Alahi",
      category: "HTML and CSS",
      name: "Get started with GitLab",
      details:
        "Holisticly Leverage exiting user-centric action items without corporate initiatives",
    },
  ];

  //   const user = [
  //     {
  //         id: 1,
  //         imge:img7,
  //         name:' Md Selim Alahi',
  //         category: 'HTML and CSS',
  //     }
  //   ]

  return (
    <div className="">
      <div className=" lg:w-[1440px] m-auto">
      {/* <div className='lime inline-block pt-3'>|</div> */}
        <h2 className="text-white font-semibold text-2xl pb-10 pt-5">
         <span className="bar">|</span> User Best Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[136px] px-12  pb-5 ">
          {resources.map(
            ({ id, src, name, details, userName, imge, category }) => (
              <div className="card w-[297px] h-[410px] text-black shadow-xl bg-white rounded-xl">
                <figure className="px-4 pt-4  ">
                  <img src={src} alt="Shoes" className="rounded-xl w-64 h-32" />
                </figure>
                <div className="flex-css mt-4">
                  <figure className=" ">
                    <img
                      src={imge}
                      alt="Shoes"
                      className="rounded-full w-[53px] h-[53px]"
                    />
                  </figure>
                  <div className="pl-3 leading-[1px] pt-1">
                    <h2 className="card-title text-[14px]">{userName}</h2>
                    <p className="text-[8px]">{category}</p>
                  </div>
                </div>
                <div className=" items-center text-center">
                  <h2 className="text-center items-center  pt-[13px] text-[20px] font-medium">{name}</h2>
                  <p className="text-[16px] mx-4 text-center pt-3 ">{details}</p>
                  <div className="card-actions">
                    <button className="button btn text-black">
                      SEE MORE{" "}
                      <span className="pl-7 text-xl">
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
