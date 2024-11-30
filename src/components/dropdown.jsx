import React from "react";
import { HiOutlineStar } from "react-icons/hi2";

export const CurrencyDropDown = ({
  currencies,
  curency,
  setCurrency,
  favorites,
  handleFavorites,
  title = "",
}) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={curency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full bg-gray-200 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* render fav */}
          <hr />
          {currencies?.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button
          onClick={() => handleFavorites(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          <HiOutlineStar />
        </button>
      </div>
    </div>
  );
};
