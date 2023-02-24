import { useState } from "react";


function useLocalStorage<TValue>(localName:string, initialValue:TValue):[TValue, React.Dispatch<React.SetStateAction<TValue>>, (itemList: TValue) => void] {
  const localStorageItem = localStorage.getItem(localName);
  let parsedItems:TValue = initialValue;

  if(!localStorageItem){
    localStorage.setItem(localName, JSON.stringify(parsedItems));
  } else {
    parsedItems = JSON.parse(localStorageItem);
  }

  const [itemList, setItemList] = useState<TValue>(parsedItems);

  const saveItem = (itemList:TValue) => {
    setItemList(itemList);
    localStorage.setItem(localName, JSON.stringify(itemList));
  }

  return [itemList, setItemList, saveItem];
}

export {useLocalStorage};