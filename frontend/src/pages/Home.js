import { useEffect, useState } from 'react';

const Home = () => {
	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('http://localhost:3000/api/users');
			const json = await response.json();

			
		};
		fetchUsers();
	}, []);
	return (
		<div className="home">
			<h2>Home</h2>
		</div>
	);
};

export default Home;
