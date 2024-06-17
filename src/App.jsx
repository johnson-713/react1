import "./App.css";
import Hi from "./Hi";
import { New } from "./New";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("Hello All!!!");
  const [count, setCount] = useState(0)
  const [isCountAbove5, setIsCountAbove5] = useState(false)

  const updateState = () => {
    setTitle("Hello World!!!");
  };

  const updateCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    if(count > 5) {
      setIsCountAbove5(true)
    }
  }, [count])


  return (
    <>
      {
        isCountAbove5 ? (<button onClick={() => updateState()}>Update state</button>
        ) : (<button onClick={() => updateCount()}>Update Count</button>)
      }
      <Hi title={title} />
      {
        isCountAbove5 ? null : <New count={count} />
      }
    </>
  );
}

export default App;
