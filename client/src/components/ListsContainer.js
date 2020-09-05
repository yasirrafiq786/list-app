import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';

const ListsContainer = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/lists.json')
      .then((response) => {
        console.log(response);
        setLists(response.data);
      })
      .catch((errors) => console.log(errors));
  }, []);

  

  return (
    <div className="list-container">
      {lists.map((list) => {
        return <List list={list} key={list.id} />;
      })}
      <NewListForm  />
    </div>
  );
};

export default ListsContainer;
