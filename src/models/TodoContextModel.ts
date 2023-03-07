import { TodoItemModel } from "./TodoItemModel";

export interface TodoContextModel {
  states: TodoContextStates,
  statesUpdaters: TodoContextUpdaters
}

export interface TodoContextStates {
  completedTodos:number,
  totalTodos:number,
  searchedTodos:TodoItemModel[],
  loading:boolean,
  error:boolean,
  searchVal:string,
  openModal:boolean,

}
export interface TodoContextUpdaters {
  setSearchVal:React.Dispatch<React.SetStateAction<string>>,
  onCompleteTodo:(id: number, completed: boolean) => void,
  onDeleteTodo:(id: number) => void,
  addTodo:(newTodo: string) => void,
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>,
  sincronizeTodos:React.Dispatch<React.SetStateAction<boolean>>,
}