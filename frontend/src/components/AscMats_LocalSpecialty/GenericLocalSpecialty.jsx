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
	const [marionetteCore, setMarionetteCore] = useState(0);
	const [perpetualHeart, setPerpetualHeart] = useState(0);
	const [smolderingPearl, setSmolderingPearl] = useState(0);
	const [dewOfRepudiation, setDewOfRepudiation] = useState(0);
	const [stormBeads, setStormBeads] = useState(0);
	const [riftbornRegalia, setRiftbornRegalia] = useState(0);
	const [dragonheirsFalseFin, setDragonheirsFalseFin] = useState(0);
	const [runicFang, setRunicFang] = useState(0);
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
	const [counterMarionetteCore, setCounterMarionetteCore] = useState(0);
	const incrementCounterMarionetteCore = () => {
		setCounterMarionetteCore(counterMarionetteCore + 1);
	};
	const decrementCounterMarionetteCore = () => {
		if (counterMarionetteCore !== 0) {
			setCounterMarionetteCore(counterMarionetteCore - 1);
		}
	};
	const [counterPerpetualHeart, setCounterPerpetualHeart] = useState(0);
	const incrementCounterPerpetualHeart = () => {
		setCounterPerpetualHeart(counterPerpetualHeart + 1);
	};
	const decrementCounterPerpetualHeart = () => {
		if (counterPerpetualHeart !== 0) {
			setCounterPerpetualHeart(counterPerpetualHeart - 1);
		}
	};
	const [counterSmolderingPearl, setCounterSmolderingPearl] = useState(0);
	const incrementCounterSmolderingPearl = () => {
		setCounterSmolderingPearl(counterSmolderingPearl + 1);
	};
	const decrementCounterSmolderingPearl = () => {
		if (counterSmolderingPearl !== 0) {
			setCounterSmolderingPearl(counterSmolderingPearl - 1);
		}
	};
	const [counterDewOfRepudiation, setCounterDewOfRepudiation] = useState(0);
	const incrementCounterDewOfRepudiation = () => {
		setCounterDewOfRepudiation(counterDewOfRepudiation + 1);
	};
	const decrementCounterDewOfRepudiation = () => {
		if (counterDewOfRepudiation !== 0) {
			setCounterDewOfRepudiation(counterDewOfRepudiation - 1);
		}
	};
	const [counterStormBeads, setCounterStormBeads] = useState(0);
	const incrementCounterStormBeads = () => {
		setCounterStormBeads(counterStormBeads + 1);
	};
	const decrementCounterStormBeads = () => {
		if (counterStormBeads !== 0) {
			setCounterStormBeads(counterStormBeads - 1);
		}
	};
	const [counterRiftbornRegalia, setCounterRiftbornRegalia] = useState(0);
	const incrementCounterRiftbornRegalia = () => {
		setCounterRiftbornRegalia(counterRiftbornRegalia + 1);
	};
	const decrementCounterRiftbornRegalia = () => {
		if (counterRiftbornRegalia !== 0) {
			setCounterRiftbornRegalia(counterRiftbornRegalia - 1);
		}
	};
	const [counterDragonheirsFalseFin, setCounterDragonheirsFalseFin] = useState(0);
	const incrementCounterDragonheirsFalseFin = () => {
		setCounterDragonheirsFalseFin(counterDragonheirsFalseFin + 1);
	};
	const decrementCounterDragonheirsFalseFin = () => {
		if (counterDragonheirsFalseFin !== 0) {
			setCounterDragonheirsFalseFin(counterDragonheirsFalseFin - 1);
		}
	};
	const [counterRunicFang, setCounterRunicFang] = useState(0);
	const incrementCounterRunicFang = () => {
		setCounterRunicFang(counterRunicFang + 1);
	};
	const decrementCounterRunicFang = () => {
		if (counterRunicFang !== 0) {
			setCounterRunicFang(counterRunicFang - 1);
		}
	};
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
		marionetteCore,
		perpetualHeart,
		smolderingPearl,
		dewOfRepudiation,
		stormBeads,
		riftbornRegalia,
		dragonheirsFalseFin,
		runicFang,
		majesticHookedBeak,
		thunderclapFruitcore,
		perpetualCaliber,
		lightGuidingTetrahedron,
		quelledCreeper,
		pseudoStamens
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
		counterMarionetteCore,
		counterPerpetualHeart,
		counterSmolderingPearl,
		counterDewOfRepudiation,
		counterStormBeads,
		counterRiftbornRegalia,
		counterDragonheirsFalseFin,
		counterRunicFang,
		counterMajesticHookedBeak,
		counterThunderclapFruitcore,
		counterPerpetualCaliber,
		counterLightGuidingTetrahedron,
		counterQuelledCreeper,
		counterPseudoStamens
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
								<input type="number" className="local-specialty-num-input" value={callaLily - counterCallaLily} onChange={(e) => setCallaLily(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterCallaLily}>
											-
										</button>

										<span className="local-specialty-arrow-mid-number">{parseInt(counterCallaLily)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterCallaLily}>
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
								<input type="number" className="local-specialty-num-input" value={cecilia - counterCecilia} onChange={(e) => setCecilia(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterCecilia}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterCecilia)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterCecilia}>
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
								<input type="number" className="local-specialty-num-input" value={dandelionSeed - counterDandelionSeed} onChange={(e) => setDandelionSeed(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterDandelionSeed}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterDandelionSeed)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterDandelionSeed}>
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
										<button className="local-specialty-arrow-down" onClick={decrementCounterPhilanemoMushroom}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPhilanemoMushroom)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterPhilanemoMushroom}>
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
								<input type="number" className="local-specialty-num-input" value={smallLampGrass - counterSmallLampGrass} onChange={(e) => setSmallLampGrass(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSmallLampGrass}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSmallLampGrass)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSmallLampGrass}>
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
								<input type="number" className="local-specialty-num-input" value={valberry - counterValberry} onChange={(e) => setValberry(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterValberry}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterValberry)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterValberry}>
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
								<input type="number" className="local-specialty-num-input" value={windwheelAster - counterWindwheelAster} onChange={(e) => setWindwheelAster(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterWindwheelAster}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterWindwheelAster)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterWindwheelAster}>
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
								<input type="number" className="local-specialty-num-input" value={wolfhook - counterWolfhook} onChange={(e) => setWolfhook(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterWolfhook}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterWolfhook)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterWolfhook}>
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
							<td>Marionette Core</td>
							<td>{2 * totalPerChar - marionetteCore}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={marionetteCore - counterMarionetteCore} onChange={(e) => setMarionetteCore(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterMarionetteCore}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterMarionetteCore)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterMarionetteCore}>
											+
										</button>
									</>
								}
							</td>
							<td>Kazuha, Sayu</td>
						</tr>
						<tr>
							<td>Perpetual Heart</td>
							<td>{2 * totalPerChar - perpetualHeart}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={perpetualHeart - counterPerpetualHeart} onChange={(e) => setPerpetualHeart(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterPerpetualHeart}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPerpetualHeart)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterPerpetualHeart}>
											+
										</button>
									</>
								}
							</td>
							<td>Gorou, Ayaka</td>
						</tr>
						<tr>
							<td>Smoldering Pearl</td>
							<td>{2 * totalPerChar - smolderingPearl}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={smolderingPearl - counterSmolderingPearl}
									onChange={(e) => setSmolderingPearl(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSmolderingPearl}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSmolderingPearl)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSmolderingPearl}>
											+
										</button>
									</>
								}
							</td>
							<td>Thoma, Yoimia</td>
						</tr>
						<tr>
							<td>Dew of Repudiation</td>
							<td>{2 * totalPerChar - dewOfRepudiation}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={dewOfRepudiation - counterDewOfRepudiation}
									onChange={(e) => setDewOfRepudiation(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterDewOfRepudiation}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterDewOfRepudiation)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterDewOfRepudiation}>
											+
										</button>
									</>
								}
							</td>
							<td>Ayato, Kokomi</td>
						</tr>
						<tr>
							<td>Storm Beads</td>
							<td>{2 * totalPerChar - stormBeads}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={stormBeads - counterStormBeads} onChange={(e) => setStormBeads(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterStormBeads}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterStormBeads)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterStormBeads}>
											+
										</button>
									</>
								}
							</td>
							<td>Kujou Sara, Raiden</td>
						</tr>
						<tr>
							<td>Riftborn Regalia</td>
							<td>{2 * totalPerChar - riftbornRegalia}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={riftbornRegalia - counterRiftbornRegalia}
									onChange={(e) => setRiftbornRegalia(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterRiftbornRegalia}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterRiftbornRegalia)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterRiftbornRegalia}>
											+
										</button>
									</>
								}
							</td>
							<td>Itto, Yun Jin</td>
						</tr>
						<tr>
							<td>Dragonheir's False Fin</td>
							<td>{2 * totalPerChar - dragonheirsFalseFin}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={dragonheirsFalseFin - counterDragonheirsFalseFin}
									onChange={(e) => setDragonheirsFalseFin(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterDragonheirsFalseFin}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterDragonheirsFalseFin)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterDragonheirsFalseFin}>
											+
										</button>
									</>
								}
							</td>
							<td>Shenhe, Yae Miko</td>
						</tr>
						<tr>
							<td>Runic Fang</td>
							<td>{3 * totalPerChar - runicFang}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={runicFang - counterRunicFang} onChange={(e) => setRunicFang(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterRunicFang}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterRunicFang)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterRunicFang}>
											+
										</button>
									</>
								}
							</td>
							<td>Shinobu, Heizou, Yelan</td>
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
										<button className="local-specialty-arrow-down" onClick={decrementCounterMajesticHookedBeak}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterMajesticHookedBeak)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterMajesticHookedBeak}>
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
										<button className="local-specialty-arrow-down" onClick={decrementCounterThunderclapFruitcore}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterThunderclapFruitcore)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterThunderclapFruitcore}>
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
										<button className="local-specialty-arrow-down" onClick={decrementCounterPerpetualCaliber}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPerpetualCaliber)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterPerpetualCaliber}>
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
										<button className="local-specialty-arrow-down" onClick={decrementCounterLightGuidingTetrahedron}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterLightGuidingTetrahedron)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterLightGuidingTetrahedron}>
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
								<input type="number" className="local-specialty-num-input" value={quelledCreeper - counterQuelledCreeper} onChange={(e) => setQuelledCreeper(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterQuelledCreeper}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterQuelledCreeper)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterQuelledCreeper}>
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
								<input type="number" className="local-specialty-num-input" value={pseudoStamens - counterPseudoStamens} onChange={(e) => setPseudoStamens(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterPseudoStamens}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPseudoStamens)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterPseudoStamens}>
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
