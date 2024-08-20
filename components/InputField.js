import React from 'react';

const InputField = ({ label, placeholder, value, onChange, error, type = 'text', name, ariaLabel }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={name} className="text-lg font-medium mb-2 text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        className={`bg-gray-100 py-3 px-4 rounded-lg text-black text-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
