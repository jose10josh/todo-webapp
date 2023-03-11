import { HashRouter, Routes, Route } from "react-router-dom";
import { EditTodoPage } from "./Pages/EditTodoPage";
import { HomePage } from "./Pages/HomePage";
import { NewTodoPage } from "./Pages/NewTodoPage";

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
        
      </Routes>
    </HashRouter>
  )
}

export {App};
