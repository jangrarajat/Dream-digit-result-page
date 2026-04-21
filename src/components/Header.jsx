import React from "react";
import { useState } from "react";
import RecordChart from "./RecordChart";
import RecentWinners from "./RecentWinners";
// const translations = {
//   en: {
//     title: "DREAM DIGIT LIVE RESULT",
//     disclaimer: "Please do not give money in the name of leak game.",
//     yesterday: "Yesterday",
//     today: "Today",
//     latest: "LATEST LIVE RESULT",
//     monthly: "Monthly Result Chart",
//     winners: "RECENT WINNERS",
//     won: "Won"
//   },
//   hi: {
//     title: "ड्रीम डिजिट लाइव रिजल्ट",
//     disclaimer: "कृपया लीक गेम के नाम पर किसी को पैसा न दें।",
//     yesterday: "कल",
//     today: "आज",
//     latest: "लेटेस्ट लाइव रिजल्ट",
//     monthly: "मंथली रिजल्ट चार्ट",
//     winners: "हाल के विजेता",
//     won: "जीता"
//   }
// };

export default function Header() {
  //  const [lang, setLang] = useState("hi");
  // const t = translations[lang];

  const extraData = [
    { title: "Dream Day - 05:00 PM", yesterday: "46" },
    { title: "Dream Evening - 08:00 PM", yesterday: "48" },
    { title: "Dream Night - 11:00 PM", yesterday: "27" },
  ];

  return (
    <div className="header bg-gray-200 py-6 px-2 text-center">
      {/* 🔥 LANGUAGE SELECTOR */}
      {/* <div className="flex justify-end mb-3">
  <select
    value={lang}
    onChange={(e) => setLang(e.target.value)}
    className="p-2 rounded border"
  >
    <option value="hi">Hindi</option>
    <option value="en">English</option>
  </select>
</div> */}

      {/* 🔥 TITLE */}
      {/* <h1 className="text-2xl font-bold mb-3"><span className="text-green-500 font-bold" >DREAM</span> <span className="text-red-500">DIGIT</span> <span className="text-green-500">LIVE RESULT</span></h1> */}
      <div className="flex justify-center mb-3">
        <img src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776704005/WhatsApp_Image_2026-04-19_at_5.07.04_PM_wsn0bh-removebg-preview_u4tgpw.png" className="w-full md:w-80 rounded-lg" />
      </div>
      {/* 🔥 DISCLAIMER */}
      <div className="max-w-3xl mx-auto mt-4 text-left">

        {/* 🔵 HINDI SECTION */}
        <h2 className="text-blue-900 text-xl font-bold text-center mb-2">
          कृपया ध्यान दें,
        </h2>

        <p className="text-blue-900 font-semibold text-center">
          लीक गेम के नाम पर किसी को कोई पैसा न दें, ना पहले ना बाद में - धन्यवाद
        </p>

        <hr className="my-3 border-blue-800" />

        <p className="text-blue-900 text-sm leading-relaxed">
          प्रिय उपयोगकर्ता, यह साइट केवल मनोरंजन के लिए बनाई गई है।
          हम आपको सूचित करना चाहते हैं कि हम और हमारी साइट
          <span className="font-bold"> (DREAMMDIGIT.COM) </span>
          किसी भी ऑनलाइन जुए की गतिविधियों में शामिल नहीं हैं।
          वेबसाइट पर मौजूद सभी डेटा केवल रिकॉर्ड हैं।
          हम किसी भी देश के नियमों और विनियमों को नुकसान नहीं पहुँचाना चाहते।
          हम आपको यह भी सूचित करना चाहते हैं कि हो सकता है कि आपके देश में सट्टा किंग खेलना कानूनी न हो,
          इसलिए बेहतर होगा कि आप आज ही इसे छोड़ दें।
          किसी भी लाभ या हानि के लिए केवल आप ही ज़िम्मेदार होंगे। धन्यवाद
        </p>

        {/* 🔴 ENGLISH SECTION */}
        <hr className="my-4 border-red-600" />

        <p className="text-red-700 font-bold text-sm">
          Please note: Do not give money to anyone in the name of leaked games, neither before nor after. —
        </p>

        <hr className="my-2 border-red-600" />

        <p className="text-red-700 text-sm leading-relaxed">
          Dear user, This site is created for entertainment purposes only.
          We would like to inform you that we and our website
          <span className="font-bold"> (DREAMMDIGIT.COM) </span>
          are not involved in any kind of online gambling activity.
          All the data available on the website is only for record purposes.
          We do not intend to violate any laws or regulations of any country.
          We also want to inform you that playing Satta King may not be legal in your country,
          so it is better to quit it today.
          You will be solely responsible for any profit or loss. Thank you.
        </p>

      </div>

      {/* 🔥 MAIN RESULT UI */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-md">

          {/* 🔥 TOP BANNER */}
          <img src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776599723/mkmk_ckb9cn.png" className="rounded-2xl w-full" />

          {/* 🔥 DATE + TIME */}
          <div className="mt-4 border-4 border-purple-400 rounded-full px-6 py-3 flex justify-between bg-white shadow font-bold">
            <span>{new Date().toDateString()}</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>

          {/* 🔥 RESULT CARD */}
          <div className="mt-5 border-4 text-white border-white bg-blue-800 rounded-3xl p-5 pb-1 shadow-lg text-center">
            <div className="bg-gradient-to-r  from-orange-400 to-red-500 text-white px-4 py-2 gap-1 flex items-center justify-center  rounded-full  font-semibold">

              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-sm font-semibold">LIVE</span>
              </div>
             <p> LATEST LIVE RESULT</p>
            </div>

            <h2 className="  font-bold mt-6">
              DREAM MORNING
            </h2>

            <h1 className=" text-5xl font-extrabold mt-3">
              31
            </h1>
          </div>

          {/* 🔥 YESTERDAY / TODAY */}
          <div className="mt-6 rounded-3xl border-4 border-white  overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r  from-orange-400 to-red-500 text-white text-center py-1 font-semibold">
              Dream Morning - 06:00 AM
            </div>

            <div className="bg-blue-800 text-white  border-white  flex justify-between px-8 py-2">
              <div>
                <p>Yesterday</p>
                <h1 className="text-white text-4xl font-bold">24</h1>
              </div>

              <div>
                <p>Today</p>
                <h1 className="text-white text-4xl font-bold">31</h1>
              </div>
            </div>
          </div>

          {/* 🔥 NEW SECTION (YOU ASKED) */}
          <div className="mt-6 space-y-6">

            {extraData.map((item, i) => (
              <div key={i} className="rounded-3xl border-4 border-white overflow-hidden shadow-xl">

                <div className="bg-gradient-to-r  from-orange-400 to-red-500 text-white text-center py-1 font-semibold">
                  {item.title}
                </div>

                <div className="bg-blue-800 text-white flex justify-between px-8 py-2">

                  <div>
                    <p>Yesterday</p>
                    <h1 className="text-white text-5xl font-bold">
                      {item.yesterday}
                    </h1>
                  </div>

                  <div>
                    <p>Today</p>

                    {/* WAIT BUTTON */}
                    <div className="bg-blue-600 text-white px-5 py-2 rounded-full mt-2 shadow">
                      ⏳ WAIT
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* 🔥 MONTHLY RESULT BOX */}
            <div className="bg-gradient-to-r  from-orange-400 to-red-500 cursor-pointer  hover:scale-105 duration-300 active:scale-95 border-4 border-white-500 rounded-3xl py-5 shadow-xl">
              <h2 className="text-xl font-bold text-white">
                📊 Monthly Result Chart
              </h2>
            </div>

          </div>

        </div>
      </div>
      {/* 🔥 RECENT WINNERS SECTION */}
      <div className="mt-10 flex justify-center">

        <RecentWinners />
      </div>
    </div>
  );
}