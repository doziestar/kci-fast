import { useState } from 'react';
import Input from './components/Input';
import ResultItem from './components/ResultItem';
import { data } from './constants/data';

function App() {
	const [value, setValue] = useState('');
	const [searchResults, setSearchResults] = useState<typeof data>([]);

	const handleSetValue = (e: any) => {
		const enteredVal = e?.target?.value || '';
		setValue(enteredVal);
		handleSearch(enteredVal);
	};

	const handleSearch = (query: string) => {
		let results: typeof data = [];
		data.forEach((item) => {
			if (item.name.toLowerCase().includes(query.toLowerCase())) {
				results.push(item);
			}
		});
		setSearchResults(results);
	};

	return (
		<div className='bg-black h-screen flex flex-col items-center text-white '>
			<div
				className={` flex ${
					value.length
						? 'flex-row items-center justify-center space-x-7 my-10'
						: 'flex-col items-center justify-center space-y-7 my-auto'
				}  w-10/12 md:w-3/5 lg:w-2/5 transition-all duration-500`}
			>
				<h2 className={`${value ? 'text-2xl' : 'text-7xl'} font-bold `}>
					Spectrum
				</h2>
				<div className={`w-full`}>
					<Input onChange={handleSetValue} value={value} />
				</div>
			</div>
			{/* Results */}
			<div className='w-10/12 md:w-3/5 lg:w-2/5 space-y-4'>
				{!!value && !searchResults.length && (
					<div className='bg-white/20 p-3 rounded-xl'>
						No results found for your search!
					</div>
				)}
				{/* Result items */}
				{!!value &&
					searchResults.map((item) => (
						<ResultItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
}

export default App;
