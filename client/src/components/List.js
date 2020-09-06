import React from 'react';
import axios from 'axios';

const List = ({list}) => {
  const removeList = async () => {
    await axios.delete(`http://localhost:3001/api/v1/lists/${list.id}`)
    
    props.removeList(list.id)
  }

  return(
  <div className="single-list" key={list.id}>
    <h4>{list.title}</h4>
    <p>{list.excerpt}</p>
    <button onClick={removeList} >Erase</button>
  </div>
  )
};

export default List;
