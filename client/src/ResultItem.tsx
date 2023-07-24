function ResultItem({ item }: any) {
	return (
		<div key={item.id} className='bg-white/20 p-3 rounded-xl'>
			<div className='flex flex-col space-y-2 w-full'>
				<div className='flex-1 whitespace-nowrap font-bold'>
					{item.name}
				</div>
				<div className='flex-2 text-sm'>{item.description}</div>
				<div className='text-xs text-gray-300 text-end'>
					{item.timeAdded}. {item.dateAdded}.
				</div>
			</div>
		</div>
	);
}

export default ResultItem;
