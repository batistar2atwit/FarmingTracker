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
	//Inazuma
	const [onikabuto, setOnikabuto] = useState(0);
	const [sakuraBloom, setSakuraBloom] = useState(0);
	const [crystalMarrow, setCrystalMarrow] = useState(0);
	const [dendrobium, setDendrobium] = useState(0);
	const [nakuWeed, setNakuWeed] = useState(0);
	const [seaGanoderma, setSeaGanoderma] = useState(0);
	const [sangoPearl, setSangoPearl] = useState(0);
	const [amakumoFruit, setAmakumoFruit] = useState(0);
	const [fluorescentFungus, setFluorescentFungus] = useState(0);

	//Sumeru
	const [rukkhaMushrooms, setRukkhaMushrooms] = useState(0);
	const [padisarah, setPadisarah] = useState(0);
	const [nilotpalaLotus, setNilotpalaLotus] = useState(0);
	const [kalpalataLotus, setKalpalataLotus] = useState(0);
	const [hennaBerry, setHennaBerry] = useState(0);
	const [scarab, setScarab] = useState(0);
	const [sandGreasePupa, setSandGreasePupa] = useState(0);

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
	const [counterGlazeLily, setCounterGlazeLily] = useState(0);
	const incrementCounterGlazeLily = () => {
		setCounterGlazeLily(counterGlazeLily + 1);
	};
	const decrementCounterGlazeLily = () => {
		if (counterGlazeLily !== 0) {
			setCounterGlazeLily(counterGlazeLily - 1);
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
	//
	const [counterOnikabuto, setCounterOnikabuto] = useState(0);
	const incrementCounterOnikabuto = () => {
		setCounterOnikabuto(counterOnikabuto + 1);
	};
	const decrementCounterOnikabuto = () => {
		if (counterOnikabuto !== 0) {
			setCounterOnikabuto(counterOnikabuto - 1);
		}
	};
	//
	const [counterSakuraBloom, setCounterSakuraBloom] = useState(0);
	const incrementCounterSakuraBloom = () => {
		setCounterSakuraBloom(counterSakuraBloom + 1);
	};
	const decrementCounterSakuraBloom = () => {
		if (counterSakuraBloom !== 0) {
			setCounterSakuraBloom(counterSakuraBloom - 1);
		}
	};
	//
	const [counterCrystalMarrow, setCounterCrystalMarrow] = useState(0);
	const incrementCounterCrystalMarrow = () => {
		setCounterCrystalMarrow(counterCrystalMarrow + 1);
	};
	const decrementCounterCrystalMarrow = () => {
		if (counterCrystalMarrow !== 0) {
			setCounterCrystalMarrow(counterCrystalMarrow - 1);
		}
	};
	//
	const [counterDendrobium, setCounterDendrobium] = useState(0);
	const incrementCounterDendrobium = () => {
		setCounterDendrobium(counterDendrobium + 1);
	};
	const decrementCounterDendrobium = () => {
		if (counterDendrobium !== 0) {
			setCounterDendrobium(counterDendrobium - 1);
		}
	};
	//
	const [counterNakuWeed, setCounterNakuWeed] = useState(0);
	const incrementCounterNakuWeed = () => {
		setCounterNakuWeed(counterNakuWeed + 1);
	};
	const decrementCounterNakuWeed = () => {
		if (counterNakuWeed !== 0) {
			setCounterNakuWeed(counterNakuWeed - 1);
		}
	};
	//
	const [counterSeaGanoderma, setCounterSeaGanoderma] = useState(0);
	const incrementCounterSeaGanoderma = () => {
		setCounterSeaGanoderma(counterSeaGanoderma + 1);
	};
	const decrementCounterSeaGanoderma = () => {
		if (counterSeaGanoderma !== 0) {
			setCounterSeaGanoderma(counterSeaGanoderma - 1);
		}
	};
	//
	const [counterSangoPearl, setCounterSangoPearl] = useState(0);
	const incrementCounterSangoPearl = () => {
		setCounterSangoPearl(counterSangoPearl + 1);
	};
	const decrementCounterSangoPearl = () => {
		if (counterSangoPearl !== 0) {
			setCounterSangoPearl(counterSangoPearl - 1);
		}
	};
	//
	const [counterAmakumoFruit, setCounterAmakumoFruit] = useState(0);
	const incrementCounterAmakumoFruit = () => {
		setCounterAmakumoFruit(counterAmakumoFruit + 1);
	};
	const decrementCounterAmakumoFruit = () => {
		if (counterAmakumoFruit !== 0) {
			setCounterAmakumoFruit(counterAmakumoFruit - 1);
		}
	};
	//
	const [counterFluorescentFungus, setCounterFluorescentFungus] = useState(0);
	const incrementCounterFluorescentFungus = () => {
		setCounterFluorescentFungus(counterFluorescentFungus + 1);
	};
	const decrementCounterFluorescentFungus = () => {
		if (counterFluorescentFungus !== 0) {
			setCounterFluorescentFungus(counterFluorescentFungus - 1);
		}
	};
	//
	const [counterRukkhaMushrooms, setCounterRukkhaMushrooms] = useState(0);
	const incrementCounterRukkhaMushrooms = () => {
		setCounterRukkhaMushrooms(counterRukkhaMushrooms + 1);
	};
	const decrementCounterRukkhaMushrooms = () => {
		if (counterRukkhaMushrooms !== 0) {
			setCounterRukkhaMushrooms(counterRukkhaMushrooms - 1);
		}
	};
	//
	const [counterPadisarah, setCounterPadisarah] = useState(0);
	const incrementCounterPadisarah = () => {
		setCounterPadisarah(counterPadisarah + 1);
	};
	const decrementCounterPadisarah = () => {
		if (counterPadisarah !== 0) {
			setCounterPadisarah(counterPadisarah - 1);
		}
	};
	//
	const [counterNilotpalaLotus, setCounterNilotpalaLotus] = useState(0);
	const incrementCounterNilotpalaLotus = () => {
		setCounterNilotpalaLotus(counterNilotpalaLotus + 1);
	};
	const decrementCounterNilotpalaLotus = () => {
		if (counterNilotpalaLotus !== 0) {
			setCounterNilotpalaLotus(counterNilotpalaLotus - 1);
		}
	};
	//
	const [counterKalpalataLotus, setCounterKalpalataLotus] = useState(0);
	const incrementCounterKalpalataLotus = () => {
		setCounterKalpalataLotus(counterKalpalataLotus + 1);
	};
	const decrementCounterKalpalataLotus = () => {
		if (counterKalpalataLotus !== 0) {
			setCounterKalpalataLotus(counterKalpalataLotus - 1);
		}
	};
	//
	const [counterHennaBerry, setCounterHennaBerry] = useState(0);
	const incrementCounterHennaBerry = () => {
		setCounterHennaBerry(counterHennaBerry + 1);
	};
	const decrementCounterHennaBerry = () => {
		if (counterHennaBerry !== 0) {
			setCounterHennaBerry(counterHennaBerry - 1);
		}
	};
	//
	const [counterScarab, setCounterScarab] = useState(0);
	const incrementCounterScarab = () => {
		setCounterScarab(counterScarab + 1);
	};
	const decrementCounterScarab = () => {
		if (counterScarab !== 0) {
			setCounterScarab(counterScarab - 1);
		}
	};
	//
	const [counterSandGreasePupa, setCounterSandGreasePupa] = useState(0);
	const incrementCounterSandGreasePupa = () => {
		setCounterSandGreasePupa(counterSandGreasePupa + 1);
	};
	const decrementCounterSandGreasePupa = () => {
		if (counterSandGreasePupa !== 0) {
			setCounterSandGreasePupa(counterSandGreasePupa - 1);
		}
	};

	const MondTotalHave = (input1, input2, input3, input4, input5, input6, input7, input8) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8);
	};
	const MondTotalUsed = (input1, input2, input3, input4, input5, input6, input7, input8) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8);
	};

	const LiyueTotalHave = (input1, input2, input3, input4, input5, input6, input7, input8) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8);
	};
	const LiyueTotalUsed = (input1, input2, input3, input4, input5, input6, input7, input8) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8);
	};

	const Ina_TotalHave = (input1, input2, input3, input4, input5, input6, input7, input8, input9) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8) + parseInt(input9);
	};
	const Ina_TotalUsed = (input1, input2, input3, input4, input5, input6, input7, input8, input9) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7) + parseInt(input8) + parseInt(input9);
	};

	const Sum_TotalHave = (input1, input2, input3, input4, input5, input6, input7) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7);
	};
	const Sum_TotalUsed = (input1, input2, input3, input4, input5, input6, input7) => {
		return parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6) + parseInt(input7);
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
		onikabuto,
		sakuraBloom,
		crystalMarrow,
		dendrobium,
		nakuWeed,
		seaGanoderma,
		sangoPearl,
		amakumoFruit,
		fluorescentFungus,
		rukkhaMushrooms,
		padisarah,
		nilotpalaLotus,
		kalpalataLotus,
		hennaBerry,
		scarab,
		sandGreasePupa,
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
		counterGlazeLily,
		counterQingxin,
		counterStarconch,
		counterVioletgrass,
		counterCorLapis,
		counterOnikabuto,
		counterSakuraBloom,
		counterCrystalMarrow,
		counterDendrobium,
		counterNakuWeed,
		counterSeaGanoderma,
		counterSangoPearl,
		counterAmakumoFruit,
		counterFluorescentFungus,
		counterRukkhaMushrooms,
		counterPadisarah,
		counterNilotpalaLotus,
		counterKalpalataLotus,
		counterHennaBerry,
		counterScarab,
		counterSandGreasePupa,
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
		input22,
		input23,
		input24,
		input25,
		input26,
		input27,
		input28,
		input29,
		input30,
		input31,
		input32
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
			parseInt(input22) +
			parseInt(input23) +
			parseInt(input24) +
			parseInt(input25) +
			parseInt(input26) +
			parseInt(input27) +
			parseInt(input28) +
			parseInt(input29) +
			parseInt(input30) +
			parseInt(input31) +
			parseInt(input32)
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
		input22,
		input23,
		input24,
		input25,
		input26,
		input27,
		input28,
		input29,
		input30,
		input31,
		input32
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
			parseInt(input22) +
			parseInt(input23) +
			parseInt(input24) +
			parseInt(input25) +
			parseInt(input26) +
			parseInt(input27) +
			parseInt(input28) +
			parseInt(input29) +
			parseInt(input30) +
			parseInt(input31) +
			parseInt(input32)
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
							<th>Characters</th>
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
							<td>Diona, Kaeya</td>
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
							<td>Albedo, Venti</td>
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
							<td>Eula, Jean</td>
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
							<td>Barbara, Klee, Mona</td>
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
							<td>Amber, Diluc, Fischl</td>
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
							<td>Lisa, Noelle, Rosaria</td>
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
							<td>Bennett, Sucrose, Traveler</td>
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
							<td>Razor</td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 19 - MondTotalHave(callaLily, cecilia, dandelionSeed, philanemoMushroom, smallLampGrass, valberry, windwheelAster, wolfhook)}</td>
							<td>
								{MondTotalHave(callaLily, cecilia, dandelionSeed, philanemoMushroom, smallLampGrass, valberry, windwheelAster, wolfhook) -
									MondTotalUsed(counterCallaLily, counterCecilia, counterDandelionSeed, counterPhilanemoMushroom, counterSmallLampGrass, counterValberry, counterWindwheelAster, counterWolfhook)}
							</td>
							<td>{MondTotalUsed(counterCallaLily, counterCecilia, counterDandelionSeed, counterPhilanemoMushroom, counterSmallLampGrass, counterValberry, counterWindwheelAster, counterWolfhook)}</td>
							<td>19</td>
						</tr>
						<tr>
							<td colSpan={5}>Liyue</td>
						</tr>
						<tr>
							<td>Jueyun Chili</td>
							<td>{2 * totalPerChar - jueyunChili}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={jueyunChili - counterJueyunChili} onChange={(e) => setJueyunChili(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterJueyunChili}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterJueyunChili)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterJueyunChili}>
											+
										</button>
									</>
								}
							</td>
							<td>Xiangling, Yaoyao</td>
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
										<button className="local-specialty-arrow-down" onClick={decrementCounterNoctilucousJade}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterNoctilucousJade)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterNoctilucousJade}>
											+
										</button>
									</>
								}
							</td>
							<td>Beidou, Yanfei</td>
						</tr>
						<tr>
							<td>Silk Flower</td>
							<td>{2 * totalPerChar - silkFlower}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={silkFlower - counterSilkFlower} onChange={(e) => setSilkFlower(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSilkFlower}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSilkFlower)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSilkFlower}>
											+
										</button>
									</>
								}
							</td>
							<td>Hu Tao, Xingqiu</td>
						</tr>
						<tr>
							<td>Glaze Lily</td>
							<td>{2 * totalPerChar - glazeLily}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={glazeLily - counterGlazeLily} onChange={(e) => setGlazeLily(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterGlazeLily}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterGlazeLily)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterGlazeLily}>
											+
										</button>
									</>
								}
							</td>
							<td>Ningguang, Yun Jin</td>
						</tr>
						<tr>
							<td>Qingxin</td>
							<td>{3 * totalPerChar - qingxin}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={qingxin - counterQingxin} onChange={(e) => setQingxin(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterQingxin}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterQingxin)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterQingxin}>
											+
										</button>
									</>
								}
							</td>
							<td>Ganyu, Shenhe, Xiao</td>
						</tr>
						<tr>
							<td>Starconch</td>
							<td>{2 * totalPerChar - starconch}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={starconch - counterStarconch} onChange={(e) => setStarconch(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterStarconch}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterStarconch)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterStarconch}>
											+
										</button>
									</>
								}
							</td>
							<td>Tartaglia, Yelan</td>
						</tr>
						<tr>
							<td>Violetgrass</td>
							<td>{2 * totalPerChar - violetgrass}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={violetgrass - counterVioletgrass} onChange={(e) => setVioletgrass(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterVioletgrass}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterVioletgrass)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterVioletgrass}>
											+
										</button>
									</>
								}
							</td>
							<td>Qiqi, Xinyan</td>
						</tr>
						<tr>
							<td>Cor Lapis</td>
							<td>{3 * totalPerChar - corLapis}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={corLapis - counterCorLapis} onChange={(e) => setCorLapis(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterCorLapis}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterCorLapis)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterCorLapis}>
											+
										</button>
									</>
								}
							</td>
							<td>Chongyun, Keqing, Zhongli</td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 18 - LiyueTotalHave(jueyunChili, noctilucousJade, silkFlower, glazeLily, qingxin, starconch, violetgrass, corLapis)}</td>
							<td>
								{LiyueTotalHave(jueyunChili, noctilucousJade, silkFlower, glazeLily, qingxin, starconch, violetgrass, corLapis) -
									LiyueTotalUsed(counterJueyunChili, counterNoctilucousJade, counterSilkFlower, counterGlazeLily, counterQingxin, counterStarconch, counterVioletgrass, counterCorLapis)}
							</td>
							<td>{LiyueTotalUsed(counterJueyunChili, counterNoctilucousJade, counterSilkFlower, counterGlazeLily, counterQingxin, counterStarconch, counterVioletgrass, counterCorLapis)}</td>
							<td>18</td>
						</tr>
						<tr>
							<td colSpan={5}>Inazuma</td>
						</tr>
						<tr>
							<td>Onikabuto</td>
							<td>{2 * totalPerChar - onikabuto}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={onikabuto - counterOnikabuto} onChange={(e) => setOnikabuto(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterOnikabuto}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterOnikabuto)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterOnikabuto}>
											+
										</button>
									</>
								}
							</td>
							<td>Itto, Heizou</td>
						</tr>
						<tr>
							<td>Sakura Bloom</td>
							<td>{2 * totalPerChar - sakuraBloom}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={sakuraBloom - counterSakuraBloom} onChange={(e) => setSakuraBloom(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSakuraBloom}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSakuraBloom)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSakuraBloom}>
											+
										</button>
									</>
								}
							</td>
							<td>Ayaka, Ayato</td>
						</tr>

						<tr>
							<td>Crystal Marrow</td>
							<td>{2 * totalPerChar - crystalMarrow}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={crystalMarrow - counterCrystalMarrow} onChange={(e) => setCrystalMarrow(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterCrystalMarrow}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterCrystalMarrow)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterCrystalMarrow}>
											+
										</button>
									</>
								}
							</td>
							<td>Aloy, Sayu</td>
						</tr>
						<tr>
							<td>Dendrobium</td>
							<td>{1 * totalPerChar - dendrobium}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={dendrobium - counterDendrobium} onChange={(e) => setDendrobium(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterDendrobium}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterDendrobium)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterDendrobium}>
											+
										</button>
									</>
								}
							</td>
							<td>Kujou Sara</td>
						</tr>
						<tr>
							<td>Naku Weed</td>
							<td>{2 * totalPerChar - nakuWeed}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={nakuWeed - counterNakuWeed} onChange={(e) => setNakuWeed(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterNakuWeed}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterNakuWeed)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterNakuWeed}>
											+
										</button>
									</>
								}
							</td>
							<td>Shinobu, Yoimiya</td>
						</tr>
						<tr>
							<td>Sea Ganoderma</td>
							<td>{2 * totalPerChar - seaGanoderma}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={seaGanoderma - counterSeaGanoderma} onChange={(e) => setSeaGanoderma(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSeaGanoderma}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSeaGanoderma)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSeaGanoderma}>
											+
										</button>
									</>
								}
							</td>
							<td>Kazuha, Yae Miko</td>
						</tr>
						<tr>
							<td>Sango Pearl</td>
							<td>{2 * totalPerChar - sangoPearl}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={sangoPearl - counterSangoPearl} onChange={(e) => setSangoPearl(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSangoPearl}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSangoPearl)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSangoPearl}>
											+
										</button>
									</>
								}
							</td>
							<td>Gorou, Kokomi</td>
						</tr>
						<tr>
							<td>Amakumo Fruit</td>
							<td>{1 * totalPerChar - amakumoFruit}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={amakumoFruit - counterAmakumoFruit} onChange={(e) => setAmakumoFruit(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterAmakumoFruit}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterAmakumoFruit)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterAmakumoFruit}>
											+
										</button>
									</>
								}
							</td>
							<td>Raiden</td>
						</tr>
						<tr>
							<td>Fluorescent Fungus</td>
							<td>{1 * totalPerChar - fluorescentFungus}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={fluorescentFungus - counterFluorescentFungus}
									onChange={(e) => setFluorescentFungus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterFluorescentFungus}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterFluorescentFungus)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterFluorescentFungus}>
											+
										</button>
									</>
								}
							</td>
							<td>Thoma</td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 15 - Ina_TotalHave(onikabuto, sakuraBloom, crystalMarrow, dendrobium, nakuWeed, seaGanoderma, sangoPearl, amakumoFruit, fluorescentFungus)}</td>
							<td>
								{Ina_TotalHave(onikabuto, sakuraBloom, crystalMarrow, dendrobium, nakuWeed, seaGanoderma, sangoPearl, amakumoFruit, fluorescentFungus) -
									Ina_TotalUsed(
										counterOnikabuto,
										counterSakuraBloom,
										counterCrystalMarrow,
										counterDendrobium,
										counterNakuWeed,
										counterSeaGanoderma,
										counterSangoPearl,
										counterAmakumoFruit,
										counterFluorescentFungus
									)}
							</td>
							<td>
								{Ina_TotalUsed(
									counterOnikabuto,
									counterSakuraBloom,
									counterCrystalMarrow,
									counterDendrobium,
									counterNakuWeed,
									counterSeaGanoderma,
									counterSangoPearl,
									counterAmakumoFruit,
									counterFluorescentFungus
								)}
							</td>
							<td>15</td>
						</tr>
						<tr>
							<td colSpan={5}>Sumeru</td>
						</tr>
						<tr>
							<td>Rukkha Mushrooms</td>
							<td>{2 * totalPerChar - rukkhaMushrooms}</td>
							<td>
								<input
									type="number"
									className="local-specialty-num-input"
									value={rukkhaMushrooms - counterRukkhaMushrooms}
									onChange={(e) => setRukkhaMushrooms(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterRukkhaMushrooms}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterRukkhaMushrooms)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterRukkhaMushrooms}>
											+
										</button>
									</>
								}
							</td>
							<td>Collei, Wanderer</td>
						</tr>
						<tr>
							<td>Padisarah</td>
							<td>{1 * totalPerChar - padisarah}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={padisarah - counterPadisarah} onChange={(e) => setPadisarah(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterPadisarah}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterPadisarah)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterPadisarah}>
											+
										</button>
									</>
								}
							</td>
							<td>Nilou</td>
						</tr>
						<tr>
							<td>Nilotpala Lotus</td>
							<td>{2 * totalPerChar - nilotpalaLotus}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={nilotpalaLotus - counterNilotpalaLotus} onChange={(e) => setNilotpalaLotus(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterNilotpalaLotus}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterNilotpalaLotus)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterNilotpalaLotus}>
											+
										</button>
									</>
								}
							</td>
							<td>Layla, Tighnari</td>
						</tr>
						<tr>
							<td>Kalpalata Lotus</td>
							<td>{2 * totalPerChar - kalpalataLotus}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={kalpalataLotus - counterKalpalataLotus} onChange={(e) => setKalpalataLotus(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterKalpalataLotus}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterKalpalataLotus)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterKalpalataLotus}>
											+
										</button>
									</>
								}
							</td>
							<td>Dori, Nahida</td>
						</tr>
						<tr>
							<td>Henna Berry</td>
							<td>{2 * totalPerChar - hennaBerry}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={hennaBerry - counterHennaBerry} onChange={(e) => setHennaBerry(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterHennaBerry}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterHennaBerry)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterHennaBerry}>
											+
										</button>
									</>
								}
							</td>
							<td>Candace, Faruzan</td>
						</tr>
						<tr>
							<td>Scarab</td>
							<td>{1 * totalPerChar - scarab}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={scarab - counterScarab} onChange={(e) => setScarab(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterScarab}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterScarab)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterScarab}>
											+
										</button>
									</>
								}
							</td>
							<td>Cyno</td>
						</tr>
						<tr>
							<td>Sand Grease Pupa</td>
							<td>{2 * totalPerChar - sandGreasePupa}</td>
							<td>
								<input type="number" className="local-specialty-num-input" value={sandGreasePupa - counterSandGreasePupa} onChange={(e) => setSandGreasePupa(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="local-specialty-arrow-down" onClick={decrementCounterSandGreasePupa}>
											-
										</button>
										<span className="local-specialty-arrow-mid-number">{parseInt(counterSandGreasePupa)}</span>
										<button className="local-specialty-arrow-up" onClick={incrementCounterSandGreasePupa}>
											+
										</button>
									</>
								}
							</td>
							<td>Alhaitham, Dehya</td>
						</tr>
						<tr className="local-specialty-total-row">
							<td>TOTAL</td>
							<td>{totalPerChar * 12 - Sum_TotalHave(rukkhaMushrooms, padisarah, nilotpalaLotus, kalpalataLotus, hennaBerry, scarab, sandGreasePupa)}</td>
							<td>
								{Sum_TotalHave(rukkhaMushrooms, padisarah, nilotpalaLotus, kalpalataLotus, hennaBerry, scarab, sandGreasePupa) -
									Sum_TotalUsed(counterRukkhaMushrooms, counterPadisarah, counterNilotpalaLotus, counterKalpalataLotus, counterHennaBerry, counterScarab, counterSandGreasePupa)}
							</td>
							<td>{Sum_TotalUsed(counterRukkhaMushrooms, counterPadisarah, counterNilotpalaLotus, counterKalpalataLotus, counterHennaBerry, counterScarab, counterSandGreasePupa)}</td>
							<td>12</td>
						</tr>
						<tr className="total-specialty-total-row">
							<td>OVERALL</td>
							<td>{totalPerChar * 64 - LvUpMatTotalHave(...inputsHave)}</td>
							<td>{LvUpMatTotalHave(...inputsHave) - LvUpMatTotalUsed(...inputsUsed)}</td>
							<td>{LvUpMatTotalUsed(...inputsUsed)}</td>
							<td>64</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default GenericLocalSpecialty;
