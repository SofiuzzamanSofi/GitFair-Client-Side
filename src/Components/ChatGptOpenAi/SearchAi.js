import React, { useState } from 'react';
import bot from "../../assets/searchAI/bot.svg"
import user from "../../assets/searchAI/user.svg"
import send from "../../assets/searchAI/send.svg"
import './SearchAi.module.css';
import axios from 'axios';


const SearchAi = () => {


    const [searchInputText, setSearchInputText] = useState();
    const [chatLog, setChatLog] = useState([
        {
            uniqueId: "",
            question: "Hello Sir,",
        },
        {
            uniqueId: "",
            answer: "How Can I Help You?",
        }
    ]);
    // console.log(chatLog);

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


    // text typed every 20 millisecond---
    const typeText = (element, text) => {
        let index = 0;
        let interval = setInterval(() => {
            if (index < text.length) {
                element.innerHtml += text.chartAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 20)
    };


    // generate unique Id for each async.. --- 
    const generateUniqueId = () => {
        const timeStamp = Date.now();
        const randomNumber = Math.random();
        const hexadecimalString = randomNumber.toString(16);
        return `id-${timeStamp}-${hexadecimalString}`;
    };

    function chatStripe(isAi, value, uniqueId) {
        return (
            `
            <div class="wrapper ${isAi && 'ai'}">
                <div class="chat">
                    <div class="profile">
                        <img 
                          src=${isAi ? bot : user} 
                          alt="${isAi ? 'bot' : 'user'}" 
                        />
                    </div>
                    <div class="message" id=${uniqueId}>${value}</div>
                </div>
            </div>
        `
        )
    }




    // after clicking the arrow sign this function is exicuted----
    const handleOpenAiChatGptFunction = () => {


        if (searchInputText) {
            // setChatLog([...chatLog, {
            //     uniqueId: "",
            //     question: searchInputText?.text,
            // }])

            const chatContainer = document.getElementById("input-ask-ans");
            // chatContainer.innerHTML += chatStripe(false, searchInputText)


            // setChatLog([...chatLog, {
            //     uniqueId: uniqueId,
            //     user: `${searchInputText?.text}`,
            //     message: "m2",
            // }])

            const url = `${process.env.REACT_APP_URL}/searchai`
            console.log(url);

            axios.post(url, { prompt: searchInputText?.text })
                .then(res => {
                    const data = res?.data?.bot?.trim()
                    // console.log("this is axios back:", data);
                    setSearchInputText({ text: "" });


                    // get uniqueId from uniqueId function ----
                    const uniqueId = generateUniqueId();

                    // insert ans to the useState ---
                    setChatLog([...chatLog, {
                        uniqueId: "",
                        question: searchInputText?.text,
                    }, {
                        uniqueId: uniqueId,
                        answer: data,
                    }])

                }).catch(error => console.log(error))
            // console.log({ searchInputText });
            // setSearchInputText("");
        }
    }


    return (
        <div
            className='flex flex-col items-center justify-between min-h-screen'
        >


            <div
                id='input-ask-ans'
                className='w-full max-w-[1280px] mx-auto'>

                {chatLog && chatLog.map((chat, index) => <ChatMessage key={index} chat={chat} />)}

                {/* <div className='flex gap-2 items-center p-5'>
                    <img src={user} alt="" className='bg-blue-600 p-2' /> <p>This is ans text</p>
                </div>
                <div className='flex gap-2 items-center p-5 bg bg-[#40414F]'>
                    <img src={bot} alt="" className='bg-emerald-600 p-2' /> <p>This is ans text</p>
                </div> */}
            </div>
            <div
                className=' p-2 w-full  flex gap-2 bg-[#40414F] rounded-sm max-w-[1280px] mx-auto mt-4'
            >
                <textarea
                    required
                    placeholder='Ask Git-Fair AI'
                    name="searchInputText"
                    cols="30" rows="1"
                    className='p-2 w-full bg-[#40414F] text-white h-10 border-0 outline-none'
                    value={searchInputText?.text}
                    // set input text value on use state -------
                    onChange={(e) => setSearchInputText({ text: e?.target?.value })}

                >
                </textarea>
                <button className=''>
                    <img
                        src={send} alt="send-button" className=' w-10'

                        // on click button which is arrow sign / click function -----
                        onClick={handleOpenAiChatGptFunction}
                    />
                </button>
            </div>


        </div>

    );
};

const ChatMessage = ({ chat }) => {
    return (
        <>
            {chat?.question ?
                <div className='flex gap-2 items-center p-5'>
                    <img src={user} alt="" className='bg-blue-600 p-2' />
                    <p>{chat?.question}</p>
                </div>
                :
                <div className='flex gap-2 items-center p-5 bg bg-[#40414F]' >
                    <img src={bot} alt="" className='bg-emerald-600 p-2' />
                    <p id={`${chat?.uniqueId ? chat?.uniqueId : ""}`}>{chat?.answer}</p>
                </div>
            }

        </>
    );
}



export default SearchAi;