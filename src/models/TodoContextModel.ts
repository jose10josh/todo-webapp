import { TodoItemModel } from "./TodoItemModel";

export interface TodoContextModel {
  completedTodos:number,
  totalTodos:number,
  searchedTodos:TodoItemModel[],
  loading:boolean,
  error:boolean,

  searchVal:string,
  setSearchVal:React.Dispatch<React.SetStateAction<string>>,

  onCompleteTodo:(id: number, completed: boolean) => void,
  onDeleteTodo:(id: number) => void,

  openModal:boolean,
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>,
}