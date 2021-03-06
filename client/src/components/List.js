import React from 'react';
import axios from 'axios';

const List = (props) => {
  const removeList = async () => {
    await axios.delete(`http://localhost:3001/api/v1/lists/${props.list.id}`)
    
    props.removeList(props.list.id)
  }

  return(
  <div className="single-list" key={props.list.id}>
    <h4>{props.list.title}</h4>
    <p>{props.list.excerpt}</p>
    <button onClick={removeList}>Erase</button>
    <button onClick={() => props.editingList(props.list.id)}>Edit</button>
  </div>
  )
};

export default List;
