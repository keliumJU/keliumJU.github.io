import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-white shadow mb-4">
        <Link to="/">Home</Link>
      </nav>
      <h1 className="text-3xl font-bold underline">
        <span className="bg-blue-500">Kelium J.U</span> Manifesto
      </h1>
      <div className="rounded-2xl bg-amber-500 font-bold text-white p-3">
        <p className="text-5xl text-pretty mb-5">
          For along time i was running away of competitive programming(CP), i
          think that this is a very important thing that i need to do, and
          practice conscientiously, i need to do this for my carrer. Every day
          for all day or almost all days i want to practice for 1 hour minimun
          CP or leetcode, i want to begin with neetcode guides and after move
          with CP, i want to love solve problems or try to solve problems, and
          maybe i can improve some my english level(prayer).
        </p>
        <div className="flex flex-col gap-y-3">
          <span className="italic text-4xl bg-amber-700">
            That is all, folks, bye fish
          </span>
          <span className="italic text-4xl bg-green-500">
            Note: I want to put all my days resume here(problems related) so
            tomorrow i can setup a markdown blog
          </span>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
