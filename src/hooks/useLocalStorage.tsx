import { useEffect, useState } from "react";


function useLocalStorage<TValue>(localName:string, initialValue:TValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [itemList, setItemList] = useState<TValue>(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(localName);
        let parsedItems:TValue = initialValue;

        if(!localStorageItem){
          localStorage.setItem(localName, JSON.stringify(parsedItems));
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }

        setItemList(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log("An error ocurred: ", error)
      }
    }, 1500)
  })


  const saveItem = (itemList:TValue) => {
    try {
      setItemList(itemList);
      localStorage.setItem(localName, JSON.stringify(itemList));
    } catch (error) {
      setError(true);
      console.log("An error ocurred: ", error)
    }
  }

  return {itemList, saveItem, loading, error};
}

export {useLocalStorage};