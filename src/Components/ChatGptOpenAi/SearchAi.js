import React, { useState } from 'react';
import bot from "../../assets/searchAI/bot.svg"
import user from "../../assets/searchAI/user.svg"
import send from "../../assets/searchAI/send.svg"
import './SearchAi.module.css';
import { TbZoomQuestion } from "react-icons/tb";
import { FcFaq } from "react-icons/fc";
import { SiChatbot } from "react-icons/si";
import { useForm } from 'react-hook-form';


const SearchAi = () => {


    const [searchInputText, setSearchInputText] = useState();

    // const { register, handleSubmit } = useForm();
    // const onSubmitAiSearch = data => {
    //     console.log(data)
    // };
    // const handleSubmitAiFunction = event => {
    //     event.preventDefault();
    //     console.log(event);
    //     // const a = document.getElementById("text-ai-id");
    //     // console.log(a);
    // };


    // loadin function ---
    const loader = element => {
        element.textContent = "";

        // loading show ... after 2 milliseconds ---
        let loadInterval = setInterval(() => {
            element.textContent += ".";


            // if the loading indicator has reached five dots, then reset it---
            if (element.textContent === "....") {
                element.textContent = "";
            }
        }, 200)
    };


    // text typed stoped---
    const typeText = (element, text) => {
        let index = 0;

        let interve
    }



    // after clicking the arrow sign this function is exicuted----
    const handleOpenAiChatGptFunction = () => {
        console.log({ searchInputText });


    }


    return (
        <div
            className='flex flex-col items-center justify-between h-screen border'
        >



            <div

                className='border w-full max-w-[1280px] mx-auto'>
                <div className='flex gap-2 items-center p-5'>
                    <img src={user} alt="" className='bg-blue-600 p-2' /> <p>This is ans text</p>
                </div>
                <div className='flex gap-2 items-center p-5 bg bg-[#40414F]'>
                    <img src={bot} alt="" className='bg-emerald-600 p-2' /> <p>This is ans text</p>
                </div>
            </div>
            <div
                // onClick={handleSubmit(onSubmitAiSearch)}
                // onClick={handleSubmitAiFunction}

                className='border p-2 w-full  flex gap-2 bg-[#40414F] rounded-sm max-w-[1280px] mx-auto'
            >
                <textarea
                    // id="text-ai-id"
                    // {...register("searchText")}
                    required
                    placeholder='Ask Git-Fair AI' name="searchInputText" cols="30" rows="10"
                    className='p-2 w-full bg-[#40414F] text-white h-10'

                    // set input text value on use state -------
                    onChange={(e) => setSearchInputText(e?.target?.value)}

                >
                </textarea>
                <button className='border'>
                    <img src={send} alt="send-button" className='border w-10'

                        // on click button which is arrow sign / click function -----
                        onClick={handleOpenAiChatGptFunction}
                    />
                </button>
            </div>


        </div>

    );
};

export default SearchAi;