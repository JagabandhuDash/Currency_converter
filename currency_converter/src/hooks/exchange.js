import {useCallback,useState,useEffect} from 'react';

function useExchange(currency) {
const[data,setData] = useState({})
let getExchange = useCallback(()=>{
 fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
 .then(
   (response)=>{
    return response.json()
 })
 .then(
   (result)=>{
     setData(result[currency])
 })
 .catch((error)=>{
    console.log(error);
})
},[currency,setData])

useEffect(()=>{
   if (currency) {
      getExchange()
   }

},[currency])
return data
}

export default useExchange;