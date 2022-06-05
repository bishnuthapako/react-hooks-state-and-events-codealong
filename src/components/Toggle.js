import React, { useState } from "react";
// import { useState } from "react/cjs/react.production.min";

function Toggle() {

  let [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn)=>!isOn)

  }

  const color = isOn ? "red": "white";

  return <button style={{background: color}} onClick={handleClick}>{isOn? "ON": "OFF"}</button>;
}

export default Toggle;
