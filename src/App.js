import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./components/Nav";
import './App.css';

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [showSidebar, setShowSidebar] = useState(false);

  const fetchdata = async () => {
    const res = await fetch('https://dummyjson.com/recipes');
    const result = await res.json();
    setData(result.recipes);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const runeasy = () => {
    let item = document.getElementById('easyitems');
    item?.classList.toggle('toggle');
  };

  const runmedium = () => {
    let item = document.getElementById('mediumitems');
    item?.classList.toggle('toggle');
  };

  const easyitems = data?.map(({ name, id, difficulty }) => (
    difficulty === "Easy" && (
      <div key={id} className="recipe-item">
        <NavLink className="links" to={`recipe/${id}`}>{name}</NavLink>
      </div>
    )
  ));

  const mediumitems = data?.map(({ name, id, difficulty }) => (
    difficulty === "Medium" && (
      <div key={id} className="recipe-item">
        <NavLink className="links" to={`recipe/${id}`}>{name}</NavLink>
      </div>
    )
  ));

  return (
    <div className="app-container">
      <Nav />
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="App">
        <div className={`topics ${showSidebar ? "show" : ""}`}>
          <h1>Recipes</h1>
          <div className="content">
            <h2 id="easy" onClick={runeasy}>
              Easy Level Recipes
            </h2>
            <div id="easyitems">
              {easyitems}
            </div>
            <h2 id="medium" onClick={runmedium}>
              Medium Level Recipes
            </h2>
            <div id="mediumitems">
              {mediumitems}
            </div>
          </div>
        </div>
        <div className="topic-details">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
