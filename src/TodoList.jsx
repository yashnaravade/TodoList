import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import ListUpdate from "./ListUpdate";
import "./todolist.css";

const TodoList = () => {
    const[item, setItem] = useState("");
    const[list, setList] = useState([]);

const itemEve = (event) => {
    setItem(event.target.value)
}

const clicker = () =>{
    setList((prevalue) => { return [...prevalue,item];})

    setItem("")
}

  return (
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <input type="text" value={item} placeholder="Add your task" onChange={itemEve}/>
            <button className="newBtn" onClick={clicker}><AddIcon/></button>
            <br/>
            <ol>
                {list.map((val, index) =>{
                    return <li><ListUpdate text={val} key={index}/></li>;
                })}
            </ol>
        </div>
    </div>
  )
}

export default TodoList
