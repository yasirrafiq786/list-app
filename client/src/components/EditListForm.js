import React, {useState} from 'react';
import axios from 'axios';

const EditListForm = () => {
  const [title, setTitle] = useState(props.list.title);
  const [excerpt, setExcerpt] = useState(props.list.excerpt);
  const id = props.list.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3001/api/v1/lists/${id}`, {
      list: {
        title,
        excerpt,
      },
    });
    props.editList(id, title, excerpt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="excerpt"
        type="text"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />
      <button>Update List</button>
    </form>
  );
};

export default EditListForm;
