import InputBox from "./components/Inputinfo"
import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
  const [amount,setAmount]=useState(0);
  const [to,setTo]=useState('usd')
  const [from,setFrom]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const options=useCurrencyInfo(from)
  const currencyOptions=Object.keys(options);
  
  const swap=()=>{
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const handleConvert = () => {
    const rate = options[to];
    console.log(rate)
    setConvertedAmount(amount * rate);
};

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:`url('https://cepr.org/sites/default/files/styles/og_image/public/2023-07/AdobeStock_562197444.jpeg?itok=i84oixbz')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleConvert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={currencyOptions}
                                    selectCurrency={from}
                                    onAmountChange={(amount)=> setAmount(amount)}
                                    onCurrencyChange={(currency)=> setFrom(currency)}
                                />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={currencyOptions}
                                selectCurrency={to}
                                amountDisable
                                onCurrencyChange={(currency)=> setTo(currency)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
