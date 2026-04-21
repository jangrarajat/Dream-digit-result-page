export default function RecordTable() {
  return (
    <div className="mx-2 mt-4 overflow-x-auto">

      {/* TABLE 1 */}
      <table className="w-full border border-black text-center">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="border border-black p-2">Date</th>
            <th className="border border-black p-2">FARIDABAD</th>
            <th className="border border-black p-2">GHAZIABAD</th>
            <th className="border border-black p-2">GALI</th>
            <th className="border border-black p-2">DESAWAR</th>
            <th className="border border-black p-2">SHREE GANESH</th>
            <th className="border border-black p-2">DELHI BAZAR</th>
          </tr>
        </thead>

        <tbody className="bg-gray-200">
          <tr>
            <td className="bg-orange-500 text-white border border-black">01-04-2026</td>
            <td className="border border-black">35</td>
            <td className="border border-black">12</td>
            <td className="border border-black">97</td>
            <td className="border border-black"></td>
            <td className="border border-black">43</td>
            <td className="border border-black">39</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">02-04-2026</td>
            <td className="border border-black">33</td>
            <td className="border border-black">78</td>
            <td className="border border-black">63</td>
            <td className="border border-black">81</td>
            <td className="border border-black">55</td>
            <td className="border border-black">11</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">03-04-2026</td>
            <td className="border border-black">99</td>
            <td className="border border-black">00</td>
            <td className="border border-black">62</td>
            <td className="border border-black">41</td>
            <td className="border border-black">58</td>
            <td className="border border-black">71</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">04-04-2026</td>
            <td className="border border-black">59</td>
            <td className="border border-black">77</td>
            <td className="border border-black">75</td>
            <td className="border border-black">97</td>
            <td className="border border-black">39</td>
            <td className="border border-black">83</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">05-04-2026</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black">71</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
        </tbody>
      </table>

      {/* GAP */}
      <div className="h-4 bg-black"></div>

      {/* TABLE 2 */}
      <table className="w-full border border-black text-center">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="border border-black p-2">Date</th>
            <th className="border border-black p-2">SHRI KRISHNA</th>
          </tr>
        </thead>

        <tbody className="bg-gray-200">
          <tr>
            <td className="bg-orange-500 text-white border border-black">01-04-2026</td>
            <td className="border border-black">46</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">02-04-2026</td>
            <td className="border border-black">67</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">03-04-2026</td>
            <td className="border border-black">30</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">04-04-2026</td>
            <td className="border border-black">88</td>
          </tr>

          <tr>
            <td className="bg-orange-500 text-white border border-black">05-04-2026</td>
            <td className="border border-black"></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}