import React ,{useState}from 'react'

const LearningUseState = () => {
  const [count,setCount] = useState(0)
  const increase = ()=> setCount(count +1)
  function decrease(){
    if(count <= 0){
      setCount(0)
    }else{
      setCount(count-1)
    }
  }
  const reset = () => setCount(0)
  return (
    <div>
      <h1 className='uppercase text-3xl text-center font-bold mt-6 mb-4'>Count is : {count}</h1>
      <div className='flex justify-center items-center gap-1'>
      <button onClick={increase} className='text-white bg-green-600 outline-none w-20 h-20 rounded-md'> + </button>
      <button onClick={decrease} className='text-white bg-red-700 outline-none w-20 h-20 rounded-md'> - </button>
      <button onClick={reset} className='text-white bg-gray-900 outline-none w-20 h-20'> 0 </button>
      </div>
      
    </div>
  )
}

export default LearningUseState