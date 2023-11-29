import { useState, useEffect } from "react";
import ScrollBar from "./components/ScrollBar";
import SelectedOption from "./components/SelectedOption";
import GeneratePass from "./components/GeneratePass";
import ShowPass from "./components/ShowPass";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";

function App() {
  const [length, setLength] = useState(8);
  const [Symbol, setSymbol] = useState(true);
  const [Alpha, setAlpha] = useState(true);
  const [Number, setNumber] = useState(true);
  const [password, setPassword] = useState("");

  // to handle the change in the ScrollBar
  const handleChange = (e) => {
    const value = e.target.value;
    if (value > 40) {
      setLength(40);
    } else {
      setLength(value);
    }
  };

  // to handle the change in options
  const changeOption = (option) => {
    switch (option) {
      case "Symbol":
        setSymbol(!Symbol);
        break;
      case "Alpha":
        setAlpha(!Alpha);
        break;
      case "Number":
        setNumber(!Number);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-slate-900">
      
       
        <span
          className="flex items-center text-white sm:text-md md:text-lg lg:text-xl font-bold super:hidden"
        >
          <h1 className="mr-4">Generate your password :- </h1>
          <Typewriter
            options={{
              strings: ["Strong", "reliable", "secure", "unbreakable"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
              className: " font-serif uppercase",
            }}
          />
        </span>

        <motion.div
          className="mt-10 bg-white/30 p-4 backdrop-blur-xl rounded-xl shadow-xl shadow-purple-800 sm:w-full md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[500px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <label className="text font-semibold font-serif">
            Password length is:-
            <input
              type="number"
              value={length}
              onChange={handleChange}
              className="w-[60px] p-2 border-b border-gray-300 mb-4 ml-2 bg-transparent text-center font-semibold font-serif border-none outline-none
            focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            />
          </label>

          {/* ScrollBar component */}
          <ScrollBar length={length} handleChange={handleChange} />

          <SelectedOption
            Symbol={Symbol}
            Alpha={Alpha}
            Number={Number}
            changeOption={changeOption}
          />

          <GeneratePass
            setPassword={setPassword}
            length={length}
            includeSymbols={Symbol}
            includeNumbers={Number}
            includeAlphabets={Alpha}
          />

          <ShowPass password={password} length={length} />
        </motion.div>
      </main>
    </>
  );
}

export default App;