import { InputHTMLAttributes } from 'react';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			className='w-full p-2 rounded-full bg-white/10 border border-white/30'
			placeholder='Enter your search keyword'
			{...props}
		/>
	);
}

export default Input;
