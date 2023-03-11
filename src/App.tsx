import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<p>Not Found</p>} />
        
      </Routes>
    </HashRouter>
  )
}

export {App};
