import React, {useState} from 'react';
import axios from 'axios';

const EditListForm = (props) => {
  const [title, setTitle] = useState(props.list.title);
  const [excerpt, setExcerpt] = useState(props.list.excerpt);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .patch(`http://localhost:3001/api/v1/lists/${props.list.id}`, {
        list: {
          title,
          excerpt,
        },
      })
    const updatedList = response.data
    props.editList(updatedList);
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
