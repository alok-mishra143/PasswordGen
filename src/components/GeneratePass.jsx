import React, { useState } from 'react';
import { motion } from 'framer-motion';

function GeneratePass({ setPassword, length, includeSymbols, includeNumbers, includeAlphabets }) {
  const [click, setClick] = useState(false);

  const generatePassword = () => {
    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 1000);

    let charset = '';

    if (includeAlphabets) {
      // Include uppercase and lowercase letters
      charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (includeNumbers) {
      // Include numbers
      charset += '0123456789';
    }

    if (includeSymbols) {
      // Include symbols
      charset += '!@#$%^&*()_+';
    }

    // Check if at least one character set is selected, otherwise default to all characters
    if (!charset) {
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    }

    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const buttonVariants = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
    completed: { scale: 1, backgroundColor: '#191970' },
  };

  return (
    <div>
      <motion.button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        variants={buttonVariants}
        initial="initial"
        animate={click ? 'completed' : 'animate'}
        onClick={generatePassword}
      >
        {click ? 'Completed' : 'Generate Password'}
      </motion.button>
    </div>
  );
}

export default GeneratePass;
