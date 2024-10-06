import React, { useEffect,useState } from "react"
import ToDo from "./Components/ToDo"
import Food from "./Components/Food";
import axios from "axios";
import Slide from "./Components/Slide";

function App(){
var [users,setUsers] =useState([]) 
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    setUsers(res.data);
  })
},[])

  return(
    <>
    <Slide/>
    <h1>App Component</h1>
    <ToDo/>
    <Food/>
    <ol>
      <h2>Users List</h2>
      {
      users.map((user,id)=>{
      return(
        <div key={"idx"}>
          <li>{user.username}</li>
        </div>
      ) 
      })
    }</ol>
    </>

  )
}

export default App;