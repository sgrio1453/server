import React from "react";
import Image from "next/image";

const Sponsor = [
  {
    sponsorName: "Truefeedback Quiz Yarışması",
  },
];

const leaderboardData = [
  {
    username: "IcardiBey",
    rank: 3,
    points: 1235,
    imageSrc: "/images/icardi.jpg",
    bgColor: "bg-neu-brown",
    height: "h-20",
    borderColor: "border-neu-brown",
    fontSize: "text-5xl"
  },
  {
    username: "IcardiBey",
    rank: 1,
    points: 2356,
    imageSrc: "/images/icardi.jpg",
    bgColor: "bg-neu-yellow3",
    height: "h-36",
    borderColor: "border-neu-yellow3",
    fontSize: "text-7xl"
  },
  {
    username: "IcardiBey",
    rank: 2,
    points: 1892,
    imageSrc: "/images/icardi.jpg",
    bgColor: "bg-neu-gray",
    height: "h-28",
    borderColor: "border-neu-gray2",
    fontSize: "text-6xl"
  },
];

const LeaderBoardTop10 = [
    {
        username: "IcardiBey",
        rank: 4,
        points: 1235,
        imageSrc: "/images/icardi.jpg",
      },
      {
        username: "IcardiBey",
        rank: 5,
        points: 2356,
        imageSrc: "/images/icardi.jpg",
      },
      {
        username: "IcardiBey",
        rank: 6,
        points: 1892,
        imageSrc: "/images/icardi.jpg",
      },
    {
        username: "IcardiBey",
        rank: 7,
        points: 1235,
        imageSrc: "/images/icardi.jpg",
      },
      {
        username: "IcardiBey",
        rank: 8,
        points: 2356,
        imageSrc: "/images/icardi.jpg",
      },
      {
        username: "IcardiBey",
        rank: 9,
        points: 1892,
        imageSrc: "/images/icardi.jpg",
      },
      {
        username: "IcardiBey",
        rank: 10,
        points: 1892,
        imageSrc: "/images/icardi.jpg",
      },
]

const LeaderBoard = () => {
  const sponsorName = Sponsor[0].sponsorName;
  return (
    <div className="w-full h-full py-7 px-10 space-y-8">
      <h1 className="text-base lg:text-32 font-bold text-center">
        {sponsorName} Sonuçları
      </h1>

      <div className="flex flex-row justify-between space-x-8">
      {/* liderlik */}
      <div className="w-3/5 flex flex-col lg:flex-row space-x-12 justify-around">
        {leaderboardData.map((item, index) => (
          <div
            className={`flex flex-col w-1/5 space-y-5 mt-auto justify-center items-center `}
            key={index}
          >
            {/* profil resmi */}
            <div className="w-40 h-40">
              <Image
                src={item.imageSrc}
                alt="profile"
                width={160}
                height={160}
                className={`w-full h-full object-cover rounded-full border-8 ${item.borderColor}`}
              />
            </div>
            {/* kullanıcı adı */}
            <h1 className="text-2xl text-black font-bold text-center">
              {item.username}
            </h1>
            {/* sıralama */}
            <div
              className={`w-44 ${item.height} flex items-center justify-center ${item.fontSize} text-white text-center py-6 font-bold rounded-20 ${item.bgColor} border border-black border-r-8 border-b-8`}
            >
              <span className="drop-shadow-[2px_2px_rgba(0,0,0,40)]">
                {item.rank}
              </span>
            </div>
            {/* puan */}
            <div className="bg-white w-44 text-center font-bold text-xl py-2 rounded-20 border  border-black border-r-8 border-b-8">
              {item.points} puan
            </div>
          </div>
        ))}
      </div>
      {/* top 10 */}
      <div className="w-2/5 bg-white flex flex-col justify-between rounded-20 space-y-2 border border-black border-r-4 border-b-4 p-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold font-lexend text-center">Leaderboards</h2>
          <div className="flex flex-row justify-around items-center bg-neu-orange rounded-10 py-1 border border-black border-r-4 border-b-4">
            <h3 className="font-bold text-base font-public">No</h3>
            <h3 className="font-bold text-base font-public">Profile</h3>
            <h3 className="font-bold text-base font-public">Username</h3>
            <h3 className="font-bold text-base font-public">Point</h3>
          </div>
        </div>
      {LeaderBoardTop10.map((item, index) => (
        <div key={index} className="flex flex-row justify-around items-center">
            <div className="font-medium text-base font-public">{item.rank}</div>
            <div className="w-10 h-10">
              <Image
                src={item.imageSrc}
                alt="profile"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full border border-black border-r-2 border-b-2"              />
            </div>
            <div className="font-medium text-base font-public">{item.username}</div>
            <div className="font-medium text-base font-public">{item.points}</div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default LeaderBoard