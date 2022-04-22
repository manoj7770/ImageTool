import React, { useState } from "react";
import "../DragAndDrop/DragAndDrop.css";
import Size from "../Size/Size";

const DragAndDrop = () => {
  const [draggable, setDraggable] = useState([
    {
      src: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "ReactJs",
    },
    {
      src: "https://images.unsplash.com/photo-1638125158066-b3e9234b2615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      name: "F1",
    },
    {
      src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "JavaScript",
    },
    {
      src: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406&q=80",
      name: "AquariumBataFish",
    },
    {
      src: "https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "mounatin",
    },
    {
      src: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80",
      name: "JSX",
    },
  ]);
  const [droppable, setDroppable] = useState([]);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData("id");
    let currentData = draggable.find((item) => item.name == id);
    let newDropable = [...droppable].concat(currentData);
    setDraggable(draggable.filter((item) => item.name != id));
    console.log(currentData, newDropable);
    setDroppable(newDropable);
  };

  return (
    <div>
      <h1>Drag and Drop</h1>
      <div className="container">
        <div className="left-container">
          <h2>Images</h2>
          <div id="dragLocation">
            {draggable.map((index) => (
              <img
                src={index.src}
                key={index.src}
                alt="Image"
                draggable="true"
                onDragStart={(e) => onDragStart(e, index.name)}
              />
            ))}
          </div>
        </div>

        <div
          id="dropLocation"
          className="right-container"
          onDragOver={(e) => {
            onDragOver(e);
          }}
          onDrop={(e) => {
            onDrop(e, "dropLocation");
          }}
        >
          <h2>Drag the Images Here</h2>
          {droppable.map((index) => (
            <Size
              src={index.src}
              key={index.src}
              alt="Image"
              style={{ width: "100%", height: "100%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
