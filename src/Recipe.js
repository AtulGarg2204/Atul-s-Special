import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  let { id } = useParams();
  id = id - 1;

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const result = await res.json();
    console.log(result.recipes);
    setData(result.recipes);
  };

  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 55, marginBottom: 30, fontSize: 35 }}>
        {data && data[id].name}
      </h1>
      <img
        src={data && data[id].image}
        alt="fimg"
        style={{
          height: 250,
          width: 250,
          display: "block",
          margin: "auto",
          borderRadius: "50%",
        }}
      />
      <div className="features">
        <p>⏰ {data && data[id].cookTimeMinutes + data[id].prepTimeMinutes} min</p>
        <p>🍳 {data && data[id].servings} servings</p>
        <p>🍲 {data && data[id].mealType[0]}</p>
        <p>🎯 {data && data[id].difficulty}</p>
        <p>{data && data[id].rating} ⭐</p>
      </div>
      <h1 style={{ fontSize: 27, marginTop: 50, paddingLeft: 20 }}>Ingredients Required</h1>
      <div
        className="ingredients"
        style={{
          margin: "auto",
          marginTop: 30,
          display: "flex",
          flexWrap: "wrap",
          gap: 35,
          fontSize: 20,
          marginLeft: 20,
        }}
      >
        {data &&
          data[id].ingredients.map((val, index) => (
            <div key={index} className="ingredient">
              {val}
            </div>
          ))}
      </div>
      <h1 style={{ fontSize: 28, marginTop: 40, paddingLeft: 20, marginBottom: 20 }}>
        Instructions
      </h1>
      <div style={{ paddingBottom: 20, paddingRight:10, }}>
        {data &&
          data[id].instructions.map((val, index) => (
            <div key={index} style={{ paddingLeft: 20, fontSize: 21, marginBottom: 20 }}>
              {index + 1}. {val}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Recipe;
