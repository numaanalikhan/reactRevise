import React from "react";

export function Header(){
    return(
        <>
        <div style={{display:"flex", gap:"20px", justifyContent:"center", width:"auto",height:"20px", border:"2px solid black", padding:"5px", backgroundColor:"black", color:"white", font:"2xl", text:"bold"}}>
            <a>Home</a>
            <a>Food</a>
            <a>Food Items</a>
        </div>
        </>
    )
}


