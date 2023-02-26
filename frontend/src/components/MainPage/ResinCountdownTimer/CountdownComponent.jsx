import React, { useEffect, useState } from 'react';

const CountdownComponent = (props) => {
	const { currentResin } = props;
	let remainingInMinutes = (160 - currentResin) * 8;
	let remainingSeconds = remainingInMinutes * 60;

	const useTimer = (targetDate) => {
		const [currentSeconds, setSeconds] = useState('??');
		const [currentMinutes, setMinutes] = useState('??');
		const [currentHours, setHours] = useState('??');

		useEffect(() => {
			const interval = setInterval(() => {
				let time = Date.parse(targetDate) - Date.now();
				setSeconds(Math.floor((time / 1000) % 60));
				setMinutes(Math.floor((time / 1000 / 60) % 60));
				setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			}, 1000);
			return () => clearInterval(interval);
		}, []);

		return { currentSeconds, currentMinutes, currentHours };
	};

	let targetDate = new Date(remainingSeconds * 1000 + Date.now());
	const { currentSeconds, currentMinutes, currentHours } = useTimer(targetDate);

	if (currentSeconds <= 0 && currentMinutes <= 0 && currentHours <= 0) {
		return <p>Timer done!</p>;
	} else {
		let hours = ('0' + currentHours).slice(-2);
		let minutes = ('0' + currentMinutes).slice(-2);
		let seconds = ('0' + currentSeconds).slice(-2);
		return (
			<p>
				Remaining time until full: {hours}: {minutes}: {seconds}
			</p>
		);
	}
};

export default CountdownComponent;
