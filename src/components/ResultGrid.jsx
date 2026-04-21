export default function ResultGrid() {
  return (
    <div className="mt-4 mx-2 border border-black">

      {/* TOP BLUE BOX */}
      <div className="bg-blue-900 text-white text-center py-4 border-b border-black">
        <h2 className="font-bold text-lg">DESAWAR</h2>
        <p className="text-yellow-300 text-sm">(05:00 AM)</p>
        <p className="mt-1 text-lg font-bold">
          {"{ 97 } ➡ [ 71 ]"}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2">

        {/* BOX 1 */}
        <div className="bg-red-900 text-white text-center py-6 border border-black">
          <h3 className="font-bold">DELHI BAZAR</h3>
          <p className="text-yellow-300 text-sm">(03:00 PM)</p>
          <p className="mt-1 font-bold">{"{ 83 } ➡ [ WAIT ]"}</p>
        </div>

        {/* BOX 2 */}
        <div className="bg-red-900 text-white text-center py-6 border border-black">
          <h3 className="font-bold">SHREE GANESH</h3>
          <p className="text-yellow-300 text-sm">(04:30 PM)</p>
          <p className="mt-1 font-bold">{"{ 39 } ➡ [ WAIT ]"}</p>
        </div>

        {/* BOX 3 */}
        <div className="bg-red-900 text-white text-center py-6 border border-black">
          <h3 className="font-bold">FARIDABAD</h3>
          <p className="text-yellow-300 text-sm">(06:00 PM)</p>
          <p className="mt-1 font-bold">{"{ 59 } ➡ [ WAIT ]"}</p>
        </div>

        {/* BOX 4 */}
        <div className="bg-red-900 text-white text-center py-6 border border-black">
          <h3 className="font-bold">SHRI KRISHNA</h3>
          <p className="text-yellow-300 text-sm">(08:15 PM)</p>
          <p className="mt-1 font-bold">{"{ 88 } ➡ [ WAIT ]"}</p>
        </div>

      </div>

      {/* GHAZIABAD */}
      <div className="bg-blue-900 text-white text-center py-4 border-t border-black">
        <h2 className="font-bold">GHAZIABAD</h2>
        <p className="text-yellow-300 text-sm">(09:30 PM)</p>
        <p className="mt-1 font-bold">{"{ 77 } ➡ [ WAIT ]"}</p>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-2">

        {/* GALI */}
        <div className="bg-red-900 text-white text-center py-6 border border-black">
          <h3 className="font-bold">GALI</h3>
          <p className="text-yellow-300 text-sm">(11:25 PM)</p>
          <p className="mt-1 font-bold">{"{ 75 } ➡ [ WAIT ]"}</p>
        </div>

        {/* EMPTY BOX */}
        <div className="bg-black border border-black"></div>

      </div>

    </div>
  );
}