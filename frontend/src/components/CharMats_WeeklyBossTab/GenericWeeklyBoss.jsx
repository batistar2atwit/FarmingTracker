import React, { useState } from 'react';

const GenericWeeklyBoss = () => {
	//DVALIN Talent LV Up Materials

	const LvUpMatTotalHave = (talentHave1, talentHave2, talentHave3) => {
		return parseInt(talentHave1) + parseInt(talentHave2) + parseInt(talentHave3);
	};
	const LvUpMatTotalUsed = (talentUsed1, talentUsed2, talentUsed3) => {
		return parseInt(talentUsed1) + parseInt(talentUsed2) + parseInt(talentUsed3);
	};

	const [dvalinPlume, setDvalinPlume] = useState(0);
	const [dvalinClaw, setDvalinClaw] = useState(0);
	const [dvalinSigh, setDvalinSigh] = useState(0);

	const [tailOfBoreas, setTailOfBoreas] = useState(0);
	const [ringOfBoreas, setRingOfBoreas] = useState(0);
	const [spiritLocketOfBoreas, setSpiritLocketOfBoreas] = useState(0);

	const [tuskOfMonocerosCaeli, setTuskOfMonocerosCaeli] = useState(0);
	const [shardOfAFoulLegacy, setShardOfAFoulLegacy] = useState(0);
	const [shadowOfTheWarrior, setShadowOfTheWarrior] = useState(0);

	const [dragonLordCrown, setDragonLordCrown] = useState(0);
	const [bloodjadeBranch, setBloodjadeBranch] = useState(0);
	const [gildedScale, setGildedScale] = useState(0);

	const [moltenMoment, setMoltenMoment] = useState(0);
	const [hellfireButterfly, setHellfireButterfly] = useState(0);
	const [ashenHeart, setAshenHeart] = useState(0);

	const [mudraOfTheMaleficGeneral, setMudraOfTheMaleficGeneral] = useState(0);
	const [tearsOfTheCalamitousGod, setTearsOfTheCalamitousGod] = useState(0);
	const [theMeaningOfAeons, setTheMeaningOfAeons] = useState(0);

	const [puppetStrings, setPuppetStrings] = useState(0);
	const [mirrorOfMushin, setMirrorOfMushin] = useState(0);
	const [dakasBell, setDakasBell] = useState(0);

	//6 talent mat times 3 skills
	const totalTalentLvUpPerChar = 6 * 3;

	//Dvalin
	const [counterDvalin1, setCounterDvalin1] = useState(0);
	const incrementCounterDvalin1 = () => {
		setCounterDvalin1(counterDvalin1 + 1);
	};
	const decrementCounterDvalin1 = () => {
		if (counterDvalin1 !== 0) {
			setCounterDvalin1(counterDvalin1 - 1);
		}
	};

	const [counterDvalin2, setCounterDvalin2] = useState(0);
	const incrementCounterDvalin2 = () => {
		setCounterDvalin2(counterDvalin2 + 1);
	};
	const decrementCounterDvalin2 = () => {
		if (counterDvalin2 !== 0) {
			setCounterDvalin2(counterDvalin2 - 1);
		}
	};

	const [counterDvalin3, setCounterDvalin3] = useState(0);
	const incrementCounterDvalin3 = () => {
		setCounterDvalin3(counterDvalin3 + 1);
	};
	const decrementCounterDvalin3 = () => {
		if (counterDvalin3 !== 0) {
			setCounterDvalin3(counterDvalin3 - 1);
		}
	};

	//Andrius
	const [counterAndrius1, setCounterAndrius1] = useState(0);
	const incrementCounterAndrius1 = () => {
		setCounterAndrius1(counterAndrius1 + 1);
	};
	const decrementCounterAndrius1 = () => {
		if (counterAndrius1 !== 0) {
			setCounterAndrius1(counterAndrius1 - 1);
		}
	};
	const [counterAndrius2, setCounterAndrius2] = useState(0);
	const incrementCounterAndrius2 = () => {
		setCounterAndrius2(counterAndrius2 + 1);
	};
	const decrementCounterAndrius2 = () => {
		if (counterAndrius2 !== 0) {
			setCounterAndrius2(counterAndrius2 - 1);
		}
	};
	const [counterAndrius3, setCounterAndrius3] = useState(0);
	const incrementCounterAndrius3 = () => {
		setCounterAndrius3(counterAndrius3 + 1);
	};
	const decrementCounterAndrius3 = () => {
		if (counterAndrius3 !== 0) {
			setCounterAndrius3(counterAndrius3 - 1);
		}
	};

	//Childe
	const [counterChilde1, setCounterChilde1] = useState(0);
	const incrementCounterChilde1 = () => {
		setCounterChilde1(counterChilde1 + 1);
	};
	const decrementCounterChilde1 = () => {
		if (counterChilde1 !== 0) {
			setCounterChilde1(counterChilde1 - 1);
		}
	};
	const [counterChilde2, setCounterChilde2] = useState(0);
	const incrementCounterChilde2 = () => {
		setCounterChilde2(counterChilde2 + 1);
	};
	const decrementCounterChilde2 = () => {
		if (counterChilde2 !== 0) {
			setCounterChilde2(counterChilde2 - 1);
		}
	};
	const [counterChilde3, setCounterChilde3] = useState(0);
	const incrementCounterChilde3 = () => {
		setCounterChilde3(counterChilde3 + 1);
	};
	const decrementCounterChilde3 = () => {
		if (counterChilde3 !== 0) {
			setCounterChilde3(counterChilde3 - 1);
		}
	};

	//Azhdaha
	const [counterAzhdaha1, setCounterAzhdaha1] = useState(0);
	const incrementCounterAzhdaha1 = () => {
		setCounterAzhdaha1(counterAzhdaha1 + 1);
	};
	const decrementCounterAzhdaha1 = () => {
		if (counterAzhdaha1 !== 0) {
			setCounterAzhdaha1(counterAzhdaha1 - 1);
		}
	};
	const [counterAzhdaha2, setCounterAzhdaha2] = useState(0);
	const incrementCounterAzhdaha2 = () => {
		setCounterAzhdaha2(counterAzhdaha2 + 1);
	};
	const decrementCounterAzhdaha2 = () => {
		if (counterAzhdaha2 !== 0) {
			setCounterAzhdaha2(counterAzhdaha2 - 1);
		}
	};
	const [counterAzhdaha3, setCounterAzhdaha3] = useState(0);
	const incrementCounterAzhdaha3 = () => {
		setCounterAzhdaha3(counterAzhdaha3 + 1);
	};
	const decrementCounterAzhdaha3 = () => {
		if (counterAzhdaha3 !== 0) {
			setCounterAzhdaha3(counterAzhdaha3 - 1);
		}
	};

	//La Signora
	const [counterSignora1, setCounterSignora1] = useState(0);
	const incrementCounterSignora1 = () => {
		setCounterSignora1(counterSignora1 + 1);
	};
	const decrementCounterSignora1 = () => {
		if (counterSignora1 !== 0) {
			setCounterSignora1(counterSignora1 - 1);
		}
	};
	const [counterSignora2, setCounterSignora2] = useState(0);
	const incrementCounterSignora2 = () => {
		setCounterSignora2(counterSignora2 + 1);
	};
	const decrementCounterSignora2 = () => {
		if (counterSignora2 !== 0) {
			setCounterSignora2(counterSignora2 - 1);
		}
	};
	const [counterSignora3, setCounterSignora3] = useState(0);
	const incrementCounterSignora3 = () => {
		setCounterSignora3(counterSignora3 + 1);
	};
	const decrementCounterSignora3 = () => {
		if (counterSignora3 !== 0) {
			setCounterSignora3(counterSignora3 - 1);
		}
	};
	//Shogun
	const [counterShogun1, setCounterShogun1] = useState(0);
	const incrementCounterShogun1 = () => {
		setCounterShogun1(counterShogun1 + 1);
	};
	const decrementCounterShogun1 = () => {
		if (counterShogun1 !== 0) {
			setCounterShogun1(counterShogun1 - 1);
		}
	};
	const [counterShogun2, setCounterShogun2] = useState(0);
	const incrementCounterShogun2 = () => {
		setCounterShogun2(counterShogun2 + 1);
	};
	const decrementCounterShogun2 = () => {
		if (counterShogun2 !== 0) {
			setCounterShogun2(counterShogun2 - 1);
		}
	};
	const [counterShogun3, setCounterShogun3] = useState(0);
	const incrementCounterShogun3 = () => {
		setCounterShogun3(counterShogun3 + 1);
	};
	const decrementCounterShogun3 = () => {
		if (counterShogun3 !== 0) {
			setCounterShogun3(counterShogun3 - 1);
		}
	};
	//Everlasting Lord
	const [counterJoururiWorkshop1, setCounterJoururiWorkshop1] = useState(0);
	const incrementCounterJoururiWorkshop1 = () => {
		setCounterJoururiWorkshop1(counterJoururiWorkshop1 + 1);
	};
	const decrementCounterJoururiWorkshop1 = () => {
		if (counterJoururiWorkshop1 !== 0) {
			setCounterJoururiWorkshop1(counterJoururiWorkshop1 - 1);
		}
	};
	const [counterJoururiWorkshop2, setCounterJoururiWorkshop2] = useState(0);
	const incrementCounterJoururiWorkshop2 = () => {
		setCounterJoururiWorkshop2(counterJoururiWorkshop2 + 1);
	};
	const decrementCounterJoururiWorkshop2 = () => {
		if (counterJoururiWorkshop2 !== 0) {
			setCounterJoururiWorkshop2(counterJoururiWorkshop2 - 1);
		}
	};
	const [counterJoururiWorkshop3, setCounterJoururiWorkshop3] = useState(0);
	const incrementCounterJoururiWorkshop3 = () => {
		setCounterJoururiWorkshop3(counterJoururiWorkshop3 + 1);
	};
	const decrementCounterJoururiWorkshop3 = () => {
		if (counterJoururiWorkshop3 !== 0) {
			setCounterJoururiWorkshop3(counterJoururiWorkshop3 - 1);
		}
	};
	return (
		<div className="weekly-boss-block">
			<table className="weekly-boss-table">
				<thead className="weekly-boss-header">
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
						<td>Dvalin's Plume</td>
						<td>{3 * totalTalentLvUpPerChar - dvalinPlume}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={dvalinPlume - counterDvalin1} onChange={(e) => setDvalinPlume(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterDvalin1}>
										-
									</button>

									<span className="weekly-arrow-mid-number">{parseInt(counterDvalin1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterDvalin1}>
										+
									</button>
								</>
							}
						</td>
						<td>Diluc, Bennet, Jean</td>
					</tr>
					<tr>
						<td>Dvalin's Claw </td>
						<td>{4 * totalTalentLvUpPerChar - dvalinClaw}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={dvalinClaw - counterDvalin2} onChange={(e) => setDvalinClaw(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterDvalin2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterDvalin2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterDvalin2}>
										+
									</button>
								</>
							}
						</td>
						<td>Lisa, Noelle, Razor, Xiangling</td>
					</tr>
					<tr>
						<td>Dvalin's Sigh</td>
						<td>{5 * totalTalentLvUpPerChar - dvalinSigh}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={dvalinSigh - counterDvalin3} onChange={(e) => setDvalinSigh(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterDvalin3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterDvalin3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterDvalin3}>
										+
									</button>
								</>
							}
						</td>
						<td>Traveler(Anemo), Traveler(Geo), Amber, Beidou, Chongyun</td>
					</tr>
					<tr>
						<td>TOTAL </td>
						<td>{totalTalentLvUpPerChar * 12 - LvUpMatTotalHave(dvalinPlume, dvalinClaw, dvalinSigh)}</td>
						<td>{LvUpMatTotalHave(dvalinPlume, dvalinClaw, dvalinSigh) - LvUpMatTotalUsed(counterDvalin1, counterDvalin2, counterDvalin3)}</td>
						<td>{LvUpMatTotalUsed(counterDvalin1, counterDvalin2, counterDvalin3)}</td>
						<td></td>
					</tr>
					<tr>
						<td>Tail of Boreas</td>
						<td>{3 * totalTalentLvUpPerChar - tailOfBoreas}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={tailOfBoreas - counterAndrius1} onChange={(e) => setTailOfBoreas(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterAndrius1}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterAndrius1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterAndrius1}>
										+
									</button>
								</>
							}
						</td>
						<td>Qiqi, Venti, Xingqiu</td>
					</tr>
					<tr>
						<td>Ring of Boreas</td>
						<td>{4 * totalTalentLvUpPerChar - ringOfBoreas} </td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={ringOfBoreas - counterAndrius2} onChange={(e) => setRingOfBoreas(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterAndrius2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterAndrius2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterAndrius2}>
										+
									</button>
								</>
							}
						</td>
						<td>Barbara, Keqing, Klee, Mona</td>
					</tr>
					<tr>
						<td>Spirit Locket of Boreas</td>
						<td>{4 * totalTalentLvUpPerChar - spiritLocketOfBoreas}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={spiritLocketOfBoreas - counterAndrius3} onChange={(e) => setSpiritLocketOfBoreas(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterAndrius3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterAndrius3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterAndrius3}>
										+
									</button>
								</>
							}
						</td>
						<td>Fischl, Kaeya, Ningguang, Sucrose</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td>{totalTalentLvUpPerChar * 11 - LvUpMatTotalHave(tailOfBoreas, ringOfBoreas, spiritLocketOfBoreas)}</td>
						<td>{LvUpMatTotalHave(tailOfBoreas, ringOfBoreas, spiritLocketOfBoreas) - LvUpMatTotalUsed(counterAndrius1, counterAndrius2, counterAndrius3)}</td>
						<td>{LvUpMatTotalUsed(counterAndrius1, counterAndrius2, counterAndrius3)}</td>
						<td></td>
					</tr>
					<tr>
						<td>Tusk of Monoceros Caeli</td>
						<td>{3 * totalTalentLvUpPerChar - tuskOfMonocerosCaeli}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={tuskOfMonocerosCaeli - counterChilde1} onChange={(e) => setTuskOfMonocerosCaeli(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterChilde1}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterChilde1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterChilde1}>
										+
									</button>
								</>
							}
						</td>
						<td>Albedo, Xinyan, Zhonngli</td>
					</tr>
					<tr>
						<td>Shard of a Foul Legacy</td>
						<td>{3 * totalTalentLvUpPerChar - shardOfAFoulLegacy}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={shardOfAFoulLegacy - counterChilde2} onChange={(e) => setShardOfAFoulLegacy(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterChilde2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterChilde2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterChilde2}>
										+
									</button>
								</>
							}
						</td>
						<td>Diona, Hu Tao, Tartaglia</td>
					</tr>
					<tr>
						<td>Shadow of the Warrior</td>
						<td>{3 * totalTalentLvUpPerChar - shadowOfTheWarrior}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={shadowOfTheWarrior - counterChilde3} onChange={(e) => setShadowOfTheWarrior(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterChilde3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterChilde3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterChilde3}>
										+
									</button>
								</>
							}
						</td>
						<td>Ganyu, Rosaria, Xiao</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td>{totalTalentLvUpPerChar * 9 - LvUpMatTotalHave(tuskOfMonocerosCaeli, shardOfAFoulLegacy, shadowOfTheWarrior)}</td>
						<td>{LvUpMatTotalHave(tuskOfMonocerosCaeli, shardOfAFoulLegacy, shadowOfTheWarrior) - LvUpMatTotalUsed(counterChilde1, counterChilde2, counterChilde3)}</td>
						<td>{LvUpMatTotalUsed(counterChilde1, counterChilde2, counterChilde3)}</td>
						<td></td>
					</tr>
					<tr>
						<td>Dragon Lord's Crown</td>
						<td>{3 * totalTalentLvUpPerChar - dragonLordCrown}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={dragonLordCrown - counterAzhdaha1} onChange={(e) => setDragonLordCrown(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterAzhdaha1}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterAzhdaha1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterAzhdaha1}>
										+
									</button>
								</>
							}
						</td>
						<td>Traveler(Electro), Eula, Yoimia</td>
					</tr>
					<tr>
						<td>Bloodjade Branch</td>
						<td>{3 * totalTalentLvUpPerChar - bloodjadeBranch}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={bloodjadeBranch - counterAzhdaha2} onChange={(e) => setBloodjadeBranch(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterAzhdaha2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterAzhdaha2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterAzhdaha2}>
										+
									</button>
								</>
							}
						</td>
						<td>Dori, Ayaka, Yanfei </td>
					</tr>
					<tr>
						<td>Gilded Scale</td>
						<td>{3 * totalTalentLvUpPerChar - gildedScale}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={gildedScale - counterAzhdaha3} onChange={(e) => setGildedScale(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterAzhdaha3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterAzhdaha3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterAzhdaha3}>
										+
									</button>
								</>
							}
						</td>
						<td>Kazuha, Sayu, Yelan</td>
					</tr>
					<tr className="weekly-total-row">
						<td>TOTAL</td>
						<td>{totalTalentLvUpPerChar * 9 - LvUpMatTotalHave(dragonLordCrown, bloodjadeBranch, gildedScale)}</td>
						<td>{LvUpMatTotalHave(dragonLordCrown, bloodjadeBranch, gildedScale) - LvUpMatTotalUsed(counterAzhdaha1, counterAzhdaha2, counterAzhdaha3)}</td>
						<td>{LvUpMatTotalUsed(counterAzhdaha1, counterAzhdaha2, counterAzhdaha3)}</td>
						<td></td>
					</tr>
					<tr>
						<td>Molten Moment</td>
						<td>{3 * totalTalentLvUpPerChar - moltenMoment}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={moltenMoment - counterSignora1} onChange={(e) => setMoltenMoment(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterSignora1}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterSignora1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterSignora1}>
										+
									</button>
								</>
							}
						</td>
						<td>Aloy, Gorou, Raiden</td>
					</tr>
					<tr>
						<td>Hellfire Butterfly</td>
						<td>{3 * totalTalentLvUpPerChar - hellfireButterfly}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={hellfireButterfly - counterSignora2} onChange={(e) => setHellfireButterfly(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterSignora2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterSignora2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterSignora2}>
										+
									</button>
								</>
							}
						</td>
						<td>Kokomi, Shenhe, Thoma</td>
					</tr>
					<tr>
						<td>Ashen Heart</td>
						<td>{3 * totalTalentLvUpPerChar - ashenHeart}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={ashenHeart - counterSignora3} onChange={(e) => setAshenHeart(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterSignora3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterSignora3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterSignora3}>
										+
									</button>
								</>
							}
						</td>
						<td>Itto, Kujou Sara, Yun Jin</td>
					</tr>
					<tr className="weekly-total-row">
						<td>TOTAL</td>
						<td>{totalTalentLvUpPerChar * 9 - LvUpMatTotalHave(moltenMoment, hellfireButterfly, ashenHeart)}</td>
						<td>{LvUpMatTotalHave(moltenMoment, hellfireButterfly, ashenHeart) - LvUpMatTotalUsed(counterSignora1, counterSignora2, counterSignora3)}</td>
						<td>{LvUpMatTotalUsed(counterSignora1, counterSignora2, counterSignora3)}</td>
						<td></td>
					</tr>
					<tr>
						<td>Mudra of the Malefic General</td>
						<td>{3 * totalTalentLvUpPerChar - mudraOfTheMaleficGeneral}</td>
						<td>
							<input
								type="number"
								className="weekly-boss-num-input"
								value={mudraOfTheMaleficGeneral - counterShogun1}
								onChange={(e) => setMudraOfTheMaleficGeneral(e.target.value)}
								placeholder="0"
								min="0"
							/>
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterShogun1}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterShogun1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterShogun1}>
										+
									</button>
								</>
							}
						</td>
						<td>Traveler(Dendro), Cyno, Ayato</td>
					</tr>
					<tr>
						<td>Tears of the Calamitous God</td>
						<td>{4 * totalTalentLvUpPerChar - tearsOfTheCalamitousGod}</td>
						<td>
							<input
								type="number"
								className="weekly-boss-num-input"
								value={tearsOfTheCalamitousGod - counterShogun2}
								onChange={(e) => setTearsOfTheCalamitousGod(e.target.value)}
								placeholder="0"
								min="0"
							/>
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterShogun2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterShogun2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterShogun2}>
										+
									</button>
								</>
							}
						</td>
						<td>Candace, Collei, Shinobu, Nilou</td>
					</tr>
					<tr>
						<td>The Meaning of Aeons</td>
						<td>{3 * totalTalentLvUpPerChar - theMeaningOfAeons}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={theMeaningOfAeons - counterShogun3} onChange={(e) => setTheMeaningOfAeons(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterShogun3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterShogun3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterShogun3}>
										+
									</button>
								</>
							}
						</td>
						<td>Heizou, Tighnari, Yae Miko</td>
					</tr>
					<tr className="weekly-total-row">
						<td>TOTAL</td>
						<td>{totalTalentLvUpPerChar * 10 - LvUpMatTotalHave(mudraOfTheMaleficGeneral, tearsOfTheCalamitousGod, theMeaningOfAeons)}</td>
						<td>{LvUpMatTotalHave(mudraOfTheMaleficGeneral, tearsOfTheCalamitousGod, theMeaningOfAeons) - LvUpMatTotalUsed(counterShogun1, counterShogun2, counterShogun3)}</td>
						<td>{LvUpMatTotalUsed(counterShogun1, counterShogun2, counterShogun3)}</td>
						<td></td>
					</tr>

					<tr>
						<td>Puppet Strings</td>
						<td>{3 * totalTalentLvUpPerChar - puppetStrings}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={puppetStrings - counterJoururiWorkshop1} onChange={(e) => setPuppetStrings(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterJoururiWorkshop1}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterJoururiWorkshop1)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterJoururiWorkshop1}>
										+
									</button>
								</>
							}
						</td>
						<td>Traveler(Dendro), Cyno, Ayato</td>
					</tr>
					<tr>
						<td>Mirror Of Mushin</td>
						<td>{4 * totalTalentLvUpPerChar - mirrorOfMushin}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={mirrorOfMushin - counterJoururiWorkshop2} onChange={(e) => setMirrorOfMushin(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterJoururiWorkshop2}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterJoururiWorkshop2)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterJoururiWorkshop2}>
										+
									</button>
								</>
							}
						</td>
						<td>Candace, Collei, Shinobu, Nilou</td>
					</tr>
					<tr>
						<td>Daka's Bell</td>
						<td>{3 * totalTalentLvUpPerChar - dakasBell}</td>
						<td>
							<input type="number" className="weekly-boss-num-input" value={dakasBell - counterJoururiWorkshop3} onChange={(e) => setDakasBell(e.target.value)} placeholder="0" min="0" />
						</td>
						<td>
							{
								<>
									<button className="weekly-arrow-down" onClick={decrementCounterJoururiWorkshop3}>
										-
									</button>
									<span className="weekly-arrow-mid-number">{parseInt(counterJoururiWorkshop3)}</span>
									<button className="weekly-arrow-up" onClick={incrementCounterJoururiWorkshop3}>
										+
									</button>
								</>
							}
						</td>
						<td>Heizou, Tighnari, Yae Miko</td>
					</tr>
					<tr className="weekly-total-row">
						<td>TOTAL</td>
						<td>{totalTalentLvUpPerChar * 10 - LvUpMatTotalHave(puppetStrings, mirrorOfMushin, dakasBell)}</td>
						<td>{LvUpMatTotalHave(puppetStrings, mirrorOfMushin, dakasBell) - LvUpMatTotalUsed(counterJoururiWorkshop1, counterJoururiWorkshop2, counterJoururiWorkshop3)}</td>
						<td>{LvUpMatTotalUsed(counterJoururiWorkshop1, counterJoururiWorkshop2, counterJoururiWorkshop3)}</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default GenericWeeklyBoss;
