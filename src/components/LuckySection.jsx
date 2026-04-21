export default function LuckySection() {
  return (
    <div className="bg-purple-700 text-white text-center py-6 px-4 rounded-xl mx-2 mt-4 border-2 border-red-500">

      {/* TITLE */}
      <h2 className="font-bold text-lg">🙏 ONLINE KHAIWAL 🙏</h2>
      <h3 className="font-semibold mt-1">LUCKY BHAI</h3>

      {/* TEXT */}
      <p className="mt-2 text-sm">
        सभी भाई गेम प्ले करे तो टेंशन होकर
      </p>

      {/* RATES */}
      <p className="text-sm mt-2">📱 जोड़ी रेट 10.....950₹</p>
      <p className="text-sm">💻 हरूप रेट 100........950₹</p>

      {/* EMOJIS */}
      <p className="mt-2">🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏</p>

      {/* GAME TIME */}
      <h3 className="mt-3 font-bold text-lg tracking-widest">
        ▬ G A M E &nbsp; T I M E ▬
      </h3>

      {/* GAME LIST */}
      <div className="mt-4 text-sm space-y-1">
        <p>🌀 DELHI BAZAAR........3:00 PM</p>
        <p>🌀 SHREE GANESH.......4:30 PM</p>
        <p>🌀 FARIDABAD..........6:00 PM</p>
        <p>🌀 GHAZIABAD..........9:20 PM</p>
        <p>🌀 GALI...............11:20 PM</p>
        <p>🌀 DESAWER............4:00 AM</p>
      </div>

      {/* NOTE */}
      <p className="mt-4 font-semibold text-black">
        भरोसा आपका ईमानदारी हमारी
      </p>

      <p className="text-black text-sm mt-1">
        NOTE: सुपर फास्ट पेमेंट का वादा मेरे पास गेम पास होने के 15 मिनट बाद आपकी पेमेंट तुरंत दी जाएगी
      </p>

      {/* CTA */}
      <p className="mt-3 text-yellow-300 font-bold text-sm">
        👇 गेम प्ले करने के लिए लिंक पे क्लिक करें 👇
      </p>

      {/* NUMBER */}
      <p className="text-yellow-300 font-bold text-lg">
        9034727679
      </p>

      {/* BUTTON */}
      <a
        href="https://wa.me/919034727679"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 bg-green-400 text-black px-6 py-2 rounded-full font-bold border-2 border-yellow-400 hover:bg-green-500 transition"
      >
        WHATSAPP NOW
      </a>
    </div>
  );
}