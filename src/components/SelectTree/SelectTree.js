import React, { useState, useRef, useEffect } from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select';

// Styles
import '../../../node_modules/react-dropdown-tree-select/dist/styles.css';
import './index.css';

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach((k) => {
    const node = obj[k];
    if (typeof node === 'object') {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

const SelectTree = (props) => {
  const { data, handleCatSelection } = props;

  const [selectedOption, setSelectedOption] = useState(null);

  const dropdown = useRef(null);

  assignObjectPaths(data);

  const handleChange = (currentNode, selectedNodes) => {
    console.log('label::', currentNode.label);
    setSelectedOption(currentNode.label);
  };

  useEffect(() => {
    handleCatSelection(selectedOption);
  }, [selectedOption, handleCatSelection]);

  return (
    <DropdownTreeSelect
      ref={dropdown}
      data={data}
      onChange={handleChange}
      className='mdl-demo'
      texts={{
        placeholder: selectedOption !== null ? selectedOption : 'Category',
      }}
    />
  );
};

export default SelectTree;
