import React, { useState } from 'react';

const GenericWorldBoss = () => {
	const [hurricaneSeed, setHurricaneSeed] = useState(0);
	const [lightningPrism, setLightningPrism] = useState(0);
	const [basaltPillar, setBasaltPillar] = useState(0);
	const [hoarfrostCore, setHoarfrostCore] = useState(0);
	const [everflameSeed, setEverflameSeed] = useState(0);
	const [cleansingHeart, setCleansingHeart] = useState(0);
	const [juvenileJade, setJuvenileJade] = useState(0);
	const [crystallineBloom, setCrystallineBloom] = useState(0);
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

	const totalWorldLvUpMatPerChar = 46;

	const [counterHurricaneSeed, setCounterHurricaneSeed] = useState(0);
	const incrementCounterHurricaneSeed = () => {
		setCounterHurricaneSeed(counterHurricaneSeed + 1);
	};
	const decrementCounterHurricaneSeed = () => {
		if (counterHurricaneSeed !== 0) {
			setCounterHurricaneSeed(counterHurricaneSeed - 1);
		}
	};

	const [counterLightningPrism, setCounterLightningPrism] = useState(0);
	const incrementCounterLightningPrism = () => {
		setCounterLightningPrism(counterLightningPrism + 1);
	};
	const decrementCounterLightningPrism = () => {
		if (counterLightningPrism !== 0) {
			setCounterLightningPrism(counterLightningPrism - 1);
		}
	};
	const [counterBasaltPillar, setCounterBasaltPillar] = useState(0);
	const incrementCounterBasaltPillar = () => {
		setCounterBasaltPillar(counterBasaltPillar + 1);
	};
	const decrementCounterBasaltPillar = () => {
		if (counterBasaltPillar !== 0) {
			setCounterBasaltPillar(counterBasaltPillar - 1);
		}
	};
	const [counterHoarfrostCore, setCounterHoarfrostCore] = useState(0);
	const incrementCounterHoarfrostCore = () => {
		setCounterHoarfrostCore(counterHoarfrostCore + 1);
	};
	const decrementCounterHoarfrostCore = () => {
		if (counterHoarfrostCore !== 0) {
			setCounterHoarfrostCore(counterHoarfrostCore - 1);
		}
	};
	const [counterEverflameSeed, setCounterEverflameSeed] = useState(0);
	const incrementCounterEverflameSeed = () => {
		setCounterEverflameSeed(counterEverflameSeed + 1);
	};
	const decrementCounterEverflameSeed = () => {
		if (counterEverflameSeed !== 0) {
			setCounterEverflameSeed(counterEverflameSeed - 1);
		}
	};
	const [counterCleansingHeart, setCounterCleansingHeart] = useState(0);
	const incrementCounterCleansingHeart = () => {
		setCounterCleansingHeart(counterCleansingHeart + 1);
	};
	const decrementCounterCleansingHeart = () => {
		if (counterCleansingHeart !== 0) {
			setCounterCleansingHeart(counterCleansingHeart - 1);
		}
	};
	const [counterJuvenileJade, setCounterJuvenileJade] = useState(0);
	const incrementCounterJuvenileJade = () => {
		setCounterJuvenileJade(counterJuvenileJade + 1);
	};
	const decrementCounterJuvenileJade = () => {
		if (counterJuvenileJade !== 0) {
			setCounterJuvenileJade(counterJuvenileJade - 1);
		}
	};
	const [counterCrystallineBloom, setCounterCrystallineBloom] = useState(0);
	const incrementCounterCrystallineBloom = () => {
		setCounterCrystallineBloom(counterCrystallineBloom + 1);
	};
	const decrementCounterCrystallineBloom = () => {
		if (counterCrystallineBloom !== 0) {
			setCounterCrystallineBloom(counterCrystallineBloom - 1);
		}
	};
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

	var inputsHave = [
		hurricaneSeed,
		lightningPrism,
		basaltPillar,
		hoarfrostCore,
		everflameSeed,
		cleansingHeart,
		juvenileJade,
		crystallineBloom,
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
		pseudoStamens,
	];
	var inputsUsed = [
		counterHurricaneSeed,
		counterLightningPrism,
		counterBasaltPillar,
		counterHoarfrostCore,
		counterEverflameSeed,
		counterCleansingHeart,
		counterJuvenileJade,
		counterCrystallineBloom,
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
			<h1 className="world-boss-mat-h1">World Boss - Acension Materials</h1>
			<div className="world-boss-block">
				<table className="world-boss-table">
					<thead className="world-boss-header">
						<tr>
							<th>Talent LevelUp Material</th>
							<th>Need</th>
							<th>Have</th>
							<th>Used</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Hurricane Seed</td>
							<td>{3 * totalWorldLvUpMatPerChar - hurricaneSeed}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={hurricaneSeed - counterHurricaneSeed} onChange={(e) => setHurricaneSeed(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterHurricaneSeed}>
											-
										</button>

										<span className="world-arrow-mid-number">{parseInt(counterHurricaneSeed)}</span>
										<button className="world-arrow-up" onClick={incrementCounterHurricaneSeed}>
											+
										</button>
									</>
								}
							</td>
							<td>Jean, Sucrose, Venti</td>
						</tr>
						<tr>
							<td>Lightning Prism</td>
							<td>{5 * totalWorldLvUpMatPerChar - lightningPrism}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={lightningPrism - counterLightningPrism} onChange={(e) => setLightningPrism(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterLightningPrism}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterLightningPrism)}</span>
										<button className="world-arrow-up" onClick={incrementCounterLightningPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Beidou, Fischl, Keqing, Lisa, Razor</td>
						</tr>
						<tr>
							<td>Basalt Pillar</td>
							<td>{4 * totalWorldLvUpMatPerChar - basaltPillar}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={basaltPillar - counterBasaltPillar} onChange={(e) => setBasaltPillar(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterBasaltPillar}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterBasaltPillar)}</span>
										<button className="world-arrow-up" onClick={incrementCounterBasaltPillar}>
											+
										</button>
									</>
								}
							</td>
							<td>Albedo, Ningguang, Noelle, Zhongli</td>
						</tr>
						<tr>
							<td>Hoarfrost Core</td>
							<td>{6 * totalWorldLvUpMatPerChar - hoarfrostCore}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={hoarfrostCore - counterHoarfrostCore} onChange={(e) => setHoarfrostCore(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterHoarfrostCore}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterHoarfrostCore)}</span>
										<button className="world-arrow-up" onClick={incrementCounterHoarfrostCore}>
											+
										</button>
									</>
								}
							</td>
							<td>Chongyun, Diona, Ganyu, Kaeya, Qiqi, Rosaria</td>
						</tr>
						<tr>
							<td>Everflame Seed</td>
							<td>{6 * totalWorldLvUpMatPerChar - everflameSeed} </td>
							<td>
								<input type="number" className="world-boss-num-input" value={everflameSeed - counterEverflameSeed} onChange={(e) => setEverflameSeed(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterEverflameSeed}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterEverflameSeed)}</span>
										<button className="world-arrow-up" onClick={incrementCounterEverflameSeed}>
											+
										</button>
									</>
								}
							</td>
							<td>Amber, Bennet, Diluc, Klee, Xiangling, Xinyan</td>
						</tr>
						<tr>
							<td>Cleansing Heart</td>
							<td>{4 * totalWorldLvUpMatPerChar - cleansingHeart}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={cleansingHeart - counterCleansingHeart} onChange={(e) => setCleansingHeart(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterCleansingHeart}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterCleansingHeart)}</span>
										<button className="world-arrow-up" onClick={incrementCounterCleansingHeart}>
											+
										</button>
									</>
								}
							</td>
							<td>Barbara, Mona, Tartaglia, Xingqiu</td>
						</tr>
						<tr>
							<td>Juvenile Jade</td>
							<td>{3 * totalWorldLvUpMatPerChar - juvenileJade}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={juvenileJade - counterJuvenileJade} onChange={(e) => setJuvenileJade(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterJuvenileJade}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterJuvenileJade)}</span>
										<button className="world-arrow-up" onClick={incrementCounterJuvenileJade}>
											+
										</button>
									</>
								}
							</td>
							<td>Hu Tao, Xiao, Yanfei</td>
						</tr>
						<tr>
							<td>Crystalline Bloom</td>
							<td>{2 * totalWorldLvUpMatPerChar - crystallineBloom}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={crystallineBloom - counterCrystallineBloom}
									onChange={(e) => setCrystallineBloom(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterCrystallineBloom}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterCrystallineBloom)}</span>
										<button className="world-arrow-up" onClick={incrementCounterCrystallineBloom}>
											+
										</button>
									</>
								}
							</td>
							<td>Aloy, Eula</td>
						</tr>
						<tr>
							<td>Marionette Core</td>
							<td>{2 * totalWorldLvUpMatPerChar - marionetteCore}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={marionetteCore - counterMarionetteCore} onChange={(e) => setMarionetteCore(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterMarionetteCore}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterMarionetteCore)}</span>
										<button className="world-arrow-up" onClick={incrementCounterMarionetteCore}>
											+
										</button>
									</>
								}
							</td>
							<td>Kazuha, Sayu</td>
						</tr>
						<tr>
							<td>Perpetual Heart</td>
							<td>{2 * totalWorldLvUpMatPerChar - perpetualHeart}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={perpetualHeart - counterPerpetualHeart} onChange={(e) => setPerpetualHeart(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterPerpetualHeart}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterPerpetualHeart)}</span>
										<button className="world-arrow-up" onClick={incrementCounterPerpetualHeart}>
											+
										</button>
									</>
								}
							</td>
							<td>Gorou, Ayaka</td>
						</tr>
						<tr>
							<td>Smoldering Pearl</td>
							<td>{2 * totalWorldLvUpMatPerChar - smolderingPearl}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={smolderingPearl - counterSmolderingPearl} onChange={(e) => setSmolderingPearl(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterSmolderingPearl}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterSmolderingPearl)}</span>
										<button className="world-arrow-up" onClick={incrementCounterSmolderingPearl}>
											+
										</button>
									</>
								}
							</td>
							<td>Thoma, Yoimia</td>
						</tr>
						<tr>
							<td>Dew of Repudiation</td>
							<td>{2 * totalWorldLvUpMatPerChar - dewOfRepudiation}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={dewOfRepudiation - counterDewOfRepudiation}
									onChange={(e) => setDewOfRepudiation(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterDewOfRepudiation}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterDewOfRepudiation)}</span>
										<button className="world-arrow-up" onClick={incrementCounterDewOfRepudiation}>
											+
										</button>
									</>
								}
							</td>
							<td>Ayato, Kokomi</td>
						</tr>
						<tr>
							<td>Storm Beads</td>
							<td>{2 * totalWorldLvUpMatPerChar - stormBeads}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={stormBeads - counterStormBeads} onChange={(e) => setStormBeads(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterStormBeads}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterStormBeads)}</span>
										<button className="world-arrow-up" onClick={incrementCounterStormBeads}>
											+
										</button>
									</>
								}
							</td>
							<td>Kujou Sara, Raiden</td>
						</tr>
						<tr>
							<td>Riftborn Regalia</td>
							<td>{2 * totalWorldLvUpMatPerChar - riftbornRegalia}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={riftbornRegalia - counterRiftbornRegalia} onChange={(e) => setRiftbornRegalia(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterRiftbornRegalia}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterRiftbornRegalia)}</span>
										<button className="world-arrow-up" onClick={incrementCounterRiftbornRegalia}>
											+
										</button>
									</>
								}
							</td>
							<td>Itto, Yun Jin</td>
						</tr>
						<tr>
							<td>Dragonheir's False Fin</td>
							<td>{2 * totalWorldLvUpMatPerChar - dragonheirsFalseFin}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={dragonheirsFalseFin - counterDragonheirsFalseFin}
									onChange={(e) => setDragonheirsFalseFin(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterDragonheirsFalseFin}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterDragonheirsFalseFin)}</span>
										<button className="world-arrow-up" onClick={incrementCounterDragonheirsFalseFin}>
											+
										</button>
									</>
								}
							</td>
							<td>Shenhe, Yae Miko</td>
						</tr>
						<tr>
							<td>Runic Fang</td>
							<td>{3 * totalWorldLvUpMatPerChar - runicFang}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={runicFang - counterRunicFang} onChange={(e) => setRunicFang(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterRunicFang}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterRunicFang)}</span>
										<button className="world-arrow-up" onClick={incrementCounterRunicFang}>
											+
										</button>
									</>
								}
							</td>
							<td>Shinobu, Heizou, Yelan</td>
						</tr>
						<tr>
							<td>Majestic Hooked Beak</td>
							<td>{2 * totalWorldLvUpMatPerChar - majesticHookedBeak}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={majesticHookedBeak - counterMajesticHookedBeak}
									onChange={(e) => setMajesticHookedBeak(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterMajesticHookedBeak}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterMajesticHookedBeak)}</span>
										<button className="world-arrow-up" onClick={incrementCounterMajesticHookedBeak}>
											+
										</button>
									</>
								}
							</td>
							<td> Collei, Tighnari</td>
						</tr>
						<tr>
							<td>Thunderclap Fruitcore</td>
							<td>{2 * totalWorldLvUpMatPerChar - thunderclapFruitcore}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={thunderclapFruitcore - counterThunderclapFruitcore}
									onChange={(e) => setThunderclapFruitcore(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterThunderclapFruitcore}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterThunderclapFruitcore)}</span>
										<button className="world-arrow-up" onClick={incrementCounterThunderclapFruitcore}>
											+
										</button>
									</>
								}
							</td>
							<td>Cyno, Dori</td>
						</tr>

						<tr>
							<td>Perpetual Caliber</td>
							<td>{3 * totalWorldLvUpMatPerChar - perpetualCaliber}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={perpetualCaliber - counterPerpetualCaliber}
									onChange={(e) => setPerpetualCaliber(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterPerpetualCaliber}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterPerpetualCaliber)}</span>
										<button className="world-arrow-up" onClick={incrementCounterPerpetualCaliber}>
											+
										</button>
									</>
								}
							</td>
							<td>Layla,Nilou, Wanderer</td>
						</tr>
						<tr>
							<td>Light Guiding Tetrahedron</td>
							<td>{3 * totalWorldLvUpMatPerChar - lightGuidingTetrahedron}</td>
							<td>
								<input
									type="number"
									className="world-boss-num-input"
									value={lightGuidingTetrahedron - counterLightGuidingTetrahedron}
									onChange={(e) => setLightGuidingTetrahedron(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterLightGuidingTetrahedron}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterLightGuidingTetrahedron)}</span>
										<button className="world-arrow-up" onClick={incrementCounterLightGuidingTetrahedron}>
											+
										</button>
									</>
								}
							</td>
							<td>Candace, Dehya, Faruzan</td>
						</tr>
						<tr>
							<td>Quelled Creeper</td>
							<td>{2 * totalWorldLvUpMatPerChar - quelledCreeper}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={quelledCreeper - counterQuelledCreeper} onChange={(e) => setQuelledCreeper(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterQuelledCreeper}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterQuelledCreeper)}</span>
										<button className="world-arrow-up" onClick={incrementCounterQuelledCreeper}>
											+
										</button>
									</>
								}
							</td>
							<td>Nahida, Yaoyao</td>
						</tr>

						<tr>
							<td>Pseudo Stamens</td>
							<td>{1 * totalWorldLvUpMatPerChar - pseudoStamens}</td>
							<td>
								<input type="number" className="world-boss-num-input" value={pseudoStamens - counterPseudoStamens} onChange={(e) => setPseudoStamens(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="world-arrow-down" onClick={decrementCounterPseudoStamens}>
											-
										</button>
										<span className="world-arrow-mid-number">{parseInt(counterPseudoStamens)}</span>
										<button className="world-arrow-up" onClick={incrementCounterPseudoStamens}>
											+
										</button>
									</>
								}
							</td>
							<td>Alhaitham</td>
						</tr>
						<tr className="world-total-row">
							<td>TOTAL</td>
							<td>{totalWorldLvUpMatPerChar * 63 - LvUpMatTotalHave(...inputsHave)}</td>
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

export default GenericWorldBoss;
