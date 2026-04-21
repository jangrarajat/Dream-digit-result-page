import React, { useEffect, useRef, useState } from 'react';

const RecentWinners = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  // Winners data
  const winnersData = [
    { id: "******5269", amount: "₹1,300", color: "bg-green-500", game: "Aviator", time: "" },
    { id: "******1313", amount: "₹8,200", color: "bg-yellow-400", game: "Roulette", time: "" },
    { id: "******3285", amount: "₹4,400", color: "bg-green-500", game: "Blackjack", time: "" },
    { id: "******5688", amount: "₹300", color: "bg-yellow-400", game: "Slots", time: "" },
    { id: "******7890", amount: "₹15,000", color: "bg-purple-500", game: "Baccarat", time: "" },
    { id: "******2345", amount: "₹6,700", color: "bg-blue-500", game: "Poker", time: "" },
    { id: "******9876", amount: "₹2,100", color: "bg-green-500", game: "Aviator", time: "" },
    { id: "******3456", amount: "₹9,999", color: "bg-yellow-400", game: "Roulette", time: "" },
  ];

  // Triple data for seamless infinite scroll
  const duplicatedData = [...winnersData, ...winnersData, ...winnersData];

  return (
    <div className="w-full max-w-md bg-gradient-to-b from-[#0f2027] to-[#203a43] p-5 rounded-3xl shadow-2xl">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-yellow-400 text-xl font-bold flex items-center gap-2">
          🏆 RECENT WINNERS
        </h2>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-sm font-semibold">LIVE</span>
        </div>
      </div>

      <div className="border-b border-gray-600 mb-4"></div>

      {/* SCROLLABLE LIST with CSS Animation */}
      <div 
        ref={containerRef}
        className="h-[352px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="space-y-4"
          style={{
            animation: `scrollSmooth 20s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {duplicatedData.map((item, i) => (
            <div
              key={i}
              className={`flex justify-between items-center bg-[#1c2b33] p-4 rounded-2xl border border-gray-600 
                transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20`}
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color} shadow-lg`}>
                  {item.game === 'Aviator' && '✈️'}
                  {item.game === 'Roulette' && '🎲'}
                  {item.game === 'Blackjack' && '🃏'}
                  {item.game === 'Slots' && '🎰'}
                  {item.game === 'Baccarat' && '🎴'}
                  {item.game === 'Poker' && '♠️'}
                  {!item.game && '⭐'}
                </div>

                <div>
                  <span className="text-white font-semibold text-lg">
                    {item.id}
                  </span>
                  <p className="text-gray-400 text-xs">{item.time}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <h1 className="text-green-400 font-bold text-xl animate-pulse">
                  {item.amount}
                </h1>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <span className="text-green-500">↑</span> Won
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-4 pt-3 border-t border-gray-600 flex justify-between items-center">
        <span className="text-gray-400 text-sm">
          🎮 {winnersData.length} winners today
        </span>
        <span className="text-yellow-400 text-sm font-semibold">
          Total: ₹{winnersData.reduce((sum, item) => 
            sum + parseInt(item.amount.replace('₹', '').replace(',', '')), 0
          ).toLocaleString()}
        </span>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes scrollSmooth {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default RecentWinners;