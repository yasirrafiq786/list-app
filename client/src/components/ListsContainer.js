import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';

const ListsContainer = () => {
  const [lists, setLists] = useState([]);

  useEffect( () => {
    const fetchItems = async () => {
    const response = await axios.get('http://localhost:3001/api/v1/lists.json');
    setLists(response.data);
  };
  fetchItems();
 } ,[lists]);

  const addList = (newList) => {
    const updatedLists = [newList, ...lists];
    setLists(updatedLists);
  };

  const removeList = () => {
    
  }

  return (
    <div className="list-container">
      {lists.map((list) => {
        return <List list={list} removeList={removeList} key={list.id} />;
      })}
      <NewListForm addList={addList} />
    </div>
  );
};

export default ListsContainer;
