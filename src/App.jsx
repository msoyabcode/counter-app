import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50 px-4">
      <div className="bg-amber-100 p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl sm:text-5xl font-bold underline text-center mb-5">
          Counter App
        </h1>

        <h1 className="text-5xl sm:text-6xl font-light text-center mb-8">
          {count}
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xl sm:text-3xl">
          <button
            onClick={increase}
            className="bg-green-500 text-white px-6 py-3 rounded active:bg-green-600 w-full sm:w-auto"
          >
            Increase
          </button>

          <button
            onClick={decrease}
            className="bg-red-500 text-white px-6 py-3 rounded active:bg-red-600 w-full sm:w-auto"
          >
            Decrease
          </button>

          <button
            onClick={reset}
            className="bg-gray-500 text-white px-6 py-3 rounded active:bg-gray-600 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
