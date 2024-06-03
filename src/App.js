import { useState } from 'react';
import './App.css';
import styles from './app.module.css';

export const App = () => {
	const [op1, setOp1] = useState('');
	const [op2, setOp2] = useState('');
	const [operator, setOperator] = useState('');
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const [result, setResult] = useState('');
	const onClickNumber = (number) => {
if (!operator) {
console.log(event.target.innerText);
setOp1(number);
} else if (operator !== '') {
setOp2(number);
}
};

	const createNumberButtons = () => {
		const buttons = NUMS.map((num, index) => {
			return (
				<button key={index} className="number" onClick={() =>onClickNumber(num)}>
					{num}
				</button>
			);
		});
		return buttons;
	};

	const clickC = () => {
		setOp1('');
		setOp2('');
		setOperator('');
		setResult('');
	};

	const isOperator = () => {
		const elements = [];
		if (op1) elements.push(op1);
		if (operator) elements.push(operator);
		if (op2) elements.push(op2);
		return elements.join(' ');
	};

	const clickPlus = () => {
		setOperator('+');
	};

	const clickMinus = () => {
		setOperator('-');
	};

	const calculateResult = () => {
		if (op1 && op2 && operator) {
			if (operator === '+') {
				return setResult(
					Math.floor(Number(op1)) + Math.floor(Number(op2)),
				);
			} else if (operator === '-') {
				return setResult(
					Math.floor(Number(op1)) - Math.floor(Number(op2)),
				);
			}
		}
	};
	const changeColorResult = () => {
		return result ? 'red' : 'black';
	};
	return (
		<div className={styles.calc}>
			<div className={styles.result}>
				<p className={styles.res}>{isOperator()}</p>
				<p
					className={styles.res1}
					style={{ color: changeColorResult() }}
				>
					{result}
				</p>
			</div>
			{createNumberButtons()}
			<div>
				<button onClick={clickPlus}>+</button>
				<button onClick={clickMinus}>-</button>

				<button onClick={clickC}>C</button>
			</div>

			<button onClick={calculateResult}>=</button>
		</div>
	);
};
