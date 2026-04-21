const data2026 = [
  "DELHI BAZAR RECORD CHART 2026",
  "DESAWAR RECORD CHART 2026",
  "FARIDABAD RECORD CHART 2026",
  "GALI RECORD CHART 2026",
  "GHAZIABAD RECORD CHART 2026",
  "SHREE GANESH RECORD CHART 2026",
  "SHRI KRISHNA RECORD CHART 2026",
];

const data2025 = [
  "DELHI BAZAR RECORD CHART 2025",
  "DESAWAR RECORD CHART 2025",
  "FARIDABAD RECORD CHART 2025",
  "GALI RECORD CHART 2025",
  "GHAZIABAD RECORD CHART 2025",
  "SHREE GANESH RECORD CHART 2025",
  "SHRI KRISHNA RECORD CHART 2025",
];

const data2024 = [
  "DELHI BAZAR RECORD CHART 2024",
  "DESAWAR RECORD CHART 2024",
  "FARIDABAD RECORD CHART 2024",
  "GALI RECORD CHART 2024",
  "GHAZIABAD RECORD CHART 2024",
  "SHREE GANESH RECORD CHART 2024",
  "SHRI KRISHNA RECORD CHART 2024",
];

export default function ChartList() {
  return (
    <div className="mx-2 mt-4">

      {/* YEAR BLOCK FUNCTION */}
      {[
        { title: "SATTA KING RECORD CHART 2026", list: data2026 },
        { title: "SATTA KING RECORD CHART 2025", list: data2025 },
        { title: "SATTA KING RECORD CHART 2024", list: data2024 },
      ].map((section, index) => (
        <div key={index} className="mb-4">

          {/* HEADER */}
          <div className="bg-orange-500 text-white text-center font-bold py-2 text-lg">
            {section.title}
          </div>

          {/* LIST */}
          <div className="bg-black p-1 space-y-2">
            {section.list.map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 text-center py-2 rounded-full border-2 border-blue-600 font-semibold hover:bg-gray-300 transition cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}