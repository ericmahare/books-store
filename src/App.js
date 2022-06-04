import Books from "./components/Books";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={ <Categories/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
