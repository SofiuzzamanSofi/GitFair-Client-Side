import React from "react";
import "../Resources/Resources.css";
import img1 from '../../../assets/team/selim.png';
import img2 from '../../../assets/team/nayeem.png';
import img3 from '../../../assets/team/sofi.png';
import img4 from '../../../assets/team/taimul.png';
import img5 from '../../../assets/team/jamshad.png';
import img6 from '../../../assets/team/rubel.png';
import img7 from "../../../assets/resources/code-snippet.png";
import img8 from "../../../assets/resources/code-snippet1.png";
import { BsArrowRight } from "react-icons/bs";

const Resources = () => {
  const resources = [
    {
      id: 1,
      cover: img7,
      profile: img1,
      userName: "Md Selim Alahi",
      category: "React & Node",
      title: "File Upload & Share",
      details:
        "Developers can upload their code related files to save and share with others...",
    },
    {
      id: 2,
      cover: img7,
      profile: img2,
      userName: "Md Nayeem",
      category: "React & Node",
      title: "File Upload & Share",
      details:
        "Developers can upload their code related files to save and share with others...",
    },
    {
      id: 3,
      cover: img7,
      profile: img3,
      userName: "Md Sofiuzzaman",
      category: "React & API",
      title: "Search AI",
      details:
        "Users can try to search their queries using the chatGPT AI tool here...",
    },
    {
      id: 4,
      cover: img8,
      profile: img4,
      userName: "Taimul Haque",
      category: "React & JavaScript",
      title: "Code Editor",
      details:
        "HTML, CSS & JavaScript code snippets can run and see the output here...",
    },
    {
      id: 5,
      cover: img8,
      profile: img5,
      userName: "Md Towhidul Islam",
      category: "React & API",
      title: "Online Support",
      details:
        "Users can solve their issues related to the GitFair service by asking our chatbot...",
    },
    {
      id: 6,
      cover: img8,
      profile: img6,
      userName: "Rubel Hossain",
      category: "React & Node",
      title: "URL Shortener",
      details:
        "Anyone can shorten their descriptive link and share with others a short link...",
    },
  ];

  return (
    <div className="text-white">
      <div className=" lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10">
        <div className='border-l-8 border-[#66C555] '>
          <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4 mb-10'>User Best Resources</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[136px] lg:px-12  pb-5 ">
          {resources.map(
            ({ id, cover, title, details, userName, profile, category }) => (
              <div className="card w-[297px] h-[410px] text-black shadow-xl bg-white rounded-xl">
                <figure className="px-4 pt-4  ">
                  <img src={cover} alt="Shoes" className="rounded-xl w-64 h-32" />
                </figure>
                <div className="flex-css mt-4">
                  <figure className=" ">
                    <img
                      src={profile}
                      alt="Shoes"
                      className="rounded-full w-[53px] h-[53px]"
                    />
                  </figure>
                  <div className="pl-3 leading-[8px] pt-1">
                    <h2 className="card-title text-[16px]">{userName}</h2>
                    <p className="text-[12px]">{category}</p>
                  </div>
                </div>
                <div className=" items-center text-center">
                  <h2 className="text-center items-center  pt-[13px] text-[20px] font-medium">{title}</h2>
                  <p className="text-[16px] mx-4 text-center pt-3 ">{details}</p>
                  <div className="card-actions">
                    <button className="button btn text-white uppercase rounded-lg">
                      SEE MORE{" "}
                      <span className="pl-2 text-xl">
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
