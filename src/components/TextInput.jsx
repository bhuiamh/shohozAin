import React from "react";

const TextInput = ({ height = "h-10", name, type = "text", placeholder, value, onChange, border= 2, scale= 105 }) => {
  return (
    <input
 
      name={name}
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${height} font-semibold bg-transparent block w-full border-0 pt-2 pb-0 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 tablet:border-b-${border} border-orange-500 focus:border-orange-500 focus:scale-${scale} duration-300 mobile:text-sm mobile:leading-6`}
    />
  );
};

export default TextInput;
