import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyinfo"
import InputBox from "./components/InputBox";


export default function App() {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("inr")
    const [to, setTo] = useState("usd")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }


    return (
        <section className="w-full h-screen flex justify-center items-center bg-gray-500">
            <div className="w-full max-w-sm border border-black rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                onSubmit={(e)=>{
                    e.preventDefault()
                    convert()
                }}
                >

                    <div className="w-full mb-1 flex justify-center">
                        <InputBox
                            label="From"
                            amount={amount.toFixed(4)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>

                    <div className="relative w-full h-0.5 flex justify-center items-center z-10">
                        <button
                            type="button"
                            onClick={swap}
                            className=" border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                            Swap</button>
                    </div>

                    <div className="w-full mt-1 mb-2 flex justify-center">
                        <InputBox
                            label="To"
                            amount={convertedAmount.toFixed(4)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}   
                            amountDisable
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </section>
    );
}