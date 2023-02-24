import React from 'react';
import './TodoSearch.css';

type TodoSearchProps = {
  searchVal: string,
  setSearchVal: React.Dispatch<React.SetStateAction<string>>
}
function TodoSearch({searchVal, setSearchVal}:TodoSearchProps) {

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