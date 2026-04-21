export default function FinalBanner() {
  return (
    <div className="mx-2 mt-4 p-5 rounded-xl border-2 border-red-500 text-center
                    bg-gradient-to-b from-blue-900 to-gray-400 text-white">

      {/* TOP TEXT */}
      <p className="text-sm font-semibold leading-relaxed">
        फ्री गेम पास के बाद फरीदाबाद गाजियाबाद गली दिसावर 👉 भरोसा आपका काम हमारा 👉 
        गेम खेलना दिलदार लोगों का काम है 👉 जीतता वही है जिसे खेलना पसंद है । ❌ 
        अगर आपका सट्टा खेल के नुकसान हो गया है । आज ही संपर्क करें । और नुकसान को कवर करें । धन्यवाद
      </p>

      {/* NUMBER */}
      <p className="text-yellow-300 font-bold text-lg mt-2">
        +919034727679
      </p>

      {/* NAME */}
      <p className="mt-2 font-semibold text-white">
        🙏 आपका अपना भाई पवन शुक्ला
      </p>

      {/* CTA TEXT */}
      <p className="mt-2 text-yellow-300 font-bold">
        गेम लेने के लिए व्हाट्सएप पे क्लिक करें
      </p>

      {/* BUTTON */}
      <a
        href="https://wa.me/919034727679"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-full border-2 border-red-500 font-semibold hover:bg-blue-700 transition"
      >
        WhatsApp Now
      </a>

    </div>
  );
}