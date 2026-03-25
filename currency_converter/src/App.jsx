import {useState,useEffect,useCallback} from 'react'
import useCurrency from './hooks/currency'
import useExchange from './hooks/exchange'

function App() {
const [fromvalue,setFrom] = useState("")
const [tovalue,setTo] = useState("")

const[fromcurrency,setFCurrency] = useState("usd")
const[tocurrency,setTCurrency] = useState("inr")

let currencies = useCurrency()
let keys = Object.keys(currencies)
let getexchange = useExchange(fromcurrency) 
let value = Math.round(getexchange[tocurrency])


function getValue(){
if (fromvalue) {
setTo(fromvalue*value)
}
}




return (
    <>
     <div className='bg-[url(\assets\bg-image.png)] bg- w-full h-screen bg-cover flex justify-center items-center '>
      <div className='absolute inset-0 backdrop-blur-sm bg-black/10'></div>
      <div className='bg-white/20 p-10 rounded-2xl flex gap-6 flex-col items-center backdrop-blur-sm shadow-xlg ' >
        <div className='flex'>
        <h1 className='text-4xl font-sans font-bold '>Currency Converter </h1>
        </div>
       
      <div className='flex gap-3 m-4'>
        <input className='bg-white p-2 h-10 rounded-xl  font-anton-sc outline-none focus:ring-2 focus:ring-blue-500' type="number" placeholder='From' onChange={(e)=>{setFrom(e.target.value)}}/>
         <select className='bg-white p-2 rounded-xl  font-anton-sc outline-none focus:ring-2 focus:ring-blue-500' name="From" onChange={(e)=>{setFCurrency(e.target.value)}} >
          <option value="usd">USD</option>
         {keys.map((currency)=>(
           currency!="usd"&&
          <option  value={currency}>{currency.toUpperCase()}</option>
       ))}
         
    </select>
      </div>
     
      <div className='flex gap-3'>
        <input className='bg-white p-2 h-10 rounded-xl font-anton-sc outline-none focus:ring-2 focus:ring-blue-500' type="number" placeholder='To' readOnly value={tovalue}/>
       <select className='bg-white p-2 rounded-xl font-anton-sc outline-none focus:ring-2 focus:ring-blue-500' name="To" onChange={(e)=>{setTCurrency(e.target.value)}} >
        <option value="inr">INR</option>
         {keys.map((currency)=>(
           currency!="inr"&&
          <option  value={currency}>{currency.toUpperCase()}</option>
       ))}
        </select>
      </div>
      <div>
      <button className="w-55 m-4 relative z-0 rounded-3xl bg-blue-700 px-10 py-3 font-anton-sc text-white shadow-[inset_4px_4px_12px_#193d73,inset_-4px_-4px_12px_#3379e3] duration-200 hover:shadow-[inset_2px_2px_5px_#193d73,inset_-2px_-2px_5px_#3379e3]" onClick={getValue}>
  Convert
</button>
      </div>
       
      
       </div>
      </div>

     
    </>
  )
}

export default App
