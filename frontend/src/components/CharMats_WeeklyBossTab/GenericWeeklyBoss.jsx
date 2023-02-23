import React, { useState } from 'react';

const GenericWeeklyBoss = () => {
	//DVALIN Talent LV Up Materials
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

	const [MoltenMoment, setMoltenMoment] = useState(0);
	const [HellfireButterfly, setHellfireButterfly] = useState(0);
	const [ashenHeart, setAshenHeart] = useState(0);

	const [mudraOfTheMaleficGeneral, setMudraOfTheMaleficGeneral] = useState(0);
	const [tearsOfTheCalamitousGod, setTearsOfTheCalamitousGod] = useState(0);
	const [theMeaningOfAeons, setTheMeaningOfAeons] = useState(0);

	const totalTalentLvUpPeChar = 6 * 3;
	const LvUpMatTotal = (talent1, talent2, talent3) => {
		return talent1 + talent2 + talent3;
	};
	return (
		<div>
			<table>
				<thead>
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
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Diluc, Bennet, Jean</td>
					</tr>
					<tr>
						<td>Dvalin's Claw </td>
						<td>{4 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Lisa, Noelle, Razor, Xiangling</td>
					</tr>
					<tr>
						<td>Dvalin's Sigh</td>
						<td>{5 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Traveler(Anemo), Traveler(Geo), Amber, Beidou, Chongyun</td>
					</tr>
					<tr>
						<td>TOTAL </td>
						<td className="Total-cell">{3 * totalTalentLvUpPeChar + 4 * totalTalentLvUpPeChar + 5 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td></td>
					</tr>
					<tr>
						<td>Tail of Boreas</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Qiqi, Venti, Xingqiu</td>
					</tr>
					<tr>
						<td>Ring of Boreas</td>
						<td>{4 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Barbara, Keqing, Klee, Mona</td>
					</tr>
					<tr>
						<td>Spirit Locket of Boreas</td>
						<td>{4 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Fischl, Kaeya, Ningguang, Sucrose</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td className="Total-cell">{3 * totalTalentLvUpPeChar + 4 * totalTalentLvUpPeChar + 4 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td></td>
					</tr>
					<tr>
						<td>Tusk of Monoceros Caeli</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Albedo, Xinyan, Zhonngli</td>
					</tr>
					<tr>
						<td>Shard of a Foul Legacy</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Diona, Hu Tao, Tartaglia</td>
					</tr>
					<tr>
						<td>Shadow of the Warrior</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Ganyu, Rosaria, Xiao</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td>{3 * totalTalentLvUpPeChar + 3 * totalTalentLvUpPeChar + 3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td></td>
					</tr>
					<tr>
						<td>Dragon Lord's Crown</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Traveler(Electro), Eula, Yoimia</td>
					</tr>
					<tr>
						<td>Bloodjade Branch</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Dori, Ayaka, Yanfei </td>
					</tr>
					<tr>
						<td>Gilded Scale</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Kazuha, Sayu, Yelan</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td>{3 * totalTalentLvUpPeChar + 2 * totalTalentLvUpPeChar + 3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td></td>
					</tr>
					<tr>
						<td>Molten Moment</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Aloy, Gorou, Raiden</td>
					</tr>
					<tr>
						<td>Hellfire Butterfly</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Kokomi, Shenhe, Thoma</td>
					</tr>
					<tr>
						<td>Ashen Heart</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Itto, Kujou Sara, Yun Jin</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td>{3 * totalTalentLvUpPeChar + 3 * totalTalentLvUpPeChar + 3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td></td>
					</tr>
					<tr>
						<td>Mudra of the Malefic General</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Traveler(Dendro), Cyno, Ayato</td>
					</tr>
					<tr>
						<td>Tears of the Calamitous God</td>
						<td>{4 * totalTalentLvUpPeChar}</td>
						<td>1</td>
						<td>2</td>
						<td className="Characters">Candace, Collei, Shinobu, Nilou</td>
					</tr>
					<tr>
						<td>The Meaning of Aeons</td>
						<td>{3 * totalTalentLvUpPeChar}</td>
						<td>0</td>
						<td>0</td>
						<td className="Characters">Heizou, Tighnari, Yae Miko</td>
					</tr>
					<tr>
						<td>TOTAL</td>
						<td>{3 * totalTalentLvUpPeChar + 4 * totalTalentLvUpPeChar + 3 * totalTalentLvUpPeChar}</td>
						<td>0</td>
						<td>0</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default GenericWeeklyBoss;
