import React, {useEffect, useState} from "react";
const ClockWithHooks1=()=>
{
    const  [date,setDate]=useState(new Date());
    const tick=()=>{
        setDate(new Date());
    };
    //similar to componentDidMount and componentDidUpdate;
    useEffect(()=>{
        //update the document title using the brower API
        const timerID=setInterval(()=>tick(),1000);
        // Specify how to clean up after this useEffect;
        return()=>clearInterval(timerID);
    }); 
    return (<div><h2>It is {date.toLocaleTimeString()}.</h2></div>)
}

export default ClockWithHooks1;