import { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello World!");

  const changeMessage = () => {
    setMessage("Welcome to React!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1> {/* Display the dynamic message */}
      <button
        onClick={changeMessage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
