import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';
import { TodoContextModel } from '../../models/TodoContextModel';


function TodoSearch() {
  const {setSearchVal, searchVal} = useContext(TodoContext) as TodoContextModel;

  const onSearchInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSearchVal(val);
  }

  return (
    <input className="TodoSearch" placeholder="PlaceHolder"
      value={searchVal}
      onChange={onSearchInputChange}
    />
  );
}

export { TodoSearch };