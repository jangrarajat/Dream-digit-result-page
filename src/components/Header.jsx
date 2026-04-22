import React, { useState, useEffect, useCallback, useRef } from "react";
import RecordChart from "./RecordChart";
import RecentWinners from "./RecentWinners";

const API_BASE_URL = 'https://dream-digit-server.onrender.com/api';

export default function Header() {
  const [todayResults, setTodayResults] = useState(null);
  const [yesterdayResults, setYesterdayResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMonthlyModal, setShowMonthlyModal] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const pollingInterval = useRef(null);
  const timeInterval = useRef(null);

  // Extra data slots configuration
  const extraDataSlots = [
    { title: "Dream Day - 05:00 PM", key: "index2" },
    { title: "Dream Evening - 08:00 PM", key: "index3" },
    { title: "Dream Night - 11:00 PM", key: "index4" },
  ];

  // Months configuration
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Fetch today's results
  const fetchTodayResults = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/results/today`);
      const data = await response.json();
      if (data.success && data.data) {
        setTodayResults(data.data);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error("Error fetching today results:", error);
    }
  }, []);

  // Fetch yesterday's results
  const fetchYesterdayResults = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/results/yesterday`);
      const data = await response.json();
      if (data.success && data.data) {
        setYesterdayResults(data.data);
      }
    } catch (error) {
      console.error("Error fetching yesterday results:", error);
    }
  }, []);

  // Fetch history data
  const fetchHistoryData = useCallback(async () => {
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/results/history`);
      const data = await response.json();
      if (data.success && data.data) {
        setHistoryData(data.data);
        // Set default filters
        const currentDate = new Date();
        setSelectedMonth(months[currentDate.getMonth()]);
        setSelectedYear(currentDate.getFullYear().toString());
      }
    } catch (error) {
      console.error("Error fetching history data:", error);
    } finally {
      setHistoryLoading(false);
    }
  }, []);

  // Fetch all data
  const fetchAllData = useCallback(async () => {
    setLoading(true);
    await Promise.all([fetchTodayResults(), fetchYesterdayResults()]);
    setLoading(false);
  }, [fetchTodayResults, fetchYesterdayResults]);

  // Update current time
  useEffect(() => {
    timeInterval.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      if (timeInterval.current) {
        clearInterval(timeInterval.current);
      }
    };
  }, []);

  // Setup polling for real-time updates
  useEffect(() => {
    // Initial fetch
    fetchAllData();

    // Poll every 5 seconds for real-time updates
    pollingInterval.current = setInterval(() => {
      fetchTodayResults(); // Only poll today's results for live updates
    }, 5000);

    // Cleanup on component unmount
    return () => {
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
      }
    };
  }, [fetchAllData, fetchTodayResults]);

  // Filter data when month or year changes
  useEffect(() => {
    if (historyData.length > 0 && selectedMonth && selectedYear) {
      const monthIndex = months.indexOf(selectedMonth);
      const filtered = historyData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() === monthIndex && 
               itemDate.getFullYear() === parseInt(selectedYear);
      });
      // Sort by date descending (latest first)
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredData(filtered);
    }
  }, [selectedMonth, selectedYear, historyData]);

  // Get unique years from history data
  const getAvailableYears = () => {
    if (!historyData.length) return [new Date().getFullYear().toString()];
    const years = [...new Set(historyData.map(item => 
      new Date(item.date).getFullYear().toString()
    ))];
    return years.sort().reverse();
  };

  // Get current live number (last added number from today)
  const getCurrentLiveNumber = () => {
    if (!todayResults?.numbers) return "WAIT";
    
    const numbers = todayResults.numbers;
    // Get the last non-empty value
    const values = Object.values(numbers);
    for (let i = values.length - 1; i >= 0; i--) {
      if (values[i] && values[i] !== "WAIT" && values[i] !== "") {
        return values[i];
      }
    }
    return "WAIT";
  };

  // Get today's number for a specific slot
  const getTodayNumber = (key) => {
    if (!todayResults?.numbers) return "WAIT";
    const number = todayResults.numbers[key];
    return number && number !== "" ? number : "WAIT";
  };

  // Get yesterday's number for a specific slot
  const getYesterdayNumber = (key) => {
    if (!yesterdayResults?.numbers) return "WAIT";
    const number = yesterdayResults.numbers[key];
    return number && number !== "" ? number : "WAIT";
  };

  // Check if slot is filled
  const isSlotFilled = (key) => {
    if (!todayResults?.numbers) return false;
    const number = todayResults.numbers[key];
    return number && number !== "" && number !== "WAIT";
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Format date for display in table
  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Open monthly modal
  const openMonthlyModal = async () => {
    setShowMonthlyModal(true);
    if (historyData.length === 0) {
      await fetchHistoryData();
    }
  };

  // Close modal
  const closeModal = () => {
    setShowMonthlyModal(false);
  };

  if (loading) {
    return (
      <div className="header bg-gray-200 py-6 px-2 text-center">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-bold text-blue-800">Loading Live Results...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="header bg-gray-200 py-6 px-2 text-center">
      {/* Logo Section */}
      <div className="flex justify-center mb-3">
        <img 
          src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776704005/WhatsApp_Image_2026-04-19_at_5.07.04_PM_wsn0bh-removebg-preview_u4tgpw.png" 
          className="w-full md:w-80 rounded-lg" 
          alt="Dream Digit Logo"
        />
      </div>

      {/* Disclaimer Section */}
      <div className="max-w-3xl mx-auto mt-4 text-left">
        <h2 className="text-blue-900 text-xl font-bold text-center mb-2">
          कृपया ध्यान दें,
        </h2>
        <p className="text-blue-900 font-semibold text-center">
          लीक गेम के नाम पर किसी को कोई पैसा न दें, ना पहले ना बाद में - धन्यवाद
        </p>
        <hr className="my-3 border-blue-800" />
        <p className="text-blue-900 text-sm leading-relaxed">
          प्रिय उपयोगकर्ता, यह साइट केवल मनोरंजन के लिए बनाई गई है।
          हम आपको सूचित करना चाहते हैं कि हम और हमारी साइट
          <span className="font-bold"> (DREAMMDIGIT.COM) </span>
          किसी भी ऑनलाइन जुए की गतिविधियों में शामिल नहीं हैं।
          वेबसाइट पर मौजूद सभी डेटा केवल रिकॉर्ड हैं।
          हम किसी भी देश के नियमों और विनियमों को नुकसान नहीं पहुँचाना चाहते।
          हम आपको यह भी सूचित करना चाहते हैं कि हो सकता है कि आपके देश में सट्टा किंग खेलना कानूनी न हो,
          इसलिए बेहतर होगा कि आप आज ही इसे छोड़ दें।
          किसी भी लाभ या हानि के लिए केवल आप ही ज़िम्मेदार होंगे। धन्यवाद
        </p>
        <hr className="my-4 border-red-600" />
        <p className="text-red-700 font-bold text-sm">
          Please note: Do not give money to anyone in the name of leaked games, neither before nor after. —
        </p>
        <hr className="my-2 border-red-600" />
        <p className="text-red-700 text-sm leading-relaxed">
          Dear user, This site is created for entertainment purposes only.
          We would like to inform you that we and our website
          <span className="font-bold"> (DREAMMDIGIT.COM) </span>
          are not involved in any kind of online gambling activity.
          All the data available on the website is only for record purposes.
          We do not intend to violate any laws or regulations of any country.
          We also want to inform you that playing Satta King may not be legal in your country,
          so it is better to quit it today.
          You will be solely responsible for any profit or loss. Thank you.
        </p>
      </div>

      {/* Main Result UI */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-md">
          {/* Top Banner */}
          <img 
            src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776599723/mkmk_ckb9cn.png" 
            className="rounded-2xl w-full" 
            alt="Dream Digit Banner"
          />

          {/* Date + Time - Mobile optimized */}
          <div className="mt-4 border-2 md:border-4 border-purple-400 rounded-full px-4 md:px-6 py-2 md:py-3 flex justify-between bg-white shadow font-bold text-sm md:text-base">
            <span>{formatDate(currentTime)}</span>
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>

          {/* Live Result Card - Mobile optimized */}
          <div className="mt-4 md:mt-5 border-2 md:border-4 text-white border-white bg-blue-800 rounded-2xl md:rounded-3xl p-3 md:p-5 pb-1 shadow-lg text-center">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 md:px-4 py-1 gap-1 flex items-center justify-center rounded-full font-semibold text-xs md:text-sm">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500"></span>
                </span>
                <span className="animate-pulse text-green-400 text-xs md:text-sm font-semibold">LIVE</span>
              </div>
              <p className="text-xs md:text-sm">LATEST LIVE RESULT</p>
            </div>

            <h2 className="font-bold mt-2 md:mt-4 text-white text-xs md:text-sm">
              DREAM MORNING
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2 md:mt-3 text-white animate-pulse">
              {getCurrentLiveNumber()}
            </h1>
          </div>

          {/* Morning Slot - 06:00 AM - Mobile optimized */}
          <div className="mt-4 rounded-2xl md:rounded-3xl border-2 md:border-4 border-white overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-center py-1.5 md:py-2 font-semibold text-sm md:text-lg">
              Dream Morning - 06:00 AM
            </div>
            <div className="bg-blue-800 text-white border-white flex justify-between px-4 md:px-8 py-1">
              <div className="text-center">
                <p className="text-xs md:text-sm mb-0.5 md:mb-1">Yesterday</p>
                <h1 className="text-white text-xl md:text-2xl font-bold">
                  {getYesterdayNumber("index1")}
                </h1>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm mb-0.5 md:mb-1">Today</p>
                {isSlotFilled("index1") ? (
                  <h1 className="text-white text-xl md:text-2xl font-bold">
                    {getTodayNumber("index1")}
                  </h1>
                ) : (
                  <div className="bg-blue-600 text-white px-3 md:px-5 py-1 md:py-2 rounded-full mt-1 md:mt-2 shadow text-xs md:text-base">
                    ⏳ WAIT
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Other Slots - Day, Evening, Night - Mobile optimized */}
          <div className="mt-4 space-y-4">
            {extraDataSlots.map((slot, i) => (
              <div key={i} className="rounded-2xl md:rounded-3xl border-2 md:border-4 border-white overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-center py-1.5 md:py-2 font-semibold text-sm md:text-lg">
                  {slot.title}
                </div>
                <div className="bg-blue-800 text-white flex justify-between px-4 md:px-8 py-1">
                  <div className="text-center">
                    <p className="text-xs md:text-sm mb-0.5 md:mb-1">Yesterday</p>
                    <h1 className="text-white text-xl md:text-2xl font-bold">
                      {getYesterdayNumber(slot.key)}
                    </h1>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm mb-0.5 md:mb-1">Today</p>
                    {isSlotFilled(slot.key) ? (
                      <h1 className="text-white text-xl md:text-2xl font-bold">
                        {getTodayNumber(slot.key)}
                      </h1>
                    ) : (
                      <div className="bg-blue-600 text-white px-3 md:px-5 py-1 md:py-2 rounded-full mt-1 md:mt-2 shadow text-xs md:text-base">
                        ⏳ WAIT
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Monthly Result Box - Clickable */}
            <div 
              onClick={openMonthlyModal}
              className="bg-gradient-to-r from-orange-400 to-red-500 cursor-pointer hover:scale-105 duration-300 active:scale-95 border-2 md:border-4 border-white rounded-2xl md:rounded-3xl py-2 md:py-3 shadow-lg transition-transform"
            >
              <h2 className="text-base md:text-xl font-bold text-white">
                📊 Monthly Result Chart
              </h2>
              <p className="text-xs text-white mt-0.5 md:mt-1">Click to view history</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Winners Section */}
      <div className="mt-10 flex justify-center">
        <RecentWinners />
      </div>

      {/* Auto-refresh indicator */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs shadow-lg z-40">
        🔄 Live Updates Active
      </div>

      {/* Monthly Result Modal */}
      {showMonthlyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">📊 Monthly Result Chart</h2>
                <p className="text-xs md:text-sm opacity-90">Complete history of all results</p>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 text-2xl md:text-3xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Filters */}
              <div className="mb-6 flex gap-4 flex-wrap">
                <div className="flex-1 min-w-[150px]">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {getAvailableYears().map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 min-w-[150px]">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select Month</label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Statistics */}
              {filteredData.length > 0 && (
                <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-base md:text-lg mb-2">Statistics for {selectedMonth} {selectedYear}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xs md:text-sm text-gray-600">Total Results</p>
                      <p className="text-xl md:text-2xl font-bold text-blue-600">{filteredData.length}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs md:text-sm text-gray-600">Complete Days</p>
                      <p className="text-xl md:text-2xl font-bold text-green-600">
                        {filteredData.filter(d => d.isComplete).length}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs md:text-sm text-gray-600">Partial Days</p>
                      <p className="text-xl md:text-2xl font-bold text-orange-600">
                        {filteredData.filter(d => !d.isComplete && d.savedCount > 0).length}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs md:text-sm text-gray-600">Total Numbers</p>
                      <p className="text-xl md:text-2xl font-bold text-purple-600">
                        {filteredData.reduce((sum, d) => sum + (d.savedCount || 0), 0)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Results Table */}
              {historyLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-800"></div>
                  <p className="mt-2 text-gray-600">Loading history...</p>
                </div>
              ) : filteredData.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500 text-lg">No results found for {selectedMonth} {selectedYear}</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-gradient-to-r from-blue-800 to-purple-800 text-white text-sm md:text-base">
                      <tr>
                        <th className="p-2 md:p-3 text-left border">Date</th>
                        <th className="p-2 md:p-3 text-center border">Morning<br/>06:00 AM</th>
                        <th className="p-2 md:p-3 text-center border">Day<br/>05:00 PM</th>
                        <th className="p-2 md:p-3 text-center border">Evening<br/>08:00 PM</th>
                        <th className="p-2 md:p-3 text-center border">Night<br/>11:00 PM</th>
                        <th className="p-2 md:p-3 text-center border">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr 
                          key={index} 
                          className={`border-b hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                        >
                          <td className="p-2 md:p-3 font-semibold text-gray-800 border text-sm md:text-base">
                            {formatDisplayDate(item.date)}
                          </td>
                          <td className="p-2 md:p-3 text-center border">
                            <span className={`inline-block w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm md:text-2xl font-bold ${
                              item.numbers?.index1 && item.numbers.index1 !== "" 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {item.numbers?.index1 && item.numbers.index1 !== "" ? item.numbers.index1 : "—"}
                            </span>
                          </td>
                          <td className="p-2 md:p-3 text-center border">
                            <span className={`inline-block w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm md:text-2xl font-bold ${
                              item.numbers?.index2 && item.numbers.index2 !== "" 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {item.numbers?.index2 && item.numbers.index2 !== "" ? item.numbers.index2 : "—"}
                            </span>
                          </td>
                          <td className="p-2 md:p-3 text-center border">
                            <span className={`inline-block w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm md:text-2xl font-bold ${
                              item.numbers?.index3 && item.numbers.index3 !== "" 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {item.numbers?.index3 && item.numbers.index3 !== "" ? item.numbers.index3 : "—"}
                            </span>
                          </td>
                          <td className="p-2 md:p-3 text-center border">
                            <span className={`inline-block w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm md:text-2xl font-bold ${
                              item.numbers?.index4 && item.numbers.index4 !== "" 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {item.numbers?.index4 && item.numbers.index4 !== "" ? item.numbers.index4 : "—"}
                            </span>
                          </td>
                          <td className="p-2 md:p-3 text-center border text-xs md:text-sm">
                            {item.isComplete ? (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                ✓ Complete
                              </span>
                            ) : item.savedCount > 0 ? (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                                ⏳ Partial ({item.savedCount}/4)
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                                — No Data
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-100 p-4 rounded-b-2xl flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Total Results: {filteredData.length} | Last updated: {lastUpdate.toLocaleString()}
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gradient-to-r from-blue-800 to-purple-800 text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}