import React, { useState, useEffect } from 'react';

const RecentWinnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const winnersData = [
    { id: "******5269", amount: "₹1,300", color: "bg-green-500", game: "Aviator" },
    { id: "******1313", amount: "₹8,200", color: "bg-yellow-400", game: "Roulette" },
    { id: "******3285", amount: "₹4,400", color: "bg-green-500", game: "Blackjack" },
    { id: "******5688", amount: "₹300", color: "bg-yellow-400", game: "Slots" },
    { id: "******7890", amount: "₹15,000", color: "bg-purple-500", game: "Baccarat" },
    { id: "******2345", amount: "₹6,700", color: "bg-blue-500", game: "Poker" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % winnersData.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const currentWinner = winnersData[currentIndex];
  const nextWinner = winnersData[(currentIndex + 1) % winnersData.length];

  return (
    <div className="w-full max-w-md bg-gradient-to-b from-[#0f2027] to-[#203a43] p-5 rounded-3xl shadow-2xl">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-yellow-400 text-xl font-bold flex items-center gap-2">
          🏆 RECENT WINNERS
        </h2>
        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
          ● LIVE
        </span>
      </div>

      <div className="border-b border-gray-600 mb-4"></div>

      {/* CAROUSEL */}
      <div className="relative h-[100px] overflow-hidden">
        {/* Current Winner */}
        <div 
          className={`absolute w-full transition-all duration-300 ${
            isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <WinnerCard winner={currentWinner} />
        </div>

        {/* Next Winner */}
        <div 
          className={`absolute w-full transition-all duration-300 ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <WinnerCard winner={nextWinner} />
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-yellow-400 rounded-full animate-progress"
          style={{
            animation: 'progress 2.5s linear infinite'
          }}
        />
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center gap-2 mt-4">
        {winnersData.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-6 bg-yellow-400' 
                : 'w-1.5 bg-gray-600'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

// Winner Card Component
const WinnerCard = ({ winner }) => (
  <div className="flex justify-between items-center bg-[#1c2b33] p-4 rounded-2xl border border-gray-600">
    {/* LEFT */}
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${winner.color}`}>
        {winner.game === 'Aviator' && '✈️'}
        {winner.game === 'Roulette' && '🎲'}
        {winner.game === 'Blackjack' && '🃏'}
        {winner.game === 'Slots' && '🎰'}
        {winner.game === 'Baccarat' && '🎴'}
        {winner.game === 'Poker' && '♠️'}
      </div>

      <span className="text-white font-semibold text-lg">
        {winner.id}
      </span>
    </div>

    {/* RIGHT */}
    <div className="text-right">
      <h1 className="text-green-400 font-bold text-lg">
        {winner.amount}
      </h1>
      <p className="text-gray-400 text-sm">Won</p>
    </div>
  </div>
);

export default RecentWinnersCarousel;