import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import EditPage from "./pages/EditPage"
import SinglePage from "./pages/SinglePage";
import Create from "./pages/Create";
import Edit from "./pages/EditPage";
import LearningUseState from "./components/LearningUseState";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="bg-red-600 text-white p-4 rounded-xs"><h1>This is index page.</h1></div>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/edit" element={<EditPage/>} />
          <Route path="/single" element={<SinglePage/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit" element={<EditPage/>} />
          <Route path="/learning" element={<LearningUseState/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;