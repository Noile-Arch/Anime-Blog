import "./App.css";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewBlog from "./pages/NewBlog";
import Blog from "./pages/Blog";
function App() {
  return (
    <Router>
      <main className=" h-auto text-black w-[full]">
        <Nav />
        <div className="">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/newblog"element={<NewBlog/>}/>
            <Route path="/blog/:id"element={<Blog/>}/>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
