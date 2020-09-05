import React, {useState, useEffect} from 'react';
import axios from 'axios';
import setAxiosHeader from './setAxiosHeader';

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
        return (
          <div className="single-list" key={list.id}>
            <h4>{list.title}</h4>
            <p>{list.excerpt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListsContainer;
