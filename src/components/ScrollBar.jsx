import React from 'react'

function ScrollBar({length , handleChange}) {
  return (
    <div>
      {/* <label>Password length: {length}</label> */}
      <input
        type="range"
        min="0"
        max="40"
        value={length}
        onChange={handleChange}
        className="w-full hover:shadow-xl
        
        "
      />
    </div>
  )
}

export default ScrollBar