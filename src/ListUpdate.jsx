import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import "./todolist.css"

const ListUpdate = (props) => {
  const [line, setLine] = React.useState(false);

  const cutOut = () => {

    setLine(true);

  };

  return (
    <div className='todo_style'>
      <span onClick={cutOut}>
        <DeleteIcon className='deleteIcon'/>
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
        </li>

    </div>
  )
}

export default ListUpdate
