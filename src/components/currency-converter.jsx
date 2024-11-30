import { useEffect } from "react";
import { useState } from "react";
import { CurrencyDropDown } from "./dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";

export const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("INR");

  // api.frankfurter.dev/currencies
  // https://api.frankfurter.dev/v1/latest?amount=1&base=USD&to=INR

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();

      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  const convertCurrency = () => {};

  const handleFavorites = (currency) => {};

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    settoCurrency(fromCurrency)
  }

  console.log(currencies);

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency Converter
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <CurrencyDropDown
          currencies={currencies}
          title="From:"
          handleFavorites={handleFavorites}
          setCurrency={setFromCurrency}
          curency={fromCurrency}
        />
        {/* swapbutton */}
        <div className="flex justify-center -mb-5 sm:mb-0"> 
            <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                <HiArrowsRightLeft className="text-xl text-gray-700"/>
            </button>
        </div>
        <CurrencyDropDown
          currencies={currencies}
          title="To:"
          setCurrency={settoCurrency}
          curency={toCurrency}
          handleFavorites={handleFavorites}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:{" "}
        </label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="w-full p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 foucs:ring-indigo-50"
          type="number"
        />
        <div className="flex justify-end mt-6">
          <button
            onClick={convertCurrency}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:big-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Convert
          </button>
        </div>
        <div className="mt-4 text-lg fond-medium text-right text-green-600">
          Converted Amount: 88 USD
        </div>
      </div>
    </div>
  );
};
