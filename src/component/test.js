import {useSelector} from "react-redux";

import {useDispatch} from "react-redux"; ///add data

import {addData ,dataDownload} from "../redux/other/slice";
import {useState} from "react"; // slice action
import {nanoid} from "@reduxjs/toolkit";

export default function Test(){


    const items = useSelector(state=>state.veriAl.data)
    console.log(items)

    const [Data , setData]=useState("");
    const dispacth = useDispatch();

    const completeAddData=()=>{
    dispacth(addData({name:Data , number:nanoid()}))
    }

    return (
    <>
        <div>

            {
            items.map(
                (item)=>(
                    <h2 id={item.No}>{item.Ldr}</h2>
                )
            )


        }

        </div>


        <input value={Data} onChange={(e)=>setData(e.target.value)}/>
        <button onClick={()=>completeAddData()}>Add Data</button>
    </>
    )

}