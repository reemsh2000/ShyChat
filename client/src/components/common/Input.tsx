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
	disabled?: boolean;
	placeholder?: string;
	autoComplete?: string;
}

export const Input: React.FC<InputProps> = ({ name, label, value, onChange, type, styleName, labelStyle, inputStyle, error, errorStyle, disabled = false, placeholder, autoComplete = "on" }) => {
	return (
		<div className={styleName}>
			<div className={styleName}>
				<label htmlFor={name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
					{label}
				</label>
				<input
					type={type}
					id={name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					disabled={disabled}
					value={value}
					autoComplete={autoComplete}
					placeholder={placeholder ?? `Enter ${label}`}
					onChange={onChange}
				/>
			</div>

			{error && <div className={errorStyle}>{error}</div>}
		</div>
	);
};
