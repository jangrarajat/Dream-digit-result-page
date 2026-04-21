export default function FooterSection() {
  return (
    <div className="mt-4">

      {/* TOP LINKS */}
      <div className="bg-orange-500 text-center py-6">
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {["PRIVACY POLICY", "DISCLAIMER", "SITEMAP"].map((item) => (
            <button
              key={item}
              className="bg-yellow-300 px-4 py-1 rounded-full font-semibold"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="bg-yellow-300 px-4 py-1 rounded-full font-semibold">
          About Us
        </button>

        {/* SMALL TEXT */}
        <p className="text-white mt-3 text-sm">
          Satta king | Satta result | Satta king 2019 | vip satta king | 
          Satta king up | Satta live result | Satta number | Satta leak number
        </p>
      </div>

      {/* MENU STRIP */}
      <div className="bg-orange-500 border-t border-white flex text-center text-white font-bold">
        <div className="w-1/3 py-2 border-r border-white">SATTA</div>
        <div className="w-1/3 py-2 border-r border-white">KING</div>
        <div className="w-1/3 py-2">MATKA</div>
      </div>

      {/* YELLOW SECTION */}
      <div className="bg-yellow-400 text-center py-6 border-t-4 border-red-500">
        <p className="font-semibold">
          आप भी अपनी वेबसाइट बनवा सकते है
        </p>

        <p className="mt-1">
          बनवाने के लिए कांटेक्ट करे
        </p>

        <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded font-bold">
          Prince Web
        </button>
      </div>

      {/* BOTTOM BLACK */}
      <div className="bg-black text-white text-center py-3 text-sm">
        ⚡ Last Updated: 05 Apr 2026 08:31:21 AM
      </div>

      {/* FLOATING BUTTONS */}
      
      {/* LEFT RED BOX */}
      <div className="fixed left-2 bottom-20 bg-red-600 text-white text-xs p-2 rounded-lg w-20">
        ईमानदार<br />
        खाईवाल<br />
        जोड़ी रेट 10 के 950<br />
        हरूप रेट 100 के 950
      </div>

      {/* REFRESH BUTTON */}
      <button className="fixed left-2 bottom-2 bg-orange-500 px-3 py-1 rounded-full font-semibold">
        Refresh
      </button>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/919034727679"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 bg-green-500 text-white p-4 rounded-full text-lg shadow-lg"
      >
        💬
      </a>

    </div>
  );
}