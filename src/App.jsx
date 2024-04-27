import { useState } from 'react'
import Input from './components/Input';
import useCurrencyInfo from './hooks/useCurrencyInfo';


import './App.css'


function App() {
  
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState("inr")
  const [to,setTo] = useState("usd")
  const [convert,setConvert] = useState(0)


  const info =  useCurrencyInfo(from)

  const Options = Object.keys(info)


  const swapValues = () => {
    setFrom(to)
    setTo(from)
    setConvert(amount)
    setAmount(convert)
  }
  
    const converter = () => {

      setConvert(amount*info[to])
    }

  return (
    <>

    <div
            className="w-full bg-center h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat  bg-gradient-to-r from-blue-500 to-blue-600"
            style={{
                
            }}
            >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30  ">
               
            <p className="text-xl font-bold font-jetbrains-mono text-black flex flex-wrap justify-center items-center  ">Simple Currency Converter</p>
           
            <br/>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converter()
                        }}
                    >
                        <div className="w-full mb-1 ">
                            <Input 
                                label="From"
                                amount={amount}
                                currencyOptions={Options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapValues}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convert}
                                currencyOptions={Options}
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
            </div>
        </div>
        </>
        )

}

export default App;
