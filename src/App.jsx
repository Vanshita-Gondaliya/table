import Home from "./Components/Home";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [photos, setPhotos] = useState([])

  const handleCallFunction = (name) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log("hello photo", data);
        setPhotos(data);
      });
  };

  useEffect(() => {
    handleCallFunction("vanshita");
  }, [])

  console.log("photos are", photos)
  return (
    <>
      <Home photos={photos} />
    </>
  );
}

export default App;
