function Input({ placeholder, title, label, type = "text", value, onChange }) {
	return (
		<div className='w-full mb-3'>
			<p className='block text-lg font-medium'>{title}</p>
			<label htmlFor='name'>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				className='my-2 border border-gray-700 w-full px-2 py-3 rounded-md'
				value={value}
				onChange={(e) => onChange(e.target.value)} // Call onChange with the new value
			/>
		</div>
	);
}
export default Input;
