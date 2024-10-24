/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from "react-router-dom";

type Props={
  text:string
  className?:string
  type?:string
  setIsContribute:React.Dispatch<React.SetStateAction<boolean>>
}
const ButtonTn = ({ text ,className,type,setIsContribute}: Props) => {
    const [searchParams,setSearchParams]=useSearchParams()

  return (
    <button
      onClick={() =>{
        if(type){
          setSearchParams(prevParams => ({ ...prevParams, type: type ?? '' }))
        }else{
            setSearchParams({})

        }
        setIsContribute(prev=>!prev)
      } }
      className={`hover:opacity-80 text-white py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonTn;
