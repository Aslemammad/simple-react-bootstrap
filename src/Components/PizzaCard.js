import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
let PizzaCard = ({ data, setOrdered }) => {
	return (
		<Card className='h-100 shadow-sm rounded' style={{ width: '18rem' }}>
			<Card.Img variant='top' src={data.image} />
			<Card.Body>
				<div className='d-flex mb-2 justify-content-between'>
					<Card.Title>{data.name} </Card.Title>

					<Badge variant='warning' className='p-2'>
						${data.price}
					</Badge>
				</div>
				<Card.Text className='text-secondary'>{data.desc}</Card.Text>
				<Button variant='primary' className='mt-auto font-weight-bold'>
					Order Pizza 🍕
				</Button>
			</Card.Body>
		</Card>
	);
};

export default PizzaCard;
