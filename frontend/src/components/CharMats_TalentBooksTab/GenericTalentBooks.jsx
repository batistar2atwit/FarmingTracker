import React, { useState } from 'react';

const GenericTalentBooks = () => {
	//DVALIN Talent LV Up Materials

	const LvUpMatTotalHave = (talentHave1, talentHave2, talentHave3) => {
		return parseInt(talentHave1) + parseInt(talentHave2) + parseInt(talentHave3);
	};
	const LvUpMatTotalUsed = (talentUsed1, talentUsed2, talentUsed3) => {
		return parseInt(talentUsed1) + parseInt(talentUsed2) + parseInt(talentUsed3);
	};

	const [freedom1, setFreedom1] = useState(0);
	const [freedom2, setFreedom2] = useState(0);
	const [freedom3, setFreedom3] = useState(0);

	const [resistance1, setResistance1] = useState(0);
	const [resistance2, setResistance2] = useState(0);
	const [resistance3, setResistance3] = useState(0);

	const [ballad1, setBallad1] = useState(0);
	const [ballad2, setBallad2] = useState(0);
	const [ballad3, setBallad3] = useState(0);

	const [prosperity1, setProsperity1] = useState(0);
	const [prosperity2, setProsperity2] = useState(0);
	const [prosperity3, setProsperity3] = useState(0);

	const [diligence1, setDiligence1] = useState(0);
	const [diligence2, setDiligence2] = useState(0);
	const [diligence3, setDiligence3] = useState(0);

	const [gold1, setGold1] = useState(0);
	const [gold2, setGold2] = useState(0);
	const [gold3, setGold3] = useState(0);

	const [transience1, setTransience1] = useState(0);
	const [transience2, setTransience2] = useState(0);
	const [transience3, setTransience3] = useState(0);

	const [elegance1, setElegance1] = useState(0);
	const [elegance2, setElegance2] = useState(0);
	const [elegance3, setElegance3] = useState(0);

	const [light1, setLight1] = useState(0);
	const [light2, setLight2] = useState(0);
	const [light3, setLight3] = useState(0);

	const [admonition1, setAdmonition1] = useState(0);
	const [admonition2, setAdmonition2] = useState(0);
	const [admonition3, setAdmonition3] = useState(0);

	const [ingenuity1, setIngenuity1] = useState(0);
	const [ingenuity2, setIngenuity2] = useState(0);
	const [ingenuity3, setIngenuity3] = useState(0);

	const [praxis1, setPraxis1] = useState(0);
	const [praxis2, setPraxis2] = useState(0);
	const [praxis3, setPraxis3] = useState(0);

	//6 talent mat times 3 skills
	const totalTalentLvUpPerChar1 = 3 * 3;
	const totalTalentLvUpPerChar2 = 21 * 3;
	const totalTalentLvUpPerChar3 = 38 * 3;
	//
	const [counterFreedom11, setCounterFreedom11] = useState(0);
	const incrementCounterFreedom11 = () => {
		setCounterFreedom11(counterFreedom11 + 1);
	};
	const decrementCounterFreedom11 = () => {
		if (counterFreedom11 !== 0) {
			setCounterFreedom11(counterFreedom11 - 1);
		}
	};
	//
	const [counterFreedom2, setCounterFreedom2] = useState(0);
	const incrementCounterFreedom2 = () => {
		setCounterFreedom2(counterFreedom2 + 1);
	};
	const decrementCounterFreedom2 = () => {
		if (counterFreedom2 !== 0) {
			setCounterFreedom2(counterFreedom2 - 1);
		}
	};
	//
	const [counterFreedom3, setCounterFreedom3] = useState(0);
	const incrementCounterFreedom3 = () => {
		setCounterFreedom3(counterFreedom3 + 1);
	};
	const decrementCounterFreedom3 = () => {
		if (counterFreedom3 !== 0) {
			setCounterFreedom3(counterFreedom3 - 1);
		}
	};

	//
	const [counterResistance1, setCounterResistance1] = useState(0);
	const incrementCounterResistance1 = () => {
		setCounterResistance1(counterResistance1 + 1);
	};
	const decrementCounterResistance1 = () => {
		if (counterResistance1 !== 0) {
			setCounterResistance1(counterResistance1 - 1);
		}
	};
	//
	const [counterResistance2, setCounterResistance2] = useState(0);
	const incrementCounterResistance2 = () => {
		setCounterResistance2(counterResistance2 + 1);
	};
	const decrementCounterResistance2 = () => {
		if (counterResistance2 !== 0) {
			setCounterResistance2(counterResistance2 - 1);
		}
	};
	//
	const [counterResistance3, setCounterResistance3] = useState(0);
	const incrementCounterResistance3 = () => {
		setCounterResistance3(counterResistance3 + 1);
	};
	const decrementCounterResistance3 = () => {
		if (counterResistance3 !== 0) {
			setCounterResistance3(counterResistance3 - 1);
		}
	};

	//
	const [counterBallad1, setCounterBallad1] = useState(0);
	const incrementCounterBallad1 = () => {
		setCounterBallad1(counterBallad1 + 1);
	};
	const decrementCounterBallad1 = () => {
		if (counterBallad1 !== 0) {
			setCounterBallad1(counterBallad1 - 1);
		}
	};
	//
	const [counterBallad2, setCounterBallad2] = useState(0);
	const incrementCounterBallad2 = () => {
		setCounterBallad2(counterBallad2 + 1);
	};
	const decrementCounterBallad2 = () => {
		if (counterBallad2 !== 0) {
			setCounterBallad2(counterBallad2 - 1);
		}
	};
	//
	const [counterBallad3, setCounterBallad3] = useState(0);
	const incrementCounterBallad3 = () => {
		setCounterBallad3(counterBallad3 + 1);
	};
	const decrementCounterBallad3 = () => {
		if (counterBallad3 !== 0) {
			setCounterBallad3(counterBallad3 - 1);
		}
	};

	//
	const [counterProsperity1, setCounterProsperity1] = useState(0);
	const incrementCounterProsperity1 = () => {
		setCounterProsperity1(counterProsperity1 + 1);
	};
	const decrementCounterProsperity1 = () => {
		if (counterProsperity1 !== 0) {
			setCounterProsperity1(counterProsperity1 - 1);
		}
	};
	//
	const [counterProsperity2, setCounterProsperity2] = useState(0);
	const incrementCounterProsperity2 = () => {
		setCounterProsperity2(counterProsperity2 + 1);
	};
	const decrementCounterProsperity2 = () => {
		if (counterProsperity2 !== 0) {
			setCounterProsperity2(counterProsperity2 - 1);
		}
	};
	//
	const [counterProsperity3, setCounterProsperity3] = useState(0);
	const incrementCounterProsperity3 = () => {
		setCounterProsperity3(counterProsperity3 + 1);
	};
	const decrementCounterProsperity3 = () => {
		if (counterProsperity3 !== 0) {
			setCounterProsperity3(counterProsperity3 - 1);
		}
	};

	//
	const [counterDiligence1, setCounterDiligence1] = useState(0);
	const incrementCounterDiligence1 = () => {
		setCounterDiligence1(counterDiligence1 + 1);
	};
	const decrementCounterDiligence1 = () => {
		if (counterDiligence1 !== 0) {
			setCounterDiligence1(counterDiligence1 - 1);
		}
	};
	//
	const [counterDiligence2, setCounterDiligence2] = useState(0);
	const incrementCounterDiligence2 = () => {
		setCounterDiligence2(counterDiligence2 + 1);
	};
	const decrementCounterDiligence2 = () => {
		if (counterDiligence2 !== 0) {
			setCounterDiligence2(counterDiligence2 - 1);
		}
	};
	//
	const [counterDiligence3, setCounterDiligence3] = useState(0);
	const incrementCounterDiligence3 = () => {
		setCounterDiligence3(counterDiligence3 + 1);
	};
	const decrementCounterDiligence3 = () => {
		if (counterDiligence3 !== 0) {
			setCounterDiligence3(counterDiligence3 - 1);
		}
	};

	//
	const [counterGold1, setCounterGold1] = useState(0);
	const incrementCounterGold1 = () => {
		setCounterGold1(counterGold1 + 1);
	};
	const decrementCounterGold1 = () => {
		if (counterGold1 !== 0) {
			setCounterGold1(counterGold1 - 1);
		}
	};
	//
	const [counterGold2, setCounterGold2] = useState(0);
	const incrementCounterGold2 = () => {
		setCounterGold2(counterGold2 + 1);
	};
	const decrementCounterGold2 = () => {
		if (counterGold2 !== 0) {
			setCounterGold2(counterGold2 - 1);
		}
	};
	//
	const [counterGold3, setCounterGold3] = useState(0);
	const incrementCounterGold3 = () => {
		setCounterGold3(counterGold3 + 1);
	};
	const decrementCounterGold3 = () => {
		if (counterGold3 !== 0) {
			setCounterGold3(counterGold3 - 1);
		}
	};

	//
	const [counterTransience1, setCounterTransience1] = useState(0);
	const incrementCounterTransience1 = () => {
		setCounterTransience1(counterTransience1 + 1);
	};
	const decrementCounterTransience1 = () => {
		if (counterTransience1 !== 0) {
			setCounterTransience1(counterTransience1 - 1);
		}
	};
	//
	const [counterTransience2, setCounterTransience2] = useState(0);
	const incrementCounterTransience2 = () => {
		setCounterTransience2(counterTransience2 + 1);
	};
	const decrementCounterTransience2 = () => {
		if (counterTransience2 !== 0) {
			setCounterTransience2(counterTransience2 - 1);
		}
	};
	//
	const [counterTransience3, setCounterTransience3] = useState(0);
	const incrementCounterTransience3 = () => {
		setCounterTransience3(counterTransience3 + 1);
	};
	const decrementCounterTransience3 = () => {
		if (counterTransience3 !== 0) {
			setCounterTransience3(counterTransience3 - 1);
		}
	};
	//
	const [counterElegance1, setCounterElegance1] = useState(0);
	const incrementCounterElegance1 = () => {
		setCounterElegance1(counterElegance1 + 1);
	};
	const decrementCounterElegance1 = () => {
		if (counterElegance1 !== 0) {
			setCounterElegance1(counterElegance1 - 1);
		}
	};
	//
	const [counterElegance2, setCounterElegance2] = useState(0);
	const incrementCounterElegance2 = () => {
		setCounterElegance2(counterElegance2 + 1);
	};
	const decrementCounterElegance2 = () => {
		if (counterElegance2 !== 0) {
			setCounterElegance2(counterElegance2 - 1);
		}
	};
	//
	const [counterElegance3, setCounterElegance3] = useState(0);
	const incrementCounterElegance3 = () => {
		setCounterElegance3(counterElegance3 + 1);
	};
	const decrementCounterElegance3 = () => {
		if (counterElegance3 !== 0) {
			setCounterElegance3(counterElegance3 - 1);
		}
	};
	//
	const [counterLight1, setCounterLight1] = useState(0);
	const incrementCounterLight1 = () => {
		setCounterLight1(counterLight1 + 1);
	};
	const decrementCounterLight1 = () => {
		if (counterLight1 !== 0) {
			setCounterLight1(counterLight1 - 1);
		}
	};
	//
	const [counterLight2, setCounterLight2] = useState(0);
	const incrementCounterLight2 = () => {
		setCounterLight2(counterLight2 + 1);
	};
	const decrementCounterLight2 = () => {
		if (counterLight2 !== 0) {
			setCounterLight2(counterLight2 - 1);
		}
	};
	//
	const [counterLight3, setCounterLight3] = useState(0);
	const incrementCounterLight3 = () => {
		setCounterLight3(counterLight3 + 1);
	};
	const decrementCounterLight3 = () => {
		if (counterLight3 !== 0) {
			setCounterLight3(counterLight3 - 1);
		}
	};
	//
	const [counterAdmonition1, setCounterAdmonition1] = useState(0);
	const incrementCounterAdmonition1 = () => {
		setCounterAdmonition1(counterAdmonition1 + 1);
	};
	const decrementCounterAdmonition1 = () => {
		if (counterAdmonition1 !== 0) {
			setCounterAdmonition1(counterAdmonition1 - 1);
		}
	};
	//
	const [counterAdmonition2, setCounterAdmonition2] = useState(0);
	const incrementCounterAdmonition2 = () => {
		setCounterAdmonition2(counterAdmonition2 + 1);
	};
	const decrementCounterAdmonition2 = () => {
		if (counterAdmonition2 !== 0) {
			setCounterAdmonition2(counterAdmonition2 - 1);
		}
	};
	//
	const [counterAdmonition3, setCounterAdmonition3] = useState(0);
	const incrementCounterAdmonition3 = () => {
		setCounterAdmonition3(counterAdmonition3 + 1);
	};
	const decrementCounterAdmonition3 = () => {
		if (counterAdmonition3 !== 0) {
			setCounterAdmonition3(counterAdmonition3 - 1);
		}
	};
	//
	const [counterIngenuity1, setCounterIngenuity1] = useState(0);
	const incrementCounterIngenuity1 = () => {
		setCounterIngenuity1(counterIngenuity1 + 1);
	};
	const decrementCounterIngenuity1 = () => {
		if (counterIngenuity1 !== 0) {
			setCounterIngenuity1(counterIngenuity1 - 1);
		}
	};
	//
	const [counterIngenuity2, setCounterIngenuity2] = useState(0);
	const incrementCounterIngenuity2 = () => {
		setCounterIngenuity2(counterIngenuity2 + 1);
	};
	const decrementCounterIngenuity2 = () => {
		if (counterIngenuity2 !== 0) {
			setCounterIngenuity2(counterIngenuity2 - 1);
		}
	};
	//
	const [counterIngenuity3, setCounterIngenuity3] = useState(0);
	const incrementCounterIngenuity3 = () => {
		setCounterIngenuity3(counterIngenuity3 + 1);
	};
	const decrementCounterIngenuity3 = () => {
		if (counterIngenuity3 !== 0) {
			setCounterIngenuity3(counterIngenuity3 - 1);
		}
	};

	const [counterPraxis1, setCounterPraxis1] = useState(0);
	const incrementCounterPraxis1 = () => {
		setCounterPraxis1(counterPraxis1 + 1);
	};
	const decrementCounterPraxis1 = () => {
		if (counterPraxis1 !== 0) {
			setCounterPraxis1(counterPraxis1 - 1);
		}
	};
	const [counterPraxis2, setCounterPraxis2] = useState(0);
	const incrementCounterPraxis2 = () => {
		setCounterPraxis2(counterPraxis2 + 1);
	};
	const decrementCounterPraxis2 = () => {
		if (counterPraxis2 !== 0) {
			setCounterPraxis2(counterPraxis2 - 1);
		}
	};
	const [counterPraxis3, setCounterPraxis3] = useState(0);
	const incrementCounterPraxis3 = () => {
		setCounterPraxis3(counterPraxis3 + 1);
	};
	const decrementCounterPraxis3 = () => {
		if (counterPraxis3 !== 0) {
			setCounterPraxis3(counterPraxis3 - 1);
		}
	};

	const inputsHave1 = [freedom1, resistance1, ballad1, prosperity1, diligence1, gold1, transience1, elegance1, light1, admonition1, ingenuity1, praxis1];
	const inputsHave2 = [freedom2, resistance2, ballad2, prosperity2, diligence2, gold2, transience2, elegance2, light2, admonition2, ingenuity2, praxis2];
	const inputsHave3 = [freedom3, resistance3, ballad3, prosperity3, diligence3, gold3, transience3, elegance3, light3, admonition3, ingenuity3, praxis3];
	const inputsUsed1 = [
		counterFreedom11,
		counterResistance1,
		counterBallad1,
		counterProsperity1,
		counterDiligence1,
		counterGold1,
		counterTransience1,
		counterElegance1,
		counterLight1,
		counterAdmonition1,
		counterIngenuity1,
		counterPraxis1,
	];
	const inputsUsed2 = [
		counterFreedom2,
		counterResistance2,
		counterBallad2,
		counterProsperity2,
		counterDiligence2,
		counterGold2,
		counterTransience2,
		counterElegance2,
		counterLight2,
		counterAdmonition2,
		counterIngenuity2,
		counterPraxis2,
	];
	const inputsUsed3 = [
		counterFreedom3,
		counterResistance3,
		counterBallad3,
		counterProsperity3,
		counterDiligence3,
		counterGold3,
		counterTransience3,
		counterElegance3,
		counterLight3,
		counterAdmonition3,
		counterIngenuity3,
		counterPraxis3,
	];

	const OverallTotalHave = (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12) => {
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
			parseInt(input12)
		);
	};

	const OverallTotalUsed = (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12) => {
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
			parseInt(input12)
		);
	};

	return (
		<div>
			<h1 className="talent-books-h1">Talent Books - Level-Up Materials</h1>
			<div className="talent-books-block">
				<table className="talent-books-table">
					<thead className="talent-books-header">
						<tr>
							<th>Talent Books</th>
							<th>Need</th>
							<th>Have</th>
							<th>Used</th>
							<th>Characters</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="5">Mondstadt - Forsaken Rift</td>
						</tr>
						<tr>
							<td colSpan="4">Freedom Books</td>
							<td colSpan="1">Monday / Thursday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{7 * totalTalentLvUpPerChar1 - freedom1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={freedom1 - counterFreedom11} onChange={(e) => setFreedom1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterFreedom11}>
											-
										</button>

										<span className="talent-books-arrow-mid-number">{parseInt(counterFreedom11)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterFreedom11}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{7 * totalTalentLvUpPerChar2 - freedom2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={freedom2 - counterFreedom3} onChange={(e) => setFreedom2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterFreedom3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterFreedom3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterFreedom3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{7 * totalTalentLvUpPerChar3 - freedom3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={freedom3 - counterFreedom2} onChange={(e) => setFreedom3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterFreedom2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterFreedom2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterFreedom2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL </td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 7 - LvUpMatTotalHave(freedom1, freedom2, freedom3)}</td>
							<td>{LvUpMatTotalHave(freedom1, freedom2, freedom3) - LvUpMatTotalUsed(counterFreedom11, counterFreedom3, counterFreedom2)}</td>
							<td>{LvUpMatTotalUsed(counterFreedom11, counterFreedom3, counterFreedom2)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="4">Resistance Books</td>
							<td colSpan="1">Tuesday / Friday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{5 * totalTalentLvUpPerChar1 - resistance1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={resistance1 - counterResistance1} onChange={(e) => setResistance1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterResistance1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterResistance1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterResistance1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Bennett, Diluc, Eula, Jean, Mona, Noelle, Razor</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{5 * totalTalentLvUpPerChar2 - resistance2} </td>
							<td>
								<input type="number" className="talent-books-num-input" value={resistance2 - counterResistance2} onChange={(e) => setResistance2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterResistance2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterResistance2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterResistance2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{5 * totalTalentLvUpPerChar3 - resistance3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={resistance3 - counterResistance3} onChange={(e) => setResistance3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterResistance3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterResistance3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterResistance3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 5 - LvUpMatTotalHave(resistance1, resistance2, resistance3)}</td>
							<td>{LvUpMatTotalHave(resistance1, resistance2, resistance3) - LvUpMatTotalUsed(counterResistance1, counterResistance2, counterResistance3)}</td>
							<td>{LvUpMatTotalUsed(counterResistance1, counterResistance2, counterResistance3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="4">Ballad Books</td>
							<td colSpan="1">Wednesday / Saturday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{6 * totalTalentLvUpPerChar1 - ballad1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={ballad1 - counterBallad1} onChange={(e) => setBallad1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterBallad1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterBallad1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterBallad1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Albedo, Fischl, Kaeya, Lisa, Rosaria, Venti</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{6 * totalTalentLvUpPerChar2 - ballad2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={ballad2 - counterBallad2} onChange={(e) => setBallad2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterBallad2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterBallad2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterBallad2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{6 * totalTalentLvUpPerChar3 - ballad3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={ballad3 - counterBallad3} onChange={(e) => setBallad3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterBallad3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterBallad3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterBallad3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 6 - LvUpMatTotalHave(ballad1, ballad2, ballad3)}</td>
							<td>{LvUpMatTotalHave(ballad1, ballad2, ballad3) - LvUpMatTotalUsed(counterBallad1, counterBallad2, counterBallad3)}</td>
							<td>{LvUpMatTotalUsed(counterBallad1, counterBallad2, counterBallad3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="5">Liyue - Taishan Mansion</td>
						</tr>
						<tr>
							<td colSpan="4">Prosperity Books</td>
							<td colSpan="1">Monday / Thursday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{6 * totalTalentLvUpPerChar1 - prosperity1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={prosperity1 - counterProsperity1} onChange={(e) => setProsperity1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterProsperity1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterProsperity1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterProsperity1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Keqing, Ningguang, Qiqi, Shenhe, Xiao, Yelan</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{6 * totalTalentLvUpPerChar2 - prosperity2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={prosperity2 - counterProsperity2} onChange={(e) => setProsperity2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterProsperity2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterProsperity2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterProsperity2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{6 * totalTalentLvUpPerChar3 - prosperity3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={prosperity3 - counterProsperity3} onChange={(e) => setProsperity3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterProsperity3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterProsperity3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterProsperity3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 6 - LvUpMatTotalHave(prosperity1, prosperity2, prosperity3)}</td>
							<td>{LvUpMatTotalHave(prosperity1, prosperity2, prosperity3) - LvUpMatTotalUsed(counterProsperity1, counterProsperity2, counterProsperity3)}</td>
							<td>{LvUpMatTotalUsed(counterProsperity1, counterProsperity2, counterProsperity3)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="4">Diligence Books</td>
							<td colSpan="1">Tuesday / Friday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{7 * totalTalentLvUpPerChar1 - diligence1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={diligence1 - counterDiligence1} onChange={(e) => setDiligence1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterDiligence1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterDiligence1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterDiligence1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Chongyun, Ganyu, Hu Tao, Kazuha, Xiangling, Yaoyao, Yun Jin</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{7 * totalTalentLvUpPerChar2 - diligence2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={diligence2 - counterDiligence2} onChange={(e) => setDiligence2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterDiligence2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterDiligence2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterDiligence2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{7 * totalTalentLvUpPerChar3 - diligence3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={diligence3 - counterDiligence3} onChange={(e) => setDiligence3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterDiligence3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterDiligence3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterDiligence3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 7 - LvUpMatTotalHave(diligence1, diligence2, diligence3)}</td>
							<td>{LvUpMatTotalHave(diligence1, diligence2, diligence3) - LvUpMatTotalUsed(counterDiligence1, counterDiligence2, counterDiligence3)}</td>
							<td>{LvUpMatTotalUsed(counterDiligence1, counterDiligence2, counterDiligence3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="4">Gold Books</td>
							<td colSpan="1">Wednesday / Saturday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{5 * totalTalentLvUpPerChar1 - gold1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={gold1 - counterGold1} onChange={(e) => setGold1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterGold1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterGold1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterGold1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Beidou, Xingqiu, Xinyan, Yanfei, Zhongli</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{5 * totalTalentLvUpPerChar2 - gold2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={gold2 - counterGold2} onChange={(e) => setGold2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterGold2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterGold2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterGold2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{5 * totalTalentLvUpPerChar3 - gold3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={gold3 - counterGold3} onChange={(e) => setGold3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterGold3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterGold3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterGold3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 5 - LvUpMatTotalHave(gold1, gold2, gold3)}</td>
							<td>{LvUpMatTotalHave(gold1, gold2, gold3) - LvUpMatTotalUsed(counterGold1, counterGold2, counterGold3)}</td>
							<td>{LvUpMatTotalUsed(counterGold1, counterGold2, counterGold3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="5">Inazuma - Violet Court</td>
						</tr>
						<tr>
							<td colSpan="4">Transience Books</td>
							<td colSpan="1">Monday / Thursday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{4 * totalTalentLvUpPerChar1 - transience1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={transience1 - counterTransience1} onChange={(e) => setTransience1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterTransience1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterTransience1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterTransience1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Kokomi, Heizou, Thoma, Yoimiya</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{4 * totalTalentLvUpPerChar2 - transience2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={transience2 - counterTransience2} onChange={(e) => setTransience2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterTransience2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterTransience2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterTransience2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{4 * totalTalentLvUpPerChar3 - transience3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={transience3 - counterTransience3} onChange={(e) => setTransience3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterTransience3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterTransience3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterTransience3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 4 - LvUpMatTotalHave(transience1, transience2, transience3)}</td>
							<td>{LvUpMatTotalHave(transience1, transience2, transience3) - LvUpMatTotalUsed(counterTransience1, counterTransience2, counterTransience3)}</td>
							<td>{LvUpMatTotalUsed(counterTransience1, counterTransience2, counterTransience3)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="4">Elegance Books</td>
							<td colSpan="1">Tuesday / Friday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{5 * totalTalentLvUpPerChar1 - elegance1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={elegance1 - counterElegance1} onChange={(e) => setElegance1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterElegance1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterElegance1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterElegance1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Itto, Ayaka, Ayato, Kujou Sara, Shinobu</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{5 * totalTalentLvUpPerChar2 - elegance2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={elegance2 - counterElegance2} onChange={(e) => setElegance2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterElegance2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterElegance2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterElegance2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{5 * totalTalentLvUpPerChar3 - elegance3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={elegance3 - counterElegance3} onChange={(e) => setElegance3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterElegance3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterElegance3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterElegance3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 5 - LvUpMatTotalHave(elegance1, elegance2, elegance3)}</td>
							<td>{LvUpMatTotalHave(elegance1, elegance2, elegance3) - LvUpMatTotalUsed(counterElegance1, counterElegance2, counterElegance3)}</td>
							<td>{LvUpMatTotalUsed(counterElegance1, counterElegance2, counterElegance3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="4">Light Books</td>
							<td colSpan="1">Wednesday / Saturday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{4 * totalTalentLvUpPerChar1 - light1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={light1 - counterLight1} onChange={(e) => setLight1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterLight1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterLight1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterLight1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Gorou, Raiden, Sayu, Yae Miko</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{4 * totalTalentLvUpPerChar2 - light2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={light2 - counterLight2} onChange={(e) => setLight2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterLight2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterLight2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterLight2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{4 * totalTalentLvUpPerChar3 - light3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={light3 - counterLight3} onChange={(e) => setLight3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterLight3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterLight3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterLight3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 4 - LvUpMatTotalHave(light1, light2, light3)}</td>
							<td>{LvUpMatTotalHave(light1, light2, light3) - LvUpMatTotalUsed(counterLight1, counterLight2, counterLight3)}</td>
							<td>{LvUpMatTotalUsed(counterLight1, counterLight2, counterLight3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="5">Sumeru - Steeple of Ignorance</td>
						</tr>
						<tr>
							<td colSpan="4">Admonition Books</td>
							<td colSpan="1">Monday / Thursday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{4 * totalTalentLvUpPerChar1 - admonition1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={admonition1 - counterAdmonition1} onChange={(e) => setAdmonition1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterAdmonition1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterAdmonition1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterAdmonition1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Candace, Cyno, Faruzan, Tighnari</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{4 * totalTalentLvUpPerChar2 - admonition2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={admonition2 - counterAdmonition2} onChange={(e) => setAdmonition2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterAdmonition2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterAdmonition2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterAdmonition2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{4 * totalTalentLvUpPerChar3 - admonition3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={admonition3 - counterAdmonition3} onChange={(e) => setAdmonition3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterAdmonition3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterAdmonition3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterAdmonition3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 4 - LvUpMatTotalHave(admonition1, admonition2, admonition3)}</td>
							<td>{LvUpMatTotalHave(admonition1, admonition2, admonition3) - LvUpMatTotalUsed(counterAdmonition1, counterAdmonition2, counterAdmonition3)}</td>
							<td>{LvUpMatTotalUsed(counterAdmonition1, counterAdmonition2, counterAdmonition3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="4">Ingenuity Books</td>
							<td colSpan="1">Tuesday / Friday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{4 * totalTalentLvUpPerChar1 - ingenuity1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={ingenuity1 - counterIngenuity1} onChange={(e) => setIngenuity1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterIngenuity1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterIngenuity1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterIngenuity1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Alhaitham, Dori, Layla, Nahida</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{4 * totalTalentLvUpPerChar2 - ingenuity2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={ingenuity2 - counterIngenuity2} onChange={(e) => setIngenuity2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterIngenuity2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterIngenuity2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterIngenuity2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{4 * totalTalentLvUpPerChar3 - ingenuity3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={ingenuity3 - counterIngenuity3} onChange={(e) => setIngenuity3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterIngenuity3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterIngenuity3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterIngenuity3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 4 - LvUpMatTotalHave(ingenuity1, ingenuity2, ingenuity3)}</td>
							<td>{LvUpMatTotalHave(ingenuity1, ingenuity2, ingenuity3) - LvUpMatTotalUsed(counterIngenuity1, counterIngenuity2, counterIngenuity3)}</td>
							<td>{LvUpMatTotalUsed(counterIngenuity1, counterIngenuity2, counterIngenuity3)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="4">Praxis Books</td>
							<td colSpan="1">Wednesday / Saturday</td>
						</tr>
						<tr>
							<td>Teachings</td>
							<td>{4 * totalTalentLvUpPerChar1 - praxis1}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={praxis1 - counterPraxis1} onChange={(e) => setPraxis1(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterPraxis1}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterPraxis1)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterPraxis1}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Collei, Dehya, Nilou, Wanderer</td>
						</tr>
						<tr>
							<td>Guide</td>
							<td>{4 * totalTalentLvUpPerChar2 - praxis2}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={praxis2 - counterPraxis2} onChange={(e) => setPraxis2(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterPraxis2}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterPraxis2)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterPraxis2}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Philosophies</td>
							<td>{4 * totalTalentLvUpPerChar3 - praxis3}</td>
							<td>
								<input type="number" className="talent-books-num-input" value={praxis3 - counterPraxis3} onChange={(e) => setPraxis3(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="talent-books-arrow-down" onClick={decrementCounterPraxis3}>
											-
										</button>
										<span className="talent-books-arrow-mid-number">{parseInt(counterPraxis3)}</span>
										<button className="talent-books-arrow-up" onClick={incrementCounterPraxis3}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="talent-books-total-row">
							<td>TOTAL</td>
							<td> {totalTalentLvUpPerChar1 + totalTalentLvUpPerChar2 + totalTalentLvUpPerChar3 * 4 - LvUpMatTotalHave(praxis1, praxis2, praxis3)}</td>
							<td>{LvUpMatTotalHave(praxis1, praxis2, praxis3) - LvUpMatTotalUsed(counterPraxis1, counterPraxis2, counterPraxis3)}</td>
							<td>{LvUpMatTotalUsed(counterPraxis1, counterPraxis2, counterPraxis3)}</td>
							<td></td>
						</tr>
						<tr className="talent-books-total-row">
							<td>OVERALL</td>
							<td>
								Teachings: {totalTalentLvUpPerChar1 * 63 - OverallTotalHave(...inputsHave1)} <br />
								Guide: {totalTalentLvUpPerChar2 * 63 - OverallTotalHave(...inputsHave2)}
								<br />
								Philosophies:{totalTalentLvUpPerChar3 * 63 - OverallTotalHave(...inputsHave3)}
								<br />
							</td>
							<td>
								Teachings: {OverallTotalHave(...inputsHave1) - OverallTotalUsed(...inputsUsed1)}
								<br />
								Guide: {OverallTotalHave(...inputsHave2) - OverallTotalUsed(...inputsUsed2)}
								<br />
								Philosophies:{OverallTotalHave(...inputsHave3) - OverallTotalUsed(...inputsUsed3)}
								<br />
							</td>
							<td>
								Teachings: {OverallTotalUsed(...inputsUsed1)}
								<br />
								Guide: {OverallTotalUsed(...inputsUsed2)}
								<br />
								Philosophies:{OverallTotalUsed(...inputsUsed3)}
								<br />
							</td>
							<td>63</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default GenericTalentBooks;
