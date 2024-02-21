"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import socketIOClient from "socket.io-client";
import { color, motion } from "framer-motion";
import Question from "@/components/Question/Question";
import Sponsor from "@/components/Sponsor/Sponsor";
import SponsorName from "@/components/SponsorName/SponsorName";
import { useSelector } from "react-redux";
import Advert from "@/components/Advert/Advert";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";

export default function Page() {
  const socket = socketIOClient("http://localhost:8000");
  const [username, setUsername] = useState("ates");
  const [isInit, setIsInit] = useState(false);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [trueAnswer, setTrueAnswer] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState("");
  const [width, setWidth] = useState(100);

  const colors = [
    "bg-neu-pink4",
    "bg-neu-red3",
    "bg-neu-purple3",
    "bg-neu-blue3",
  ];

  const optionSelected = (option) => {
    setSelectedOptions(option);
    console.log(option);
    if (option === trueAnswer1) {
      option.classList.add((style = { backgroundColor: "green" }));
      console.log("doğru cevap");
    } else {
      option.classList.add((style = { backgroundColor: "red" }));
      console.log("yanlış cevap");
    }
  };

  useEffect(() => {
    setWidth(100 - (10 - countDown) * 10);
    console.log("countdown", countDown);
  }, [countDown]);

  const [isWaiting, setIsWaiting] = useState(0);

  const question1 = useSelector((state) => state.quizData.question);
  const options1 = useSelector((state) => state.quizData.options);
  const trueAnswer1 = useSelector((state) => state.quizData.trueAnswer);
  const countDown1 = useSelector((state) => state.quizData.countDown);
  const isGameOver = useSelector((state)=> state.quizData.isGameOver)
  console.log("question1", question1);
  return (
    <div>
      <div>
        <div>
          <div
            className="hidden lg:block h-4 bg-red-500 w-full rounded-t-40"
            style={{ width: `100%` }}
          ></div>
          <div
            className="hidden lg:block h-4 bg-transparent w-full rounded-t-40"
            style={{ width: `${100 - width}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between overflow-y-auto">
        <div className="hidden lg:block relative h-[68vh] w-[8vh] mt-6">
          <Image
            className="h-full w-full"
            src="/images/sol.png"
            alt="images"
            fill
          />
        </div>
        <div className="w-[81vw] lg:w-[60vw] py-4 lg:py-0 mx-4 lg:m-0">
          {isGameOver !== 0 ? (
            <LeaderBoard/>
          ) : (<>
            {isWaiting === 0 ? (
              <>
                <div className="h-[8vh] lg:h-[12vh]">
                  <SponsorName sponsorName="ETH Quiz Competition" />
                </div>
                {/* <p className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Kalan süre: {countDown1}
                </p> */}
                <div>
                  <div className="h-[22vh] lg:h-[25vh] bg-neu-orange mb-4 lg:mb-8 flex flex-row relative items-center justify-center rounded-20 border border-black border-r-4 border-b-4">
                    <div className="hidden lg:block bg-neu-blue text-white text-base md:text-xl lg:text-2xl absolute -top-6 -left-8 lg:py-1 px-2 lg:px-4 rounded-20 border border-black border-r-4 border-b-4 font-archivo">
                      <span className="drop-shadow-md">1 / 10</span>
                    </div>
                    <div className=" text-xl lg:text-2xl font-bold text-black font-public text-center">
                      {question1 === "" ? (
                        <>soru yok</>
                      ) : (
                        <p className="text-xl lg:text-2xl font-bold text-black font-public text-center">
                          {question1}
                        </p>
                      )}
                    </div>

                    <div className="w-20 h-20 hidden lg:block absolute -top-10 -right-10">
                      <Image
                        src="/images/star.png"
                        alt="quiz"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0 w-full font-bold font-public pb-4 lg:pb-0">
                    {options1.map((option, index) => (
                      <div
                        key={index}
                        className="flex-row w-[81vw] lg:w-[48%] pb-0 lg:pb-6"
                      >
                        <motion.button
                          onClick={() => optionSelected(option)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 1 }}
                          className={`h-[10vh] lg:h-[9vh] w-full flex basis-1/2 ${colors[index]} items-center space-x-5 rounded-20 border border-black hover:border-none border-r-4 border-b-4 duration-100 cursor-pointer`}
                        >
                          <div className="text-40 pl-4">A</div>
                          <div>{option}</div>
                        </motion.button>
                      </div>
                    ))}
                  </div>

                  <div>
                    {countDown === 0 ? (
                      <p>Doğru cevap: {trueAnswer1}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div
                className="h-full lg:h-full mb-4 w-full flex flex-row relative items-center justify-center"
                style={{ width: `100%` }}
              >
                <Advert/>
              </div>
            )}
          </>)}
          <div>
            <Sponsor />
          </div>
        </div>
        <div className="hidden lg:block relative h-[68vh] w-[8vh] mt-6">
          <Image
            className="h-full w-full"
            src="/images/sag.png"
            alt="images"
            fill
          />
        </div>
      </div>
    </div>
  );
}
