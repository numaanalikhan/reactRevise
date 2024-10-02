import React,{useState}  from "react";

function ToDo (){
    var [item,setItem] = useState("");
    const handleChange = (e)=>{
        console.log("Handle Change Fun is called");
        // console.log(e.target.value);
        setItem(e.target.value);
    }
    var [task,setTask] = useState([]);
    const addTask = ()=>{
        //if we do task.push(item)// tehn it will return a number data type
        var cloneTask = [...task];
        cloneTask.push(item);
        setTask(cloneTask);
        console.log(task)
        setItem("");
    }
    const deleteTask = (idx)=>{
        console.log("deleteTask fun is called")
        var cloneTask = [...task];
        cloneTask.splice(idx,1);
        setTask(cloneTask);
        setItem("")
    }
    return(
        <>
        <h1>Todo Component</h1>
        <input
        //controlled::
        onChange={(e)=>{handleChange(e)}}
        placeholder="Enter your Task"
        value={item}
        />
        <button
        onClick={()=>{addTask()}}
        >Add Task</button>

        <ol>
            {
                task.map((ele,idx)=>{
                    return(
                    <div key={idx} style={{display:"flex", gap:"12px"}}>
                        <li>{ele}</li>
                        <button
                        onClick={()=>{deleteTask(idx)}}
                        >Delete Task</button>
                    </div>
                    )
                })
            }
        </ol>
        </>
    )
}

export default ToDo

// ask sir when we add ui is displyin latest element in the array but why it is not displayin in the console