import {useState}from 'react'

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
   
  const toggleFun = () =>{
    setToggle(!!toggle)
  }
  return [toggle, toggleFun]
}

const [toggle,toggleFun] = useToggle();
