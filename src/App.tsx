import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="" element={<></>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
