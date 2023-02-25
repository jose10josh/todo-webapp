import { TodoItemModel } from "./TodoItemModel";

export interface TodoContextModel {
  completedTodos:number,
  totalTodos:number,
  searchVal:string,
  searchedTodos:TodoItemModel[],
  loading:boolean,
  error:boolean,
  setSearchVal:React.Dispatch<React.SetStateAction<string>>,
  onCompleteTodo:(id: number, completed: boolean) => void,
  onDeleteTodo:(id: number) => void,
}