import React, {useState} from "react"
function ToDo (){
    const [item,setItem] = useState("");
    const [task,setTask] = useState([]);
    const handleChange = (e)=>{
        console.log("handle change fn is called")
        setItem(e.target.value)
        // console.log(item)
        //React state controlls the input value via value attribute
    }
    const handleClick = ()=>{
        // here push returns a data type number of the lenght of current array
        // console.log(task.push(item));
        console.log("handleClick fun is called");
        var dummy = [...task]
        dummy.push(item)
        console.log(dummy)
        setTask(dummy);
        setItem("")
        // console.log(task)
    }
    const deleteTask = (idx)=>{
        console.log("deleteTask fun is called")
        var cloneTask = [...task];
        cloneTask.splice(idx,1);
        setTask(cloneTask)
    }
    return (
        <>
        <input
        //controlled component
        onChange={(e)=>{handleChange(e)}}
        value={item}
        type="text"
        />

        <button 
        onClick={()=>{handleClick()}}
        >
            Add Item
        </button>
        <ol>
            {
               task.map((item,idx)=>{
                return (
                    <div key={idx} style={{display:"flex", gap:"2px"}}>
                        <li>{item}</li>
                        <button
                        onClick={()=>{deleteTask(idx)}}
                        >Delete</button>
                    </div>
                )
            })
        }
        </ol>
        </>
    )
}

export default ToDo;