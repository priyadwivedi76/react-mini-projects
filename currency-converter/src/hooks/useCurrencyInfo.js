import { useState,useEffect } from "react"
const useCurrencyInfo=(currency)=>{
    const [data,setData]=useState({})

    useEffect(()=>{
         if(!currency) return;

        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates))
        .catch((err)=>console.log("Error found while fetching the data:",err))
    },[currency])
    
    return data;
}

export default useCurrencyInfo;