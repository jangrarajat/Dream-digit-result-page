export default function OnlinePlaySection() {
  return (
    <div className="bg-gray-200 text-center py-6 px-4 rounded-xl mx-2 mt-4 border-2 border-green-500">

      {/* TITLE */}
      <h2 className="text-lg font-bold">📗 ऑनलाइन खेलो 📗</h2>
      <h3 className="font-semibold mt-1">Pankaj bhai</h3>

      <p className="mt-2">☆☆☆☆☆☆☆☆☆☆☆☆</p>

      {/* GAME LIST */}
      <div className="mt-4 text-sm space-y-1 font-semibold">
        <p>⏰ RAJDARBAR ........ 3:15 PM</p>
        <p>⏰ DELHI BAZAR ...... 3:00 PM</p>
        <p>⏰ SHREE GANESH .... 4:20 PM</p>
        <p>⏰ FARIDABAD ....... 5:50 PM</p>
        <p>⏰ NEW DELHI ....... 8:00 PM</p>
        <p>⏰ GHAZIABAD ....... 9:20 PM</p>
        <p>⏰ GALI CHOR ....... 11:10 PM</p>
        <p>⏰ DESAWER ......... 3:00 AM</p>
      </div>

      {/* RATES */}
      <div className="mt-4 text-sm font-bold">
        <p>⬛ जोड़ी रेट 10 के 950</p>
        <p>⬛ हरूप रेट 100 के 950</p>
      </div>

      {/* NOTE */}
      <p className="mt-3 font-semibold">
        भरोसा आपका ईमानदारी हमारी
      </p>

      <p className="text-xs mt-1">
        NOTE: सुपर फास्ट पेमेंट का वादा मेरे पास गेम पास होने के 15 मिनट बाद आपकी पेमेंट तुरंत दी जाएगी
      </p>

      {/* CONTACT */}
      <p className="mt-3 text-yellow-600 font-bold text-sm">
        👇 गेम प्ले करने के लिए लिंक पे क्लिक करें 👇
      </p>

      <p className="text-green-600 font-bold text-xl">
        👉 8619641472 👈
      </p>

      {/* BUTTON */}
      <a
        href="https://wa.me/919034727679"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 bg-blue-400 text-black px-6 py-2 rounded-full border-2 border-red-500 font-semibold hover:bg-blue-500 transition"
      >
        WhatsApp Now
      </a>
    </div>
  );
}