import React from 'react';
import { Toast } from 'react-bootstrap';

let Confirmation = ({ toggle }) => {
	console.log('Toggle', toggle);
	return (
		<Toast>
			<Toast.Header>
				<strong className='mr-auto'>Your order is in the oven</strong>
				<small>just now</small>
			</Toast.Header>
			<Toast.Body>Your delicious pizza will be with you in 30 minutes.</Toast.Body>
		</Toast>
	);
};

export default Confirmation;
