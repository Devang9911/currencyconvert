import { useEffect , useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((data)=> data.json()) // fetch data converted to json
        .then((data)=> setData(data[currency])) // converted json data set in setdata with its key (usd or inr)
    } , [currency])
    // console.log(data)
    return data
}

