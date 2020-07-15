import React from 'react';

const Card = (props) => {
	const {name, id, email} = props;
	return (
		<div className=" tc bg-light-green ma3 pa3 dib br3 grow shadow-5 bw2">
			<img alt='robots'  src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;