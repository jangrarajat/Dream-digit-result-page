import { useEffect, useState } from "react";

export default function ChartPage() {
  const [data, setData] = useState([]);

  // Dummy data (later replace with API / Firebase)
  useEffect(() => {
    const dummy = [
      {
        date: "2026-04-01",
        desawar: "--",
        delhi: "39",
        ganesh: "43",
        faridabad: "35",
        krishna: "46",
        ghaziabad: "12",
        gali: "97",
      },
      {
        date: "2026-04-02",
        desawar: "81",
        delhi: "11",
        ganesh: "55",
        faridabad: "33",
        krishna: "67",
        ghaziabad: "78",
        gali: "63",
      },
    ];

    setData(dummy);
  }, []);

  return (
    <div className="p-2 overflow-x-auto">

      {/* FILTER */}
      <div className="flex gap-2 justify-end mb-2">
        <select className="border px-2 py-1">
          <option>2026</option>
        </select>

        <select className="border px-2 py-1">
          <option>April</option>
        </select>

        <button className="bg-red-500 text-white px-3 py-1">
          Submit
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border border-black text-center text-sm">

        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="border">DATE</th>
            <th className="border">DESAWAR</th>
            <th className="border">DELHI BAZAR</th>
            <th className="border">SHREE GANESH</th>
            <th className="border">FARIDABAD</th>
            <th className="border">SHRI KRISHNA</th>
            <th className="border">GHAZIABAD</th>
            <th className="border">GALI</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="bg-gray-200">
              <td className="border text-red-500">{row.date}</td>
              <td className="border">{row.desawar}</td>
              <td className="border">{row.delhi}</td>
              <td className="border">{row.ganesh}</td>
              <td className="border">{row.faridabad}</td>
              <td className="border">{row.krishna}</td>
              <td className="border">{row.ghaziabad}</td>
              <td className="border">{row.gali}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}