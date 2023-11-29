import React, { useState } from "react";
import { motion } from "framer-motion";

function ShowPass({ password, length, setPassword }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copyToClipboard = () => {
    const passwordInput = document.getElementById("passwordInput");

    if (passwordInput) {
      if (password) {
        navigator.clipboard.writeText(password);
        setCopied(true);
      } else {
        setCopyError(true);
        setTimeout(() => {
          setCopyError(false);
        }, 1000); // Reset error state after 1 second
      }

      setTimeout(() => {
        setCopied(false);
      }, 1000); // Reset copied state after 1 second
    }
  };



  return (
    <div>
      <input
        placeholder={`Set the Length: ${length}`}
        id="passwordInput"
        type="text"
         value={password}
      
     
        className={`${
          copied ? "border-green-700" : copyError ? "border-red-500" : "border-blue-500"
        } border px-2 py-4 mb-2 text-black w-full p-10`}
      />

      <div className=" flex justify-center items-center">
        <motion.button
          className={`${copied ? "bg-[#191970]" : copyError ? "bg-red-600" : "bg-blue-600"} text-white px-4 py-2 rounded-md w-[100px] flex justify-center items-center`}
          onClick={copyToClipboard}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: password ? 0 : [0, -10, 10, -10, 10, 0],
            scale: password ? 1 : [1, 1.2, 1],
          }}
        >
          {copied ? "Copied!" : copyError ? "Empty!" : "Copy"}
        </motion.button>
      </div>
    </div>
  );
}

export default ShowPass;
