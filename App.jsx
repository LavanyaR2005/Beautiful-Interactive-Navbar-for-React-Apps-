import React, { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Dashboard", "About"];

  return (
    <div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
