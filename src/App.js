import { useState } from "react";
import Content from "./Content";
import Timer from "./Timer";
import Avatar from "./Avatar";
import UseLayoutEffect from "./UseLayoutEffect";
import Clock from "./Clock";
function App() {
  const [toggle, setToggle] = useState(false);
  const [toggleTime, setToggleTime] = useState(false);
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [toggleUseLayoutEffect, setToggleUseLayoutEffect] =useState(false)
  const [toggleClock, setToggleClock] =useState(false)
  const handleToggleContent = () => {
    setToggle(!toggle);
  };
  const handleToggleTime = () => {
    setToggleTime(!toggleTime);
  };
  const handleToggleAvatar = ()=>{
    setToggleAvatar(!toggleAvatar)
  }
  return (
    <div className="App" style={{ padding: 10 }}>
      <button onClick={handleToggleContent}>Toggle</button>
      {toggle && <Content />}
      <button onClick={handleToggleTime}>Count down</button>
      {toggleTime && <Timer/>}
      <button onClick={handleToggleAvatar}>Toggle Avartar</button>
      {toggleAvatar && <Avatar/>}
      <button onClick={()=>setToggleUseLayoutEffect(!toggleUseLayoutEffect)}>Toggle UseLayoutEffect</button>
      {toggleUseLayoutEffect && <UseLayoutEffect/>}
      <button onClick={()=>setToggleClock(!toggleClock)}>Toggle Clock use useRef</button>
      {toggleClock && <Clock/>}
    </div>
  );
}

export default App;
