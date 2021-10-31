import React, { useEffect, useState } from "react";
import ClassGrid from "./ClassGrid";
import AppNavBar from "./NavBar";
import { getClassesData } from "../../actions/user.service";

export default function Classroom() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function handleItemChange(data) {
      setItems(data);
    }

    getItems(handleItemChange);
    return () => removeItems(handleItemChange);
  }, []);

  return (
    <div>
      <AppNavBar handlePost={({ _id, className, section }) => setItems([...items, { _id, className, section }])} />
      <ClassGrid classes={items} />
    </div>
  );
}

function getItems(handler) {
  getClassesData().then((res) => {
    handler(res.data.data);
  });
}

function removeItems(handler) {
  handler(undefined);
}
