import React, { useState } from "react";

const calculateStrength = (length, hasAlpha, hasNumber, hasSymbol) => {
  // Check if the password is strong (length >= 12 and contains alphabets, numbers, and symbols)
  if (length >= 12 && hasAlpha && hasNumber && hasSymbol) {
    return "Strong";
  }
  else if(length >= 6 && length<=12 && hasAlpha && hasNumber && !hasSymbol){
    return "Moderate";
  }
  else if(length >= 6 && length<=12 && hasAlpha && !hasNumber && hasSymbol){
    return "Moderate";
  }
  else if(length >= 6 && length<=12 && !hasAlpha && hasNumber && hasSymbol){
    return "Moderate";
  }
  else if(length >= 12 && length<=20 && hasAlpha && !hasNumber && !hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && hasNumber && !hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && !hasNumber && hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && !hasNumber && !hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && hasAlpha && hasNumber && hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && hasAlpha && hasNumber && !hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && hasAlpha && !hasNumber && hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && hasNumber && hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && hasAlpha && !hasNumber && !hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && hasNumber && !hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && !hasNumber && hasSymbol){
    return "Weak";
  }
  else if(length >= 12 && length<=20 && !hasAlpha && !hasNumber && !hasSymbol){
    return "Weak";
  }
  else{
    return "very weak";
  }

};

const Seekbar = ({ length, Alpha, Number, Symbol }) => {
  const [passwordStrength, setPasswordStrength] = useState("");

  // Calculate the password strength whenever the length, alphabets, numbers, or symbols change
  useState(() => {
    setPasswordStrength(
      calculateStrength(length, Alpha, Number, Symbol)
    );
  }, [length, Alpha, Number, Symbol]);

  const getIndicatorColor = () => {
    switch (passwordStrength) {
      case "Strong":
        return "text-green-500";
      case "Moderate":
        return "text-yellow-500";
      case "Weak":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div>
     
      <div className={`password-strength-indicator ${getIndicatorColor()}`}>
        Password Strength: {passwordStrength}

        {console.log(passwordStrength,Alpha,Number,Symbol,length)}
      </div>
    </div>
  );
};

export default Seekbar;
