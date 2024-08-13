import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  amountDisable = false,
  currencyOptions = [],
  selectCurrency = "INR",
  onCurrenyChange,
}) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl text-sm flex">
      <div className="w-1/2">
        <label className="text-white font-semibold mb-2 inline-block">
          {label}
        </label>
        <input
          className="outline-none text-white w-full bg-transparent py-2"
          type="number"
          placeholder="EnterAmount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/90 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrenyChange && onCurrenyChange(e.target.value)}
          className="rounded-full px-3 py-1 bg-white cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
