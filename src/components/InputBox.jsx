import React, { useId } from "react";

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {

    const amountInputId = useId();

    return (
        <div className="relative w-80 h-32 sm:w-80 sm:h-36 bg-white/40 backdrop-blur-xl 
                rounded-3xl p-4 shadow-lg border border-white/30 
                flex flex-col justify-between">

            <div className="flex justify-between text-gray-700 font-semibold text-sm sm:text-base">
                <label htmlFor={amountInputId}>{label}</label>
                <label>Currency Type</label>
            </div>

            <div className="flex justify-between items-center mt-1">

                <input
                    id={amountInputId}
                    type="number"
                    placeholder="0"
                    className="w-20 sm:w-28 p-2 rounded-xl bg-white/60
                       border border-gray-300 text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />

                <select
                    className="w-25 sm:w-32 p-2 rounded-xl bg-white/60 
                       border border-gray-300 text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
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
