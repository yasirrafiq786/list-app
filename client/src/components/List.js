import React from 'react';
import axios from 'axios';

const List = (props) => {
  const removeList = async () => {
    const response = await axios.delete(`http://localhost:3001/api/v1/lists/${props.list.id}`)
    const removedList = response.data
    props.removeList(removedList)
  }

  return(
  <div className="single-list" key={props.list.id}>
    <h4>{props.list.title}</h4>
    <p>{props.list.excerpt}</p>
    <button onClick={() => removeList} >Erase</button>
  </div>
  )
};

export default List;
