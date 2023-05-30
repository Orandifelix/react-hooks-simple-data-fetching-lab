
import React, { useState, useEffect } from "react";

export default function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
     setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return <img src={dogImage} alt="A Random Dog" />;
  }
}