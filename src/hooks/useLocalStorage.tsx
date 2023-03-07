import { useEffect, useReducer } from "react";


enum ReducerEnum {
  ERROR,
  SUCCESS,
  ADDNEW,
  SINCRONIZE
}
interface IStateModel  {
  sincronizedItem:boolean,
  loading:boolean,
  error:boolean,
  itemList:any
}
interface IReducerAction {
  type:ReducerEnum,
  payload?:any
};

const initialState = <TValue,>(initialValue:TValue) => ({
  sincronizedItem:true,
  loading:true,
  error:false,
  itemList:initialValue
})

const reducer = (state:IStateModel, action:IReducerAction):IStateModel => {
  switch (action.type) {
    case ReducerEnum.ERROR:
      return {
				...state,
				error:true
			}
    case ReducerEnum.SUCCESS:
      return {
        ...state,
        loading: false,
        sincronizedItem: true,
        itemList:action.payload
      }
    case ReducerEnum.ADDNEW:
      return {
        ...state,
        itemList:action.payload
      };
    case ReducerEnum.SINCRONIZE:
        return {
        ...state,
        loading: true,
        sincronizedItem: false,
      };
    default:
      return {
				...state,
			}
  }
}

function useLocalStorage<TValue>(localName:string, initialValue:TValue) {
  const [state, dispatch] = useReducer(reducer, initialState<TValue>(initialValue));
  const {sincronizedItem, loading, error, itemList} = state

  // const [sincronizedItem, setSincronizedItem] = useState(true);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [itemList, setItemList] = useState<TValue>(initialValue);

  const onError = () => {dispatch({type: ReducerEnum.ERROR})}
  const onSuccess = (parsedItems:TValue) => {dispatch({type:ReducerEnum.SUCCESS, payload:parsedItems})}
  const onAddNew = (parsedItems:TValue) => {dispatch({type:ReducerEnum.ADDNEW, payload:parsedItems})}
  const onSincronize = () => {dispatch({type:ReducerEnum.SINCRONIZE})}

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

        // setItemList(parsedItems);
        // setLoading(false);
        // setSincronizedItem(true)
        onSuccess(parsedItems)
      } catch (error) {
        onError();
        console.log("An error ocurred: ", error)
      }
    }, 2000)
  }, [sincronizedItem])


  const saveItem = (itemList:TValue) => {
    try {
      onAddNew(itemList);
      // setItemList(itemList);
      localStorage.setItem(localName, JSON.stringify(itemList));
    } catch (error) {
      onError();
      console.log("An error ocurred: ", error)
    }
  }

  const sincronizeItems = () => {
    onSincronize();
    // setLoading(true);
    // setSincronizedItem(false)
  }

  return {itemList: itemList as TValue, saveItem, loading, error, sincronizeItems};
}

export {useLocalStorage};