import React, { useState } from "react";
import InputBox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  };

  const convertor = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="w-1/2 mx-auto rounded-3xl p-8 bg-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertor();
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrenyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white/90 px-5 py-2"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-2">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrenyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white/90 py-3 rounded-full mt-4"
              
            >
              Convert Currency
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
