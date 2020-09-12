import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';
import _ from 'lodash';
import EditListForm from './EditListForm';

const ListsContainer = () => {
  const [lists, setLists] = useState([]);
  const [editingListId, setEditingListId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        'http://localhost:3001/api/v1/lists.json'
      );
      setLists(response.data);
    };
    fetchItems();
  }, []);

  const addList = (newList) => {
    const updatedLists = [newList, ...lists];
    setLists(updatedLists);
  };

  const removeList = (id) => {
    const updatedLists = _.reject(lists, function (list) {
      return list.id === id;
    });
    setLists(updatedLists);
  };

  const editList = (title, excerpt, id) => {
    console.log('passed');
  };

  const editingList = (id) => {
    setEditingListId(id);
  };

  return (
    <div className="list-container">
      {lists.map((list) => {
        if (list.id === editingListId) {
          return (
            <List
              list={list}
              removeList={removeList}
              key={list.id}
              editingList={editingList}
            />
          );
        } else
          return <EditListForm key={list.id} list={list} editList={editList} />;
      })}
      <NewListForm addList={addList} />
    </div>
  );
};

export default ListsContainer;
