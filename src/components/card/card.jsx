import { useState } from 'react';
import Button from '../button/button';
import './card.css';

const Card = props => {
	const [count, setCount] = useState(0);
	const { model, onAddItem, onRemoveItem } = props;

	const handleIncrement = () => {
		setCount(prev => prev + 1);
		onAddItem(model);
	};

	const handleDecrement = () => {
		setCount(prev => prev - 1);
		onRemoveItem(model);
        console.log(count)
	};

	return (
		<div className='card'>
			{/* <span
				className={`${
					count !== 0 ? 'card__badge' : 'card__badge-hidden'
				}`}
			>
				{count}
			</span> */}


			<div className='card__body'>
				<h2 className='card__title'>{model.model_num}</h2>
				<div className='card__price'>
					{model.cost.toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
				</div>
			</div>

			<div className='hr'></div>

			<div className='btn__container'>
				<Button title={'+'} onClick={handleIncrement} type={'add'} />
                <Button title={'-'}	type={'remove'}	onClick={count!==0?handleDecrement:null} />
				
			</div>
		</div>
	);
};

export default Card;