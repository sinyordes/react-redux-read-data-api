import {useSelector} from "react-redux";

import {useDispatch} from "react-redux"; ///add data

import {addData ,dataDownload} from "../redux/other/slice";
import {useEffect, useState} from "react"; // slice action
import {nanoid} from "@reduxjs/toolkit";

export default function Main(){

    const items = useSelector(state=>state.veriAl.data)
    console.log(items)


    const disp=useDispatch()
    const refresh=()=>{
        disp(dataDownload())
    }



    return(

        <div className="container">
            <p className="icon"><i className="wi wi-cloudy"/></p>
            <p className="other">Sıcaklık Takip Sistemi</p><br></br>
            <div className="temp">
                {items.map((item)=>(<p className="num" id={item.No}>{item.Ldr}</p>))}<br></br>
                <p className="units">°C</p><br></br>
            </div>
            <p className="location">Son Ölçüm Zamanı : </p><br></br>
            {items.map((item)=>(<p className="" id={item.No}>{item.Date}</p>))}<br></br>
            {items.map((item)=>(<p className="" id={item.No}>{item.Time}</p>))}<br></br>
            <button onClick={()=>refresh()}>Yenile</button>
        </div>
    )
}