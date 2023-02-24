import React, { useState } from 'react';
import CountdownComponent from './CountdownComponent';

const TimeForm = () => {
	const [currentInput, setInput] = useState(0);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	if (!submitted) {
		return (
			<>
				<h1>Resin</h1>
				<form onSubmit={handleSubmit}>
					<label>
						{''}
						<input type="number" value={currentInput} onChange={handleChange} />
					</label>
					<input type="submit" />
				</form>
			</>
		);
	} else {
		return <CountdownComponent currentResin={parseInt(currentInput)} />;
	}
};

export default TimeForm;
