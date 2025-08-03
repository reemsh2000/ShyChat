import React from "react";

interface InputProps {
	name: string;
	label: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	type: string;
	styleName?: string;
	containerClasses?: string;
	inputStyle?: string;
	error?: any;
	errorStyle?: string;
	disabled?: boolean;
	placeholder?: string;
	autoComplete?: string;
	hasLabel?:boolean;
}

export const Input: React.FC<InputProps> = ({ name, label, value, onChange, type, styleName, containerClasses, inputStyle, error, errorStyle, disabled = false, placeholder, autoComplete = "on" ,hasLabel=true }) => {
	return (
		<div className={containerClasses}>
			<div className={styleName}>
				{hasLabel && (
					<label htmlFor={name} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
						{label}
					</label>
				)}
				<input
					name={name}
					type={type}
					id={name}
					className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ${inputStyle}`}
					disabled={disabled}
					value={value}
					autoComplete={autoComplete}
					placeholder={placeholder ?? `Enter ${label} `}
					onChange={onChange}
				/>
			</div>

			{error && <div className={errorStyle}>{error}</div>}
		</div>
	);
};
