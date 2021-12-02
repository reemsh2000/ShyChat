import React from "react";

interface InputProps {
  name: string;
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  styleName?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  error?: any;
  errorStyle?: React.CSSProperties;
  disabled?:boolean;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  type,
  styleName,
  labelStyle,
  inputStyle,
  error,
  errorStyle,
  disabled=false
}) => {
  return (
    <div style={styleName}>
      <label htmlFor={name} style={labelStyle}>{label}</label>
      <input
        onChange={onChange}
        name={name}
        id={name}
        value={value}
        type={type}
        style={inputStyle}
        disabled={disabled}
      />
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
};
