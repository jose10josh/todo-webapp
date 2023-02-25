import React from "react";
import { TodoContextModel } from "../models/TodoContextModel";

const TodoContext = React.createContext<TodoContextModel|null>(null);

export {TodoContext};