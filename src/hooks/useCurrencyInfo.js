import {useEffect,useState} from 'react'

function useCurrencyInfo(currency){
    const [data,setData]=useState("null")
    useEffect(()=>{

        fetch(`https://v6.exchangerate-api.com/v6/29a10e7c104ee86d2c480fd3/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res["conversion_rates"]) )
    },[currency])
    console.log(data);
    
    return data
}
export default useCurrencyInfo