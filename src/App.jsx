import { useState } from "react";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";

function App() {
  const [panel, setPanel] = useState("registration");
  function handleClick() {
    if (panel == "registration") {
      setPanel("authorization");
    } else setPanel("registration");
  }
  return (
    <>
      {panel == "registration" ? (
        <Registration handleClick={handleClick} />
      ) : (
        <Authorization handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
