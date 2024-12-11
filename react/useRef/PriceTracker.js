import React, { useState, useRef, useEffect } from "react";

const PriceTracker = () => {
  const [currentPrice, setCurrentPrice] = useState(100);
  const previousPrice = useRef(currentPrice);

  useEffect(() => {
    previousPrice.current = currentPrice;
  }, [currentPrice]);

  const getPriceChange = () => {
    const change = currentPrice - previousPrice.current;
    return change > 0 ? `+${change}` : change;
  };

  return (
    <div className='p-4 space-y-4'>
      <h2 className='text-xl font-bold'>Price Change Tracker</h2>

      <div className='space-y-2'>
        <div className='text-lg'>Current Price: ${currentPrice}</div>
        <div className='text-lg'>Previous Price: ${previousPrice.current}</div>
        <div
          className={`text-lg ${
            currentPrice > previousPrice.current
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          Change: ${getPriceChange()}
        </div>
      </div>

      <div className='space-x-2'>
        <button
          onClick={() => setCurrentPrice((p) => p + 10)}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Increase Price
        </button>
        <button
          onClick={() => setCurrentPrice((p) => p - 10)}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        >
          Decrease Price
        </button>
      </div>
    </div>
  );
};

export default PriceTracker;
