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
  });

  return <div className="ListsContainer">Lists</div>;
};

export default ListsContainer;
