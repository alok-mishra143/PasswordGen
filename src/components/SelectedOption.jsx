import React from 'react';

function SelectedOption({ Symbol, Alpha, Number, changeOption }) {
  return (
    <div className='flex flex-wrap mb-2 space-x-2 font-serif font-semibold text-white'>
      <label>
        Alphabets
        <input
        className='ml-2'
          type="checkbox"
          checked={Alpha}
          onChange={() => changeOption('Alpha')}
        />
      </label>

      <label>
        Number
        <input
         className='ml-2'
          type="checkbox"
          checked={Number}
          onChange={() => changeOption('Number')}
        />
      </label>

      <label>
        Symbol
        <input
         className='ml-2'
          type="checkbox"
          checked={Symbol}
          onChange={() => changeOption('Symbol')}
        />
      </label>


      

    </div>
  );
}

export default SelectedOption;