import { useState } from 'react';
import './App.css';
import styles from './app.module.css';

export const App = () => {
	const [op1, setOp1] = useState('');
	const [op2, setOp2] = useState('');
	const [operator, setOperator] = useState('');
	const buttons = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'C',
		'=',
		'+',
		'-',
	];

	const [result, setResult] = useState('');

	const clickC = () => {
		setOp1('');
		setOp2('');
		setOperator('');
		setResult('');
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
	const handleClick = (num) => {
		const isNum = isFinite(Number(num));
		if (num === 'C') return clickC();
		if (!operator) {
			if (isNum) {
				return setOp1((prevOp1) => prevOp1 + num);
			}
		} else if (operator !== '') {
			if (isNum) {
				return setOp2((prevOp2) => prevOp2 + num);
			}
		}
		if (num === '+') return clickPlus();
		if (num === '-') return clickMinus();
		if (num === '=') return calculateResult();
	};

	const createNumberButtons = () => {
		const createButtons = buttons.map((num, index) => {
			return (
				<button
					key={num}
					className="number"
					onClick={() => handleClick(num)}
				>
					{num}
				</button>
			);
		});
		return createButtons;
	};

	const isOperator = () => {
		const elements = [];
		if (op1) elements.push(op1);
		if (operator) elements.push(operator);
		if (op2) elements.push(op2);
		return elements.join(' ');
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
		</div>
	);
};
