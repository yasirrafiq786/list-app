import React from 'react';
import axios from 'axios';

const EditListForm = () => {
  return (
    <form>
      <input name="title" type="text" />
      <input name="excerpt" type="text" />
      <button>Update List</button>
    </form>
  );
};

export default EditListForm;
