import Child from "./Child";
import { useRef, useEffect, useState } from "react";
export default function App() {
  let inputRef = useRef(null);
  let renderCount = useRef(1);
  let [name, setName] = useState("");
  useEffect(() => {
    renderCount.current += 1;
  });
  const foo = () => {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "green";

    if (!inputRef.current.value) inputRef.current.focus();
    else alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <h1>Welcomeback Alien</h1>
      <Child ref={inputRef} color="blue" name={name} setName={setName} />
      <button onClick={foo}>click</button>
      <div>Rendered{renderCount.current}times</div>
    </div>
  );
}
