import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/folder.png";
import "./CreateShare.css";
// import { RiDragDropLine } from "react-icons/bs";
// import { FaDragon } from 'react-icons/FaDragon';
// import { FaDragon } from 'react-icons/RiDragDropFill';
import { BsFillBookmarkPlusFill} from "react-icons/bs";
import { BsFolder2} from "react-icons/bs";

const createShare = [
  {
    id: "01",
    src: img1,
    name: "Folder Name",
  },
  {
    id: "02",
    src: img1,
    name: "Folder Name",
  },
  {
    id: "03",
    src: img1,
    name: "Folder Name",
  },
  {
    id: "04",
    src: img1,
    name: "Folder Name",
  },
  {
    id: "05",
    src: img1,
    name: "Folder Name",
  },
  {
    id: "06",
    src: img1,
    name: "Folder Name",
  },
  {
    id: "07",
    src: img1,
    name: "Folder Name",
  },
];

const CreateShare = () => {
  return (
    <div className=" lg:w-[1440px] m-auto bg-white rounded-lg">
      <div>
        <h2 className="text-black font-semibold text-2xl pb-10 pt-10 pl-5">
          <span className="bar">|</span> User Best Resources
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pl-5">
        {createShare.map(({ id, src, name }) => (
          <div className="flex-css  mb-8  ">
            {/* <figure className="px-4">
              <img src={src} alt="Shoes" className="fig-img bg-white" />
            </figure> */}
             <span className="text-white "><BsFolder2  className="w-[30px] h-[30px]"/></span>
            <Link className="create-text text-white">{name}</Link>
          </div>
        ))}
      </div>
      <div className=" mt-[144px] pb-[200px]  ">
        <div className="card w-[600px] h-[272px] bg-color  shadow-xl card-folder  rounded-lg">
          
          {/* <input type="file"  /> */}
           <BsFillBookmarkPlusFill  className=" icons"/>
         
          <div className="card-body items-center text-center ">
            <p className="text-2xl text-black font-semibold ">Drag and drop your site <br />
               output folder here <br />               
               </p>
            <small className=" input-fild" ><input type="file"  />   </small>   

            <div className="card-actions ">
           <button className="btn-card btn-primary pb-4 ">Upload</button>
         </div>
          </div>
          
          </div>
        
        
      </div>
    </div>
  );
};

export default CreateShare;
