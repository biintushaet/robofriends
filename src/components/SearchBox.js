import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2'>
			<input className='bg-lightest-blue ba pa3 b--green' type='search' placeholder='Search Robots' onChange={searchChange} /> 
		</div>
	);
}

export default SearchBox;