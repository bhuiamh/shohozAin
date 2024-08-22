import React from "react";

const TextInput = ({ name, type = "text", placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
    />
  );
};

export default TextInput;
