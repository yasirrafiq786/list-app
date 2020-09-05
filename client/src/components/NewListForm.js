import React, {useRef} from 'react';
import axios from 'axios';

const NewListForm = (props) => {
  const titleRef = useRef();
  const excerptRef = useRef();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await axios
      .post('http://localhost:3001/api/v1/lists', {
        list: {
          title: titleRef.current.value,
          excerpt: excerptRef.current.value,
        },
      })
      const newList = response.data
      props.addList(newList)
      titleRef.current.value = '';
      excerptRef.current.value = '';
      titleRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleRef} type="text" placeholder="Title" required />
      <input ref={excerptRef} type="text" placeholder="Excerpt" required />
      <button>Add List</button>
    </form>
  );
};

export default NewListForm;
