import {useCallback,useState,useEffect} from 'react'

function useCurrency(){
const[ data , setData] = useState({})
const getCR = useCallback(()=>{
 fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(
(response)=>{

 return response.json()
}
).then((result)=>{
  setData(result)
  
  
}).catch((error)=>{
    console.log(error);
}
);
    
},[])
useEffect(()=>{
getCR()
},[getCR])
return data
}
export default useCurrency