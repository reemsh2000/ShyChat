import React from "react";

interface InputProps {
  name: string;
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  styleName?: string;
  labelStyle?: string;
  inputStyle?: string;
  error?: any;
  errorStyle?: string;
  disabled?:boolean;
  placeholder?: string;
  autoComplete?: string;
  onSend?:any
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
  disabled=false,
  placeholder,
  autoComplete="on",
  onSend
}) => {
  return (
    <div className={styleName}>
      <label htmlFor={name} className={labelStyle}>{label}</label>
      <input
        onChange={onChange}
        name={name}
        id={name}
        value={value}
        type={type}
        className={inputStyle}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onKeyPress={onSend}
      />
      {error && <div className={errorStyle}>{error}</div>}
    </div>
  );
};
