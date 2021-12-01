import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Charts from './components/Charts';
import Navbar from './components/Navbar';

import './style.css';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
	const [coinData, setCoinData] = useState([]);
	const [useDarkMode, setDarkMode] = useState(false);

	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true')
			.then((res) => setCoinData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className={useDarkMode ? 'dark-mode App' : 'App'}>
			<Navbar darkMode={useDarkMode} setDarkMode={setDarkMode} />
			<Charts coinData={coinData} />
		</div>
	);
};

export default App;
