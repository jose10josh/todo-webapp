import React from 'react';
import './TodoSearch.css';


type TodoSearchModel = {
  setSearchVal:React.Dispatch<React.SetStateAction<string>>,
  searchVal:string,
  loading?:boolean,
}
function TodoSearch({setSearchVal, searchVal, loading}:TodoSearchModel) {

  const onSearchInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSearchVal(val);
  }

  return (
    <input
      className="TodoSearch"
      placeholder="My new to-do"
      value={searchVal}
      onChange={onSearchInputChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };