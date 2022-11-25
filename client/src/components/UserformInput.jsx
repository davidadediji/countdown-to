import React, { useState } from "react";

const UserFormInput = ({
  label,
  onChange,
  id,
  error,
  className,
  loading,
  ...input
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = (e) => {
    setFocused(true);
  };

  console.log(id);

  return (
    <div className="flex flex-col gap-2">
      {id === "description" ? (
        <>
          <label htmlFor={id} className="text-base font-semibold text-primary">
            {label}
          </label>
          <textarea
            {...input}
            id={id}
            onChange={onChange}
            onFocus={handleFocused}
            className={`border-2 border-[#888888] rounded-[8px] py-[12px] px-4 focus:outline-none focus:border-[#E5E5E5] placeholder:text-placeholders text-base font-normal ${className} mb-4`}
            focused={focused.toString()}
            onBlur={() => setFocused(false)}
          />
        </>
      ) : (
        <>
          <label htmlFor={id} className="text-base font-semibold text-primary">
            {label}
          </label>
          <input
            {...input}
            id={id}
            onChange={onChange}
            onFocus={handleFocused}
            className={`border-2 border-[#888888] rounded-[8px] py-[12px] px-4 focus:outline-none focus:border-[#E5E5E5] placeholder:text-placeholders text-base font-normal ${className} mb-4

            `}
            focused={focused.toString()}
            onBlur={() => setFocused(false)}
          />
          <span className="text-xs text-error mt-[-12px] mb-4">
            <small>{error}</small>
          </span>
        </>
      )}
    </div>
  );
};

export default UserFormInput;
