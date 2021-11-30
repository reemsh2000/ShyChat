import React from "react";

interface InputProps {
  name: string;
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string,
  disabled?:boolean
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  type,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input onChange={onChange} name={name} id={name} value={value} type={type} required />
    </div>
  );
};