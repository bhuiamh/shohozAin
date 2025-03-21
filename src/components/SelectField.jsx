import React from "react";

function SelectField({ id, name, value, onChange, options, disabled, placeholder }) {
  return (
    <select
      className="font-semibold w-full h-10 bg-transparent block border-0 pt-2 pb-0 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2  border-orange-500 focus:border-orange-500 mobile:text-sm mobile:leading-6"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option className="text-black" value="">
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option className="text-black bg-neutral-content" key={index} value={option[name]}>
         {name === 'upazila' ? option : option[name]} 
        </option>
      ))}
    </select>
  );
}

export default SelectField;
