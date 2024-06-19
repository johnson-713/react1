import "./App.css";
import Component from "./Component";
import Hi from "./Hi";
import { New } from "./New";
import { useEffect, useMemo, useState } from "react";
import { title } from "./data";
import { Box } from "./Box";
import { Card } from "./Card";

function App() {
  // const [title, setTitle] = useState("Hello All!!!");
  const [count, setCount] = useState(0);
  const [isCountAbove5, setIsCountAbove5] = useState(false);
  const [data, setData] = useState({})

  // const updateState = () => {
  //   setTitle("Hello World!!!");
  // };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }

  const updateCount = () => {
    setCount(count + 1);
  };

  const cardData = useMemo(() => {
    return [
      {
          img: '/images/image1.jpg',
          text: 'Golf clubs',
          id: 0,
      },
      {
          img: '/images/image2.jpg',
          text: 'Golf Balls',
          id: 1,
      },
      {
          img: '/images/image3.jpg',
          text: '',
          id: 2,
      },
      {
          img: '/images/image4.jpg',
          text: '',
          id: 3,
      },
      {
          img: '/images/image5.jpg',
          text: '',
          id: 4,
      },
  ]
  }, [])

  useEffect(() => {
    if (data.first_name !== undefined) {
      setIsCountAbove5(true);
    }
  }, [data]);

  return (
    <>
      {isCountAbove5 ? (
        <button>Update state</button>
      ) : (
        <button onClick={() => updateCount()}>Update Count</button>
      )}
      <Hi title={title} />
      {isCountAbove5 ? null : <New count={count} />}
      <Component text={title} />
      <Box>
        <h1>Hello</h1>
      </Box>

      <Box>
        <h3>Hello all</h3>
      </Box>

      <div className="input-container">
        <label>First Name*</label>
        <input type="text" name="first_name" onChange={(e) => handleChange(e)} />
      </div>

      <div className="input-container">
        <label>Last Name*</label>
        <input type="text" name="last_name" onChange={(e) => handleChange(e)} />
      </div>

      <div className="input-container">
        <label>Email*</label>
        <input type="email" name="email" onChange={(e) => handleChange(e)} />
      </div>

      <div className="cards">
        {cardData.map((item) => (
          <Card key={item.id} img={item.img} text={item.text} />
        ))}
      </div>
    </>
  );
}

export default App;
