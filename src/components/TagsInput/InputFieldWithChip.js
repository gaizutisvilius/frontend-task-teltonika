import React from 'react';

// Custom components
import TagsInput from './TagsInput';

const InputFieldWithChip = (props) => {
  const { id, name, placeholder, label, setItems } = props;

  const handleSelecetedTags = (items) => {
    // console.log(items);
    setItems(items);
  };

  return (
    <div className='App'>
      <TagsInput
        selectedTags={handleSelecetedTags}
        fullWidth
        variant='outlined'
        id={id}
        name={name}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
};

export default InputFieldWithChip;
