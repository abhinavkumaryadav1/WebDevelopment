import React from 'react'
import { useId } from 'react';


function InputBox({ label, amount, onAmountChange,  currencyOptions=[],onCurrencyChange, selectCurrency="usd", amountDisable=false, currencyDisable=false, className = ""}) 
{
    const amountInputId=useId()
   

    return (
        <div className={`bg-gray-500 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"                                                  //here we are making input field working and data transmision
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                
                
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                    value={selectCurrency}   
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value) }        //using && cuz to check if value id present if present then do the next job
                    disabled= {currencyDisable}
                >
                    
                    
                        {currencyOptions.map((currency)=>
                            (<option key={currency} value={currency}>
                            {currency}
                            </option>)      )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
