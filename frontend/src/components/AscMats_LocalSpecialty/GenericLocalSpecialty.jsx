import React, { useState } from 'react';

const GenericLocalSpecialty = () => {
	//Mondstadt
	const [callaLily, setCallaLily] = useState(0);
	const [cecilia, setCecilia] = useState(0);
	const [dandelionSeed, setDandelionSeed] = useState(0);
	const [philanemoMushroom, setPhilanemoMushroom] = useState(0);
	const [smallLampGrass, setSmallLampGrass] = useState(0);
	const [valberry, setValberry] = useState(0);
	const [windwheelAster, setWindwheelAster] = useState(0);
	const [wolfhook, setWolfhook] = useState(0);

	//Liyue
	const [jueyunChili, setJueyunChili] = useState(0);
	const [noctilucousJade, setNoctilucousJade] = useState(0);
	const [silkFlower, setSilkFlower] = useState(0);
	const [glazeLily, setGlazeLily] = useState(0);
	const [qingxin, setQingxin] = useState(0);
	const [starconch, setStarconch] = useState(0);
	const [violetgrass, setVioletgrass] = useState(0);

	const [corLapis, setCorLapis] = useState(0);
	const [majesticHookedBeak, setMajesticHookedBeak] = useState(0);
	const [thunderclapFruitcore, setThunderclapFruitcore] = useState(0);
	const [perpetualCaliber, setPerpetualCaliber] = useState(0);
	const [lightGuidingTetrahedron, setLightGuidingTetrahedron] = useState(0);
	const [quelledCreeper, setQuelledCreeper] = useState(0);
	const [pseudoStamens, setPseudoStamens] = useState(0);

	const totalPerChar = 168;

	// Mondstadt
	const [counterCallaLily, setCounterCallaLily] = useState(0);
	const incrementCounterCallaLily = () => {
		setCounterCallaLily(counterCallaLily + 1);
	};
	const decrementCounterCallaLily = () => {
		if (counterCallaLily !== 0) {
			setCounterCallaLily(counterCallaLily - 1);
		}
	};
	//
	const [counterCecilia, setCounterCecilia] = useState(0);
	const incrementCounterCecilia = () => {
		setCounterCecilia(counterCecilia + 1);
	};
	const decrementCounterCecilia = () => {
		if (counterCecilia !== 0) {
			setCounterCecilia(counterCecilia - 1);
		}
	};
	//
	const [counterDandelionSeed, setCounterDandelionSeed] = useState(0);
	const incrementCounterDandelionSeed = () => {
		setCounterDandelionSeed(counterDandelionSeed + 1);
	};
	const decrementCounterDandelionSeed = () => {
		if (counterDandelionSeed !== 0) {
			setCounterDandelionSeed(counterDandelionSeed - 1);
		}
	};
	//
	const [counterPhilanemoMushroom, setCounterPhilanemoMushroom] = useState(0);
	const incrementCounterPhilanemoMushroom = () => {
		setCounterPhilanemoMushroom(counterPhilanemoMushroom + 1);
	};
	const decrementCounterPhilanemoMushroom = () => {
		if (counterPhilanemoMushroom !== 0) {
			setCounterPhilanemoMushroom(counterPhilanemoMushroom - 1);
		}
	};
	//
	const [counterSmallLampGrass, setCounterSmallLampGrass] = useState(0);
	const incrementCounterSmallLampGrass = () => {
		setCounterSmallLampGrass(counterSmallLampGrass + 1);
	};
	const decrementCounterSmallLampGrass = () => {
		if (counterSmallLampGrass !== 0) {
			setCounterSmallLampGrass(counterSmallLampGrass - 1);
		}
	};
	//
	const [counterValberry, setCounterValberry] = useState(0);
	const incrementCounterValberry = () => {
		setCounterValberry(counterValberry + 1);
	};
	const decrementCounterValberry = () => {
		if (counterValberry !== 0) {
			setCounterValberry(counterValberry - 1);
		}
	};
	//
	const [counterWindwheelAster, setCounterWindwheelAster] = useState(0);
	const incrementCounterWindwheelAster = () => {
		setCounterWindwheelAster(counterWindwheelAster + 1);
	};
	const decrementCounterWindwheelAster = () => {
		if (counterWindwheelAster !== 0) {
			setCounterWindwheelAster(counterWindwheelAster - 1);
		}
	};
	//
	const [counterWolfhook, setCounterWolfhook] = useState(0);
	const incrementCounterWolfhook = () => {
		setCounterWolfhook(counterWolfhook + 1);
	};
	const decrementCounterWolfhook = () => {
		if (counterWolfhook !== 0) {
			setCounterWolfhook(counterWolfhook - 1);
		}
	};

	//Liyue
	//
	const [counterJueyunChili, setCounterJueyunChili] = useState(0);
	const incrementCounterJueyunChili = () => {
		setCounterJueyunChili(counterJueyunChili + 1);
	};
	const decrementCounterJueyunChili = () => {
		if (counterJueyunChili !== 0) {
			setCounterJueyunChili(counterJueyunChili - 1);
		}
	};
	//
	const [counterNoctilucousJade, setCounterNoctilucousJade] = useState(0);
	const incrementCounterNoctilucousJade = () => {
		setCounterNoctilucousJade(counterNoctilucousJade + 1);
	};
	const decrementCounterNoctilucousJade = () => {
		if (counterNoctilucousJade !== 0) {
			setCounterNoctilucousJade(counterNoctilucousJade - 1);
		}
	};
	//
	const [counterSilkFlower, setCounterSilkFlower] = useState(0);
	const incrementCounterSilkFlower = () => {
		setCounterSilkFlower(counterSilkFlower + 1);
	};
	const decrementCounterSilkFlower = () => {
		if (counterSilkFlower !== 0) {
			setCounterSilkFlower(counterSilkFlower - 1);
		}
	};
	//
	const [counterglazeLily, setCounterglazeLily] = useState(0);
	const incrementCounterglazeLily = () => {
		setCounterglazeLily(counterglazeLily + 1);
	};
	const decrementCounterglazeLily = () => {
		if (counterglazeLily !== 0) {
			setCounterglazeLily(counterglazeLily - 1);
		}
	};
	//
	const [counterQingxin, setCounterQingxin] = useState(0);
	const incrementCounterQingxin = () => {
		setCounterQingxin(counterQingxin + 1);
	};
	const decrementCounterQingxin = () => {
		if (counterQingxin !== 0) {
			setCounterQingxin(counterQingxin - 1);
		}
	};
	//
	const [counterStarconch, setCounterStarconch] = useState(0);
	const incrementCounterStarconch = () => {
		setCounterStarconch(counterStarconch + 1);
	};
	const decrementCounterStarconch = () => {
		if (counterStarconch !== 0) {
			setCounterStarconch(counterStarconch - 1);
		}
	};
	//
	const [counterVioletgrass, setCounterVioletgrass] = useState(0);
	const incrementCounterVioletgrass = () => {
		setCounterVioletgrass(counterVioletgrass + 1);
	};
	const decrementCounterVioletgrass = () => {
		if (counterVioletgrass !== 0) {
			setCounterVioletgrass(counterVioletgrass - 1);
		}
	};
	//
	const [counterCorLapis, setCounterCorLapis] = useState(0);
	const incrementCounterCorLapis = () => {
		setCounterCorLapis(counterCorLapis + 1);
	};
	const decrementCounterCorLapis = () => {
		if (counterCorLapis !== 0) {
			setCounterCorLapis(counterCorLapis - 1);
		}
	};

	//INAZUMA
	const [counterMajesticHookedBeak, setCounterMajesticHookedBeak] = useState(0);
	const incrementCounterMajesticHookedBeak = () => {
		setCounterMajesticHookedBeak(counterMajesticHookedBeak + 1);
	};
	const decrementCounterMajesticHookedBeak = () => {
		if (counterMajesticHookedBeak !== 0) {
			setCounterMajesticHookedBeak(counterMajesticHookedBeak - 1);
		}
	};
	const [counterThunderclapFruitcore, setCounterThunderclapFruitcore] = useState(0);
	const incrementCounterThunderclapFruitcore = () => {
		setCounterThunderclapFruitcore(counterThunderclapFruitcore + 1);
	};
	const decrementCounterThunderclapFruitcore = () => {
		if (counterThunderclapFruitcore !== 0) {
			setCounterThunderclapFruitcore(counterThunderclapFruitcore - 1);
		}
	};
	const [counterPerpetualCaliber, setCounterPerpetualCaliber] = useState(0);
	const incrementCounterPerpetualCaliber = () => {
		setCounterPerpetualCaliber(counterPerpetualCaliber + 1);
	};
	const decrementCounterPerpetualCaliber = () => {
		if (counterPerpetualCaliber !== 0) {
			setCounterPerpetualCaliber(counterPerpetualCaliber - 1);
		}
	};
	const [counterLightGuidingTetrahedron, setCounterLightGuidingTetrahedron] = useState(0);
	const incrementCounterLightGuidingTetrahedron = () => {
		setCounterLightGuidingTetrahedron(counterLightGuidingTetrahedron + 1);
	};
	const decrementCounterLightGuidingTetrahedron = () => {
		if (counterLightGuidingTetrahedron !== 0) {
			setCounterLightGuidingTetrahedron(counterLightGuidingTetrahedron - 1);
		}
	};
	const [counterQuelledCreeper, setCounterQuelledCreeper] = useState(0);
	const incrementCounterQuelledCreeper = () => {
		setCounterQuelledCreeper(counterQuelledCreeper + 1);
	};
	const decrementCounterQuelledCreeper = () => {
		if (counterQuelledCreeper !== 0) {
			setCounterQuelledCreeper(counterQuelledCreeper - 1);
		}
	};
	const [counterPseudoStamens, setCounterPseudoStamens] = useState(0);
	const incrementCounterPseudoStamens = () => {
		setCounterPseudoStamens(counterPseudoStamens + 1);
	};
	const decrementCounterPseudoStamens = () => {
		if (counterPseudoStamens !== 0) {
			setCounterPseudoStamens(counterPseudoStamens - 1);
		}
	};

	const Mond_LiyTotalHave = (input1, input2, input3, input4, input5, input6, input7, input8) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8);
	};
	const Mond_LiyTotalUsed = (input1, input2, input3, input4, input5, input6, input7, input8) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8);
	};
	var inputsHave = [
		callaLily,
		cecilia,
		dandelionSeed,
		philanemoMushroom,
		smallLampGrass,
		valberry,
		windwheelAster,
		wolfhook,
		jueyunChili,
		noctilucousJade,
		silkFlower,
		glazeLily,
		qingxin,
		starconch,
		violetgrass,
		corLapis,
		majesticHookedBeak,
		thunderclapFruitcore,
		perpetualCaliber,
		lightGuidingTetrahedron,
		quelledCreeper,
		pseudoStamens,
	];
	var inputsUsed = [
		counterCallaLily,
		counterCecilia,
		counterDandelionSeed,
		counterPhilanemoMushroom,
		counterSmallLampGrass,
		counterValberry,
		counterWindwheelAster,
		counterWolfhook,
		counterJueyunChili,
		counterNoctilucousJade,
		counterSilkFlower,
		counterglazeLily,
		counterQingxin,
		counterStarconch,
		counterVioletgrass,
		counterCorLapis,
		counterMajesticHookedBeak,
		counterThunderclapFruitcore,
		counterPerpetualCaliber,
		counterLightGuidingTetrahedron,
		counterQuelledCreeper,
		counterPseudoStamens,
	];

	const LvUpMatTotalHave = (
		input1,
		input2,
		input3,
		input4,
		input5,
		input6,
		input7,
		input8,
		input9,
		input10,
		input11,
		input12,
		input13,
		input14,
		input15,
		input16,
		input17,
		input18,
		input19,
		input20,
		input21,
		input22
	) => {
		return (
			parseInt(input1) +
			parseInt(input2) +
			parseInt(input3) +
			parseInt(input4) +
			parseInt(input5) +
			parseInt(input6) +
			parseInt(input7) +
			parseInt(input8) +
			parseInt(input9) +
			parseInt(input10) +
			parseInt(input11) +
			parseInt(input12) +
			parseInt(input13) +
			parseInt(input14) +
			parseInt(input15) +
			parseInt(input16) +
			parseInt(input17) +
			parseInt(input18) +
			parseInt(input19) +
			parseInt(input20) +
			parseInt(input21) +
			parseInt(input22)
		);
	};

	const LvUpMatTotalUsed = (
		input1,
		input2,
		input3,
		input4,
		input5,
		input6,
		input7,
		input8,
		input9,
		input10,
		input11,
		input12,
		input13,
		input14,
		input15,
		input16,
		input17,
		input18,
		input19,
		input20,
		input21,
		input22
	) => {
		return (
			parseInt(input1) +
			parseInt(input2) +
			parseInt(input3) +
			parseInt(input4) +
			parseInt(input5) +
			parseInt(input6) +
			parseInt(input7) +
			parseInt(input8) +
			parseInt(input9) +
			parseInt(input10) +
			parseInt(input11) +
			parseInt(input12) +
			parseInt(input13) +
			parseInt(input14) +
			parseInt(input15) +
			parseInt(input16) +
			parseInt(input17) +
			parseInt(input18) +
			parseInt(input19) +
			parseInt(input20) +
			parseInt(input21) +
			parseInt(input22)
		);
	};

	return (
		<div>
			<h1 className="local-specialty-h1">Local Specialty</h1>
			<div className="local-specialty-block">
				<table className="local-specialty-table">
					<thead className="local-specialty-header">
						<tr>
							<th>Local Specialty</th>
							<th>Need</th>
							<th>Have</th>
							<th>Used</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan={5}>Mondstadt</td>
						</tr>
						<tr>
							<td>Calla Lily</td>
							<td>{2 * totalPerChar - callaLily}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={callaLily - counterCallaLily}
									onChange={(e) => setCallaLily(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterCallaLily}
										>
											-
										</button>

										<span className="local-specialty-arrow-mid-number">{parseInt(counterCallaLily)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterCallaLily}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Cecilia</td>
							<td>{2 * totalPerChar - cecilia}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={cecilia - counterCecilia}
									onChange={(e) => setCecilia(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterCecilia}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterCecilia)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterCecilia}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Dandelion Seed</td>
							<td>{2 * totalPerChar - dandelionSeed}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={dandelionSeed - counterDandelionSeed}
									onChange={(e) => setDandelionSeed(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterDandelionSeed}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterDandelionSeed)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterDandelionSeed}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Philanemo Mushroom</td>
							<td>{3 * totalPerChar - philanemoMushroom}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={philanemoMushroom - counterPhilanemoMushroom}
									onChange={(e) => setPhilanemoMushroom(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterPhilanemoMushroom}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPhilanemoMushroom)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterPhilanemoMushroom}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Small Lamp Grass</td>
							<td>{3 * totalPerChar - smallLampGrass} </td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={smallLampGrass - counterSmallLampGrass}
									onChange={(e) => setSmallLampGrass(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterSmallLampGrass}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSmallLampGrass)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterSmallLampGrass}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Valberry</td>
							<td>{3 * totalPerChar - valberry}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={valberry - counterValberry}
									onChange={(e) => setValberry(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterValberry}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterValberry)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterValberry}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Windwheel Aster</td>
							<td>{3 * totalPerChar - windwheelAster}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={windwheelAster - counterWindwheelAster}
									onChange={(e) => setWindwheelAster(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterWindwheelAster}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterWindwheelAster)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterWindwheelAster}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Wolfhook</td>
							<td>{1 * totalPerChar - wolfhook}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={wolfhook - counterWolfhook}
									onChange={(e) => setWolfhook(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterWolfhook}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterWolfhook)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterWolfhook}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 19 - Mond_LiyTotalHave(callaLily, cecilia, dandelionSeed, philanemoMushroom, smallLampGrass, valberry, windwheelAster, wolfhook)}</td>
							<td>
								{Mond_LiyTotalHave(callaLily, cecilia, dandelionSeed, philanemoMushroom, smallLampGrass, valberry, windwheelAster, wolfhook) -
									Mond_LiyTotalUsed(counterCallaLily, counterCecilia, counterDandelionSeed, counterPhilanemoMushroom, counterSmallLampGrass, counterValberry, counterWindwheelAster, counterWolfhook)}
							</td>
							<td>
								{Mond_LiyTotalUsed(counterCallaLily, counterCecilia, counterDandelionSeed, counterPhilanemoMushroom, counterSmallLampGrass, counterValberry, counterWindwheelAster, counterWolfhook)}
							</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan={5}>Liyue</td>
						</tr>
						<tr>
							<td>Jueyun Chili</td>
							<td>{2 * totalPerChar - jueyunChili}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={jueyunChili - counterJueyunChili}
									onChange={(e) => setJueyunChili(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterJueyunChili}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterJueyunChili)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterJueyunChili}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Noctilucous Jade</td>
							<td>{2 * totalPerChar - noctilucousJade}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={noctilucousJade - counterNoctilucousJade}
									onChange={(e) => setNoctilucousJade(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterNoctilucousJade}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterNoctilucousJade)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterNoctilucousJade}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Silk Flower</td>
							<td>{2 * totalPerChar - silkFlower}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={silkFlower - counterSilkFlower}
									onChange={(e) => setSilkFlower(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterSilkFlower}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSilkFlower)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterSilkFlower}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Glaze Lily</td>
							<td>{2 * totalPerChar - glazeLily}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={glazeLily - counterglazeLily}
									onChange={(e) => setGlazeLily(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterglazeLily}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterglazeLily)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterglazeLily}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Qingxin</td>
							<td>{3 * totalPerChar - qingxin}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={qingxin - counterQingxin}
									onChange={(e) => setQingxin(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterQingxin}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterQingxin)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterQingxin}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Starconch</td>
							<td>{2 * totalPerChar - starconch}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={starconch - counterStarconch}
									onChange={(e) => setStarconch(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterStarconch}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterStarconch)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterStarconch}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Violetgrass</td>
							<td>{2 * totalPerChar - violetgrass}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={violetgrass - counterVioletgrass}
									onChange={(e) => setVioletgrass(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterVioletgrass}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterVioletgrass)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterVioletgrass}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Cor Lapis</td>
							<td>{3 * totalPerChar - corLapis}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={corLapis - counterCorLapis}
									onChange={(e) => setCorLapis(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterCorLapis}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterCorLapis)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterCorLapis}
										>
											+
										</button>
									</>
								}
							</td>
							<td></td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 18 - Mond_LiyTotalHave(jueyunChili, noctilucousJade, silkFlower, glazeLily, qingxin, starconch, violetgrass, corLapis)}</td>
							<td>
								{Mond_LiyTotalHave(jueyunChili, noctilucousJade, silkFlower, glazeLily, qingxin, starconch, violetgrass, corLapis) -
									Mond_LiyTotalUsed(counterJueyunChili, counterNoctilucousJade, counterSilkFlower, counterglazeLily, counterQingxin, counterStarconch, counterVioletgrass, counterCorLapis)}
							</td>
							<td>{Mond_LiyTotalUsed(counterJueyunChili, counterNoctilucousJade, counterSilkFlower, counterglazeLily, counterQingxin, counterStarconch, counterVioletgrass, counterCorLapis)}</td>
							<td></td>
						</tr>
						<tr>
							<td>Majestic Hooked Beak</td>
							<td>{2 * totalPerChar - majesticHookedBeak}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={majesticHookedBeak - counterMajesticHookedBeak}
									onChange={(e) => setMajesticHookedBeak(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterMajesticHookedBeak}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterMajesticHookedBeak)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterMajesticHookedBeak}
										>
											+
										</button>
									</>
								}
							</td>
							<td> Collei, Tighnari</td>
						</tr>
						<tr>
							<td>Thunderclap Fruitcore</td>
							<td>{2 * totalPerChar - thunderclapFruitcore}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={thunderclapFruitcore - counterThunderclapFruitcore}
									onChange={(e) => setThunderclapFruitcore(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterThunderclapFruitcore}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterThunderclapFruitcore)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterThunderclapFruitcore}
										>
											+
										</button>
									</>
								}
							</td>
							<td>Cyno, Dori</td>
						</tr>

						<tr>
							<td>Perpetual Caliber</td>
							<td>{3 * totalPerChar - perpetualCaliber}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={perpetualCaliber - counterPerpetualCaliber}
									onChange={(e) => setPerpetualCaliber(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterPerpetualCaliber}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPerpetualCaliber)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterPerpetualCaliber}
										>
											+
										</button>
									</>
								}
							</td>
							<td>Layla,Nilou, Wanderer</td>
						</tr>
						<tr>
							<td>Light Guiding Tetrahedron</td>
							<td>{3 * totalPerChar - lightGuidingTetrahedron}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={lightGuidingTetrahedron - counterLightGuidingTetrahedron}
									onChange={(e) => setLightGuidingTetrahedron(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterLightGuidingTetrahedron}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterLightGuidingTetrahedron)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterLightGuidingTetrahedron}
										>
											+
										</button>
									</>
								}
							</td>
							<td>Candace, Dehya, Faruzan</td>
						</tr>
						<tr>
							<td>Quelled Creeper</td>
							<td>{2 * totalPerChar - quelledCreeper}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={quelledCreeper - counterQuelledCreeper}
									onChange={(e) => setQuelledCreeper(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterQuelledCreeper}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterQuelledCreeper)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterQuelledCreeper}
										>
											+
										</button>
									</>
								}
							</td>
							<td>Nahida, Yaoyao</td>
						</tr>

						<tr>
							<td>Pseudo Stamens</td>
							<td>{1 * totalPerChar - pseudoStamens}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={pseudoStamens - counterPseudoStamens}
									onChange={(e) => setPseudoStamens(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button
											className="local-specialty-arrow-down"
											onClick={decrementCounterPseudoStamens}
										>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPseudoStamens)}</span>
										<button
											className="local-specialty-arrow-up"
											onClick={incrementCounterPseudoStamens}
										>
											+
										</button>
									</>
								}
							</td>
							<td>Alhaitham</td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 63 - LvUpMatTotalHave(...inputsHave)}</td>
							<td>{LvUpMatTotalHave(...inputsHave) - LvUpMatTotalUsed(...inputsUsed)}</td>
							<td>{LvUpMatTotalUsed(...inputsUsed)}</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default GenericLocalSpecialty;
