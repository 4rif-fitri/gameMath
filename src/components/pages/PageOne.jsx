import {useEffect, useState} from "react";
import Button from "../Button";
import DotNavigation from "../DotNavigation";

export default function PageOne() {
  let number = [1,2,3,4,5,6,7,8,9,10]

  let [no,setNo] = useState(0)

    useEffect(()=>{
        if(no == "") return

        console.log(no)
    },[no])

  return (
    <div className="w-full flex flex-col min-h-full justify-center">
      <div
        className="m-auto border border-2 border-white rounded-2xl aspect-square
        flex items-center justify-center"
        style={{ width: "20rem" }}
      >
          <h1 className="text-4xl text-white">{no}</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 p-6 my-2">
        {number.map((num, idx) => (
          <Button text={num} key={idx} setNo={setNo} />
        ))}
      </div>
    </div>
  );
}
