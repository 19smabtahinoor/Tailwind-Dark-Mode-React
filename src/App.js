import React from 'react';
import { useState } from 'react';
function App() {
  const [mode,setMode] = useState(false)

  const handleClick = () => {
    setMode(!mode)
  }



  return (
    <div className="dark flex justify-center flex-col items-center my-4">
      <button className="bg-blue-800 px-5 py-3 text-white rounded-lg" onClick={handleClick}>Toggle Dark Mode</button>
      <div className={mode ? "dark:bg-gray-800 my-5 w-96 rounded-lg p-6 shadow-xl transition duration-700" : "bg-gray-100 shadow-xl  my-5 w-96 rounded-lg p-6 transition duration-700"}>
        <h1 className={mode ? "dark:text-white text-3xl transition duration-700" : "text-gray-700 text-3xl transition duration-700"}>Tailwind Css</h1>
        <p className={mode ? "dark:text-gray-400 transition duration-700" : "text-gray-600 transition duration-700"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur id enim voluptatum numquam itaque corrupti esse explicabo ad sint!</p>
      </div>
    </div>
  );
}

export default App;
