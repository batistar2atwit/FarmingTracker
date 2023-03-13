import React, { useState } from 'react';

const GenericGeneralDrops = () => {
	//DVALIN Talent LV Up Materials

	const LvUpMatTotalHave = (talentHave1, talentHave2, talentHave3) => {
		return parseInt(talentHave1) + parseInt(talentHave2) + parseInt(talentHave3);
	};
	const LvUpMatTotalUsed = (talentUsed1, talentUsed2, talentUsed3) => {
		return parseInt(talentUsed1) + parseInt(talentUsed2) + parseInt(talentUsed3);
	};

	//Hilichurl Horns
	const [charHeavyHorn, setCharHeavyHorn] = useState(0);
	const [charBlackBronzeHorn, setCharBlackBronzeHorn] = useState(0);
	const [charBlackCrystalHorn, setCharBlackCrystalHorn] = useState(0);

	const [talHeavyHorn, CharHeavyHorn] = useState(0);
	const [talBlackBronzeHorn, setTalBlackBronzeHorn] = useState(0);
	const [talBlackCrystalHorn, setTalBlackCrystalHorn] = useState(0);

	//Ley Line Branches
	const [charDeadLeyLineBranch, setCharDeadLeyLineBranch] = useState(0);
	const [charDeadLeyLineLeaves, setCharDeadLeyLineLeaves] = useState(0);
	const [charLeyLineSprout, setCharLeyLineSprout] = useState(0);

	const [talDeadLeyLineBranch, setTalDeadLeyLineBranch] = useState(0);
	const [talDeadLeyLineLeaves, setTalDeadLeyLineLeaves] = useState(0);
	const [talLeyLineSprout, setTalLeyLineSprout] = useState(0);

	//Chaos Parts
	const [charChaosDevice, setCharChaosDevice] = useState(0);
	const [charChaosCircuit, setCharChaosCircuit] = useState(0);
	const [charChaosCore, setCharChaosCore] = useState(0);

	const [talChaosDevice, setTalChaosDevice] = useState(0);
	const [talChaosCircuit, setTalChaosCircuit] = useState(0);
	const [talChaosCore, setTalChaosCore] = useState(0);

	//Mist Grasses
	const [charMistGrassPollen, setCharMistGrassPollen] = useState(0);
	const [charMistGrass, setCharMistGrass] = useState(0);
	const [charMistGrassWick, setCharMistGrassWick] = useState(0);

	const [talMistGrassPollen, setTalMistGrassPollen] = useState(0);
	const [talMistGrass, setTalMistGrass] = useState(0);
	const [talMistGrassWick, setTalMistGrassWick] = useState(0);

	//Sacrificial Knives
	const [charHunterSacrificialKnife, setCharHunterSacrificialKnife] = useState(0);
	const [charAgentSacrificialKnife, setCharAgentSacrificialKnife] = useState(0);
	const [charInspectorSacrificialKnife, setCharInspectorSacrificialKnife] = useState(0);

	const [talHunterSacrificialKnife, setTalHunterSacrificialKnife] = useState(0);
	const [talAgentSacrificialKnife, setTalAgentSacrificialKnife] = useState(0);
	const [talInspectorSacrificialKnife, setTalInspectorSacrificialKnife] = useState(0);

	//Bone Shards
	const [charFragileBoneShard, setCharFragileBoneShard] = useState(0);
	const [charSturdyBoneShard, setCharSturdyBoneShard] = useState(0);
	const [charFossilizedBoneShard, setCharFossilizedBoneShard] = useState(0);

	const [talFragileBoneShard, setTalFragileBoneShard] = useState(0);
	const [talSturdyBoneShard, setTalSturdyBoneShard] = useState(0);
	const [talFossilizedBoneShard, setTalFossilizedBoneShard] = useState(0);

	//Sentinel Chaos Parts
	const [charChaosGear, setCharChaosGear] = useState(0);
	const [charChaosAxis, setCharChaosAxis] = useState(0);
	const [charChaosOculus, setCharChaosOculus] = useState(0);

	const [talChaosGear, setTalChaosGear] = useState(0);
	const [talChaosAxis, setTalChaosAxis] = useState(0);
	const [talChaosOculus, setTalChaosOculus] = useState(0);

	//Mirror Maiden Prisms
	const [charDismalPrism, setCharDismalPrism] = useState(0);
	const [charCrystalPrism, setCharCrystalPrism] = useState(0);
	const [charPolarizingPrism, setCharPolarizingPrism] = useState(0);

	const [talDismalPrism, setTalDismalPrism] = useState(0);
	const [talCrystalPrism, setTalCrystalPrism] = useState(0);
	const [talPolarizingPrism, setTalPolarizingPrism] = useState(0);

	//Concealed Riftwolf Claws
	const [charConcealedClaw, setCharConcealedClaw] = useState(0);
	const [charConcealedUnguis, setCharConcealedUnguis] = useState(0);
	const [charConcealedTalon, setCharConcealedTalon] = useState(0);

	const [talConcealedClaw, setTalConcealedClaw] = useState(0);
	const [talConcealedUnguis, setTalConcealedUnguis] = useState(0);
	const [talConcealedTalon, setTalConcealedTalon] = useState(0);

	//Statuettes
	const [charGloomyStatuette, setCharGloomyStatuette] = useState(0);
	const [charDarkStatuette, setCharDarkStatuette] = useState(0);
	const [charDeathlyStatuette, setCharDeathlyStatuette] = useState(0);

	const [talGloomyStatuette, setTalGloomyStatuette] = useState(0);
	const [talDarkStatuette, setTalDarkStatuette] = useState(0);
	const [talDeathlyStatuette, setTalDeathlyStatuette] = useState(0);

	//Fungal Nuclei
	const [charInactivatedFungalNucleus, setCharInactivatedFungalNucleus] = useState(0);
	const [charDormantFungalNucleus, setCharDormantFungalNucleus] = useState(0);
	const [charRobustFungalNucleus, setCharRobustFungalNucleus] = useState(0);

	const [talInactivatedFungalNucleus, setTalInactivatedFungalNucleus] = useState(0);
	const [talDormantFungalNucleus, setTalDormantFungalNucleus] = useState(0);
	const [talRobustFungalNucleus, setTalRobustFungalNucleus] = useState(0);

	//Drake Chaos Parts
	const [charChaosStorage, setCharChaosStorage] = useState(0);
	const [charChaosModule, setCharChaosModule] = useState(0);
	const [charChaosBolt, setCharChaosBolt] = useState(0);

	const [talChaosStorage, setTalChaosStorage] = useState(0);
	const [talChaosModule, setTalChaosModule] = useState(0);
	const [talChaosBolt, setTalChaosBolt] = useState(0);

	//Primal Construct Prisms
	const [charDamagedPrism, setCharDamagedPrism] = useState(0);
	const [charTurbidPrism, setCharTurbidPrism] = useState(0);
	const [charRadiantPrism, setCharRadiantPrism] = useState(0);

	const [talDamagedPrism, setTalDamagedPrism] = useState(0);
	const [talTurbidPrism, setTalTurbidPrism] = useState(0);
	const [talRadiantPrism, setTalRadiantPrism] = useState(0);

	//Consecrated Beast Shells
	const [charDesiccatedShell, setCharDesiccatedShell] = useState(0);
	const [charSturdyShell, setCharSturdyShell] = useState(0);
	const [charMarkedShell, setCharMarkedShell] = useState(0);

	const [talDesiccatedShell, setTalDesiccatedShell] = useState(0);
	const [talSturdyShell, setTalSturdyShell] = useState(0);
	const [talMarkedShell, setTalMarkedShell] = useState(0);

	//Total per Character
	const totalTalentLvUpPerChar_Char1 = 18;
	const totalTalentLvUpPerChar_Char2 = 30;
	const totalTalentLvUpPerChar_Char3 = 36;

	//6 talent mat times 3 skills
	const totalTalentLvUpPerChar_Tal1 = 6 * 3;
	const totalTalentLvUpPerChar_Tal2 = 22 * 3;
	const totalTalentLvUpPerChar_Tal3 = 31 * 3;

	//Hilichurl Horns
	const [counterCharHeavyHorn, setCounterCharHeavyHorn] = useState(0);
	const incrementCounterCharHeavyHorn = () => {
		setCounterCharHeavyHorn(counterCharHeavyHorn + 1);
	};
	const decrementCounterCharHeavyHorn = () => {
		if (counterCharHeavyHorn !== 0) {
			setCounterCharHeavyHorn(counterCharHeavyHorn - 1);
		}
	};
	//
	const [counterTalHeavyHorn, setCounterTalHeavyHorn] = useState(0);
	const incrementCounterTalHeavyHorn = () => {
		setCounterTalHeavyHorn(counterTalHeavyHorn + 1);
	};
	const decrementCounterTalHeavyHorn = () => {
		if (counterTalHeavyHorn !== 0) {
			setCounterTalHeavyHorn(counterTalHeavyHorn - 1);
		}
	};
	//
	const [counterCharBlackBronzeHorn, setCounterCharBlackBronzeHorn] = useState(0);
	const incrementCounterCharBlackBronzeHorn = () => {
		setCounterCharBlackBronzeHorn(counterCharBlackBronzeHorn + 1);
	};
	const decrementCounterCharBlackBronzeHorn = () => {
		if (counterCharBlackBronzeHorn !== 0) {
			setCounterCharBlackBronzeHorn(counterCharBlackBronzeHorn - 1);
		}
	};
	//
	const [counterTalBlackBronzeHorn, setCounterTalBlackBronzeHorn] = useState(0);
	const incrementCounterTalBlackBronzeHorn = () => {
		setCounterTalBlackBronzeHorn(counterTalBlackBronzeHorn + 1);
	};
	const decrementCounterTalBlackBronzeHorn = () => {
		if (counterTalBlackBronzeHorn !== 0) {
			setCounterTalBlackBronzeHorn(counterTalBlackBronzeHorn - 1);
		}
	};

	//
	const [counterCharBlackCrystalHorn, setCounterCharBlackCrystalHorn] = useState(0);
	const incrementCounterCharBlackCrystalHorn = () => {
		setCounterCharBlackCrystalHorn(counterCharBlackCrystalHorn + 1);
	};
	const decrementCounterCharBlackCrystalHorn = () => {
		if (counterCharBlackCrystalHorn !== 0) {
			setCounterCharBlackCrystalHorn(counterCharBlackCrystalHorn - 1);
		}
	};

	//
	const [counterTalBlackCrystalHorn, setCounterTalBlackCrystalHorn] = useState(0);
	const incrementCounterTalBlackCrystalHorn = () => {
		setCounterTalBlackCrystalHorn(counterTalBlackCrystalHorn + 1);
	};
	const decrementCounterTalBlackCrystalHorn = () => {
		if (counterTalBlackCrystalHorn !== 0) {
			setCounterTalBlackCrystalHorn(counterTalBlackCrystalHorn - 1);
		}
	};

	//Ley Line Branches
	const [counterCharDeadLeyLineBranch, setCounterCharDeadLeyLineBranch] = useState(0);
	const incrementCounterCharDeadLeyLineBranch = () => {
		setCounterCharDeadLeyLineBranch(counterCharDeadLeyLineBranch + 1);
	};
	const decrementCounterCharDeadLeyLineBranch = () => {
		if (counterCharDeadLeyLineBranch !== 0) {
			setCounterCharDeadLeyLineBranch(counterCharDeadLeyLineBranch - 1);
		}
	};
	//
	const [counterTalDeadLeyLineBranch, setCounterTalDeadLeyLineBranch] = useState(0);
	const incrementCounterTalDeadLeyLineBranch = () => {
		setCounterTalDeadLeyLineBranch(counterTalDeadLeyLineBranch + 1);
	};
	const decrementCounterTalDeadLeyLineBranch = () => {
		if (counterTalDeadLeyLineBranch !== 0) {
			setCounterTalDeadLeyLineBranch(counterTalDeadLeyLineBranch - 1);
		}
	};

	//
	const [counterCharDeadLeyLineLeaves, setCounterCharDeadLeyLineLeaves] = useState(0);
	const incrementCounterCharDeadLeyLineLeaves = () => {
		setCounterCharDeadLeyLineLeaves(counterCharDeadLeyLineLeaves + 1);
	};
	const decrementCounterCharDeadLeyLineLeaves = () => {
		if (counterCharDeadLeyLineLeaves !== 0) {
			setCounterCharDeadLeyLineLeaves(counterCharDeadLeyLineLeaves - 1);
		}
	};
	//
	const [counterTalDeadLeyLineLeaves, setCounterTalDeadLeyLineLeaves] = useState(0);
	const incrementCounterTalDeadLeyLineLeaves = () => {
		setCounterTalDeadLeyLineLeaves(counterTalDeadLeyLineLeaves + 1);
	};
	const decrementCounterTalDeadLeyLineLeaves = () => {
		if (counterTalDeadLeyLineLeaves !== 0) {
			setCounterTalDeadLeyLineLeaves(counterTalDeadLeyLineLeaves - 1);
		}
	};
	//
	const [counterCharLeyLineSprout, setCounterCharLeyLineSprout] = useState(0);
	const incrementCounterCharLeyLineSprout = () => {
		setCounterCharLeyLineSprout(counterCharLeyLineSprout + 1);
	};
	const decrementCounterCharLeyLineSprout = () => {
		if (counterCharLeyLineSprout !== 0) {
			setCounterCharLeyLineSprout(counterCharLeyLineSprout - 1);
		}
	};
	//
	const [counterTalLeyLineSprout, setCounterTalLeyLineSprout] = useState(0);
	const incrementCounterTalLeyLineSprout = () => {
		setCounterTalLeyLineSprout(counterTalLeyLineSprout + 1);
	};
	const decrementCounterTalLeyLineSprout = () => {
		if (counterTalLeyLineSprout !== 0) {
			setCounterTalLeyLineSprout(counterTalLeyLineSprout - 1);
		}
	};

	//Chaos Parts
	const [counterCharChaosDevice, setCounterCharChaosDevice] = useState(0);
	const incrementCounterCharChaosDevice = () => {
		setCounterCharChaosDevice(counterCharChaosDevice + 1);
	};
	const decrementCounterCharChaosDevice = () => {
		if (counterCharChaosDevice !== 0) {
			setCounterCharChaosDevice(counterCharChaosDevice - 1);
		}
	};
	//
	const [counterTalChaosDevice, setCounterTalChaosDevice] = useState(0);
	const incrementCounterTalChaosDevice = () => {
		setCounterTalChaosDevice(counterTalChaosDevice + 1);
	};
	const decrementCounterTalChaosDevice = () => {
		if (counterTalChaosDevice !== 0) {
			setCounterTalChaosDevice(counterTalChaosDevice - 1);
		}
	};

	//
	const [counterCharChaosCircuit, setCounterCharChaosCircuit] = useState(0);
	const incrementCounterCharChaosCircuit = () => {
		setCounterCharChaosCircuit(counterCharChaosCircuit + 1);
	};
	const decrementCounterCharChaosCircuit = () => {
		if (counterCharChaosCircuit !== 0) {
			setCounterCharChaosCircuit(counterCharChaosCircuit - 1);
		}
	};
	//
	const [counterTalChaosCircuit, setCounterTalChaosCircuit] = useState(0);
	const incrementCounterTalChaosCircuit = () => {
		setCounterTalChaosCircuit(counterTalChaosCircuit + 1);
	};
	const decrementCounterTalChaosCircuit = () => {
		if (counterTalChaosCircuit !== 0) {
			setCounterTalChaosCircuit(counterTalChaosCircuit - 1);
		}
	};
	//
	const [counterCharChaosCore, setCounterCharChaosCore] = useState(0);
	const incrementCounterCharChaosCore = () => {
		setCounterCharChaosCore(counterCharChaosCore + 1);
	};
	const decrementCounterCharChaosCore = () => {
		if (counterCharChaosCore !== 0) {
			setCounterCharChaosCore(counterCharChaosCore - 1);
		}
	};
	//
	const [counterTalChaosCore, setCounterTalChaosCore] = useState(0);
	const incrementCounterTalChaosCore = () => {
		setCounterTalChaosCore(counterTalChaosCore + 1);
	};
	const decrementCounterTalChaosCore = () => {
		if (counterTalChaosCore !== 0) {
			setCounterTalChaosCore(counterTalChaosCore - 1);
		}
	};
	//Mist Grasses
	const [counterCharMistGrassPollen, setCounterCharMistGrassPollen] = useState(0);
	const incrementCounterCharMistGrassPollen = () => {
		setCounterCharMistGrassPollen(counterCharMistGrassPollen + 1);
	};
	const decrementCounterCharMistGrassPollen = () => {
		if (counterCharMistGrassPollen !== 0) {
			setCounterCharMistGrassPollen(counterCharMistGrassPollen - 1);
		}
	};
	//
	const [counterTalMistGrassPollen, setCounterTalMistGrassPollen] = useState(0);
	const incrementCounterTalMistGrassPollen = () => {
		setCounterTalMistGrassPollen(counterTalMistGrassPollen + 1);
	};
	const decrementCounterTalMistGrassPollen = () => {
		if (counterTalMistGrassPollen !== 0) {
			setCounterTalMistGrassPollen(counterTalMistGrassPollen - 1);
		}
	};

	//
	const [counterCharMistGrass, setCounterCharMistGrass] = useState(0);
	const incrementCounterCharMistGrass = () => {
		setCounterCharMistGrass(counterCharMistGrass + 1);
	};
	const decrementCounterCharMistGrass = () => {
		if (counterCharMistGrass !== 0) {
			setCounterCharMistGrass(counterCharMistGrass - 1);
		}
	};
	//
	const [counterTalMistGrass, setCounterTalMistGrass] = useState(0);
	const incrementCounterTalMistGrass = () => {
		setCounterTalMistGrass(counterTalMistGrass + 1);
	};
	const decrementCounterTalMistGrass = () => {
		if (counterTalMistGrass !== 0) {
			setCounterTalMistGrass(counterTalMistGrass - 1);
		}
	};
	//
	const [counterCharInspectorSacrificialKnife, setCounterCharInspectorSacrificialKnife] = useState(0);
	const incrementCounterCharInspectorSacrificialKnife = () => {
		setCounterCharInspectorSacrificialKnife(counterCharInspectorSacrificialKnife + 1);
	};
	const decrementCounterCharInspectorSacrificialKnife = () => {
		if (counterCharInspectorSacrificialKnife !== 0) {
			setCounterCharInspectorSacrificialKnife(counterCharInspectorSacrificialKnife - 1);
		}
	};
	//
	const [counterTalInspectorSacrificialKnife, setCounterTalInspectorSacrificialKnife] = useState(0);
	const incrementCounterTalInspectorSacrificialKnife = () => {
		setCounterTalInspectorSacrificialKnife(counterTalInspectorSacrificialKnife + 1);
	};
	const decrementCounterTalInspectorSacrificialKnife = () => {
		if (counterTalInspectorSacrificialKnife !== 0) {
			setCounterTalInspectorSacrificialKnife(counterTalInspectorSacrificialKnife - 1);
		}
	};

	//Sacrificial Knives
	const [counterCharHunterSacrificialKnife, setCounterCharHunterSacrificialKnife] = useState(0);
	const incrementCounterCharHunterSacrificialKnife = () => {
		setCounterCharHunterSacrificialKnife(counterCharHunterSacrificialKnife + 1);
	};
	const decrementCounterCharHunterSacrificialKnife = () => {
		if (counterCharHunterSacrificialKnife !== 0) {
			setCounterCharHunterSacrificialKnife(counterCharHunterSacrificialKnife - 1);
		}
	};
	//
	const [counterTalHunterSacrificialKnife, setCounterTalHunterSacrificialKnife] = useState(0);
	const incrementCounterTalHunterSacrificialKnife = () => {
		setCounterTalHunterSacrificialKnife(counterTalHunterSacrificialKnife + 1);
	};
	const decrementCounterTalHunterSacrificialKnife = () => {
		if (counterTalHunterSacrificialKnife !== 0) {
			setCounterTalHunterSacrificialKnife(counterTalHunterSacrificialKnife - 1);
		}
	};

	//
	const [counterCharAgentSacrificialKnife, setCounterCharAgentSacrificialKnife] = useState(0);
	const incrementCounterCharAgentSacrificialKnife = () => {
		setCounterCharAgentSacrificialKnife(counterCharAgentSacrificialKnife + 1);
	};
	const decrementCounterCharAgentSacrificialKnife = () => {
		if (counterCharAgentSacrificialKnife !== 0) {
			setCounterCharAgentSacrificialKnife(counterCharAgentSacrificialKnife - 1);
		}
	};
	//
	const [counterTalAgentSacrificialKnife, setCounterTalAgentSacrificialKnife] = useState(0);
	const incrementCounterTalAgentSacrificialKnife = () => {
		setCounterTalAgentSacrificialKnife(counterTalAgentSacrificialKnife + 1);
	};
	const decrementCounterTalAgentSacrificialKnife = () => {
		if (counterTalAgentSacrificialKnife !== 0) {
			setCounterTalAgentSacrificialKnife(counterTalAgentSacrificialKnife - 1);
		}
	};
	//
	const [counterCharMistGrassWick, setCounterCharMistGrassWick] = useState(0);
	const incrementCounterCharMistGrassWick = () => {
		setCounterCharMistGrassWick(counterCharMistGrassWick + 1);
	};
	const decrementCounterCharMistGrassWick = () => {
		if (counterCharMistGrassWick !== 0) {
			setCounterCharMistGrassWick(counterCharMistGrassWick - 1);
		}
	};
	//
	const [counterTalMistGrassWick, setCounterTalMistGrassWick] = useState(0);
	const incrementCounterTalMistGrassWick = () => {
		setCounterTalMistGrassWick(counterTalMistGrassWick + 1);
	};
	const decrementCounterTalMistGrassWick = () => {
		if (counterTalMistGrassWick !== 0) {
			setCounterTalMistGrassWick(counterTalMistGrassWick - 1);
		}
	};

	//Bone Shards
	const [counterCharFragileBoneShard, setCounterCharFragileBoneShard] = useState(0);
	const incrementCounterCharFragileBoneShard = () => {
		setCounterCharFragileBoneShard(counterCharFragileBoneShard + 1);
	};
	const decrementCounterCharFragileBoneShard = () => {
		if (counterCharFragileBoneShard !== 0) {
			setCounterCharFragileBoneShard(counterCharFragileBoneShard - 1);
		}
	};
	//
	const [counterTalFragileBoneShard, setCounterTalFragileBoneShard] = useState(0);
	const incrementCounterTalFragileBoneShard = () => {
		setCounterTalFragileBoneShard(counterTalFragileBoneShard + 1);
	};
	const decrementCounterTalFragileBoneShard = () => {
		if (counterTalFragileBoneShard !== 0) {
			setCounterTalFragileBoneShard(counterTalFragileBoneShard - 1);
		}
	};

	//
	const [counterCharSturdyBoneShard, setCounterCharSturdyBoneShard] = useState(0);
	const incrementCounterCharSturdyBoneShard = () => {
		setCounterCharSturdyBoneShard(counterCharSturdyBoneShard + 1);
	};
	const decrementCounterCharSturdyBoneShard = () => {
		if (counterCharSturdyBoneShard !== 0) {
			setCounterCharSturdyBoneShard(counterCharSturdyBoneShard - 1);
		}
	};
	//
	const [counterTalSturdyBoneShard, setCounterTalSturdyBoneShard] = useState(0);
	const incrementCounterTalSturdyBoneShard = () => {
		setCounterTalSturdyBoneShard(counterTalSturdyBoneShard + 1);
	};
	const decrementCounterTalSturdyBoneShard = () => {
		if (counterTalSturdyBoneShard !== 0) {
			setCounterTalSturdyBoneShard(counterTalSturdyBoneShard - 1);
		}
	};
	//
	const [counterCharFossilizedBoneShard, setCounterCharFossilizedBoneShard] = useState(0);
	const incrementCounterCharFossilizedBoneShard = () => {
		setCounterCharFossilizedBoneShard(counterCharFossilizedBoneShard + 1);
	};
	const decrementCounterCharFossilizedBoneShard = () => {
		if (counterCharFossilizedBoneShard !== 0) {
			setCounterCharFossilizedBoneShard(counterCharFossilizedBoneShard - 1);
		}
	};
	//
	const [counterTalFossilizedBoneShard, setCounterTalFossilizedBoneShard] = useState(0);
	const incrementCounterTalFossilizedBoneShard = () => {
		setCounterTalFossilizedBoneShard(counterTalFossilizedBoneShard + 1);
	};
	const decrementCounterTalFossilizedBoneShard = () => {
		if (counterTalFossilizedBoneShard !== 0) {
			setCounterTalFossilizedBoneShard(counterTalFossilizedBoneShard - 1);
		}
	};

	//Sentinel Chaos Parts
	const [counterCharChaosGear, setCounterCharChaosGear] = useState(0);
	const incrementCounterCharChaosGear = () => {
		setCounterCharChaosGear(counterCharChaosGear + 1);
	};
	const decrementCounterCharChaosGear = () => {
		if (counterCharChaosGear !== 0) {
			setCounterCharChaosGear(counterCharChaosGear - 1);
		}
	};
	//
	const [counterTalChaosGear, setCounterTalChaosGear] = useState(0);
	const incrementCounterTalChaosGear = () => {
		setCounterTalChaosGear(counterTalChaosGear + 1);
	};
	const decrementCounterTalChaosGear = () => {
		if (counterTalChaosGear !== 0) {
			setCounterTalChaosGear(counterTalChaosGear - 1);
		}
	};

	//
	const [counterCharChaosAxis, setCounterCharChaosAxis] = useState(0);
	const incrementCounterCharChaosAxis = () => {
		setCounterCharChaosAxis(counterCharChaosAxis + 1);
	};
	const decrementCounterCharChaosAxis = () => {
		if (counterCharChaosAxis !== 0) {
			setCounterCharChaosAxis(counterCharChaosAxis - 1);
		}
	};
	//
	const [counterTalChaosAxis, setCounterTalChaosAxis] = useState(0);
	const incrementCounterTalChaosAxis = () => {
		setCounterTalChaosAxis(counterTalChaosAxis + 1);
	};
	const decrementCounterTalChaosAxis = () => {
		if (counterTalChaosAxis !== 0) {
			setCounterTalChaosAxis(counterTalChaosAxis - 1);
		}
	};
	//
	const [counterCharChaosOculus, setCounterCharChaosOculus] = useState(0);
	const incrementCounterCharChaosOculus = () => {
		setCounterCharChaosOculus(counterCharChaosOculus + 1);
	};
	const decrementCounterCharChaosOculus = () => {
		if (counterCharChaosOculus !== 0) {
			setCounterCharChaosOculus(counterCharChaosOculus - 1);
		}
	};
	//
	const [counterTalChaosOculus, setCounterTalChaosOculus] = useState(0);
	const incrementCounterTalChaosOculus = () => {
		setCounterTalChaosOculus(counterTalChaosOculus + 1);
	};
	const decrementCounterTalChaosOculus = () => {
		if (counterTalChaosOculus !== 0) {
			setCounterTalChaosOculus(counterTalChaosOculus - 1);
		}
	};
	//Mirror Maiden Prisms
	const [counterCharDismalPrism, setCounterCharDismalPrism] = useState(0);
	const incrementCounterCharDismalPrism = () => {
		setCounterCharDismalPrism(counterCharDismalPrism + 1);
	};
	const decrementCounterCharDismalPrism = () => {
		if (counterCharDismalPrism !== 0) {
			setCounterCharDismalPrism(counterCharDismalPrism - 1);
		}
	};
	//
	const [counterTalDismalPrism, setCounterTalDismalPrism] = useState(0);
	const incrementCounterTalDismalPrism = () => {
		setCounterTalDismalPrism(counterTalDismalPrism + 1);
	};
	const decrementCounterTalDismalPrism = () => {
		if (counterTalDismalPrism !== 0) {
			setCounterTalDismalPrism(counterTalDismalPrism - 1);
		}
	};

	//
	const [counterCharCrystalPrism, setCounterCharCrystalPrism] = useState(0);
	const incrementCounterCharCrystalPrism = () => {
		setCounterCharCrystalPrism(counterCharCrystalPrism + 1);
	};
	const decrementCounterCharCrystalPrism = () => {
		if (counterCharCrystalPrism !== 0) {
			setCounterCharCrystalPrism(counterCharCrystalPrism - 1);
		}
	};
	//
	const [counterTalCrystalPrism, setCounterTalCrystalPrism] = useState(0);
	const incrementCounterTalCrystalPrism = () => {
		setCounterTalCrystalPrism(counterTalCrystalPrism + 1);
	};
	const decrementCounterTalCrystalPrism = () => {
		if (counterTalCrystalPrism !== 0) {
			setCounterTalCrystalPrism(counterTalCrystalPrism - 1);
		}
	};
	//
	const [counterCharPolarizingPrism, setCounterCharPolarizingPrism] = useState(0);
	const incrementCounterCharPolarizingPrism = () => {
		setCounterCharPolarizingPrism(counterCharPolarizingPrism + 1);
	};
	const decrementCounterCharPolarizingPrism = () => {
		if (counterCharPolarizingPrism !== 0) {
			setCounterCharPolarizingPrism(counterCharPolarizingPrism - 1);
		}
	};
	//
	const [counterTalPolarizingPrism, setCounterTalPolarizingPrism] = useState(0);
	const incrementCounterTalPolarizingPrism = () => {
		setCounterTalPolarizingPrism(counterTalPolarizingPrism + 1);
	};
	const decrementCounterTalPolarizingPrism = () => {
		if (counterTalPolarizingPrism !== 0) {
			setCounterTalPolarizingPrism(counterTalPolarizingPrism - 1);
		}
	};

	//Concealed Riftwolf Claws
	const [counterCharConcealedClaw, setCounterCharConcealedClaw] = useState(0);
	const incrementCounterCharConcealedClaw = () => {
		setCounterCharConcealedClaw(counterCharConcealedClaw + 1);
	};
	const decrementCounterCharConcealedClaw = () => {
		if (counterCharConcealedClaw !== 0) {
			setCounterCharConcealedClaw(counterCharConcealedClaw - 1);
		}
	};
	//
	const [counterTalConcealedClaw, setCounterTalConcealedClaw] = useState(0);
	const incrementCounterTalConcealedClaw = () => {
		setCounterTalConcealedClaw(counterTalConcealedClaw + 1);
	};
	const decrementCounterTalConcealedClaw = () => {
		if (counterTalConcealedClaw !== 0) {
			setCounterTalConcealedClaw(counterTalConcealedClaw - 1);
		}
	};

	//
	const [counterCharConcealedUnguis, setCounterCharConcealedUnguis] = useState(0);
	const incrementCounterCharConcealedUnguis = () => {
		setCounterCharConcealedUnguis(counterCharConcealedUnguis + 1);
	};
	const decrementCounterCharConcealedUnguis = () => {
		if (counterCharConcealedUnguis !== 0) {
			setCounterCharConcealedUnguis(counterCharConcealedUnguis - 1);
		}
	};
	//
	const [counterTalConcealedUnguis, setCounterTalConcealedUnguis] = useState(0);
	const incrementCounterTalConcealedUnguis = () => {
		setCounterTalConcealedUnguis(counterTalConcealedUnguis + 1);
	};
	const decrementCounterTalConcealedUnguis = () => {
		if (counterTalConcealedUnguis !== 0) {
			setCounterTalConcealedUnguis(counterTalConcealedUnguis - 1);
		}
	};
	//
	const [counterCharConcealedTalon, setCounterCharConcealedTalon] = useState(0);
	const incrementCounterCharConcealedTalon = () => {
		setCounterCharConcealedTalon(counterCharConcealedTalon + 1);
	};
	const decrementCounterCharConcealedTalon = () => {
		if (counterCharConcealedTalon !== 0) {
			setCounterCharConcealedTalon(counterCharConcealedTalon - 1);
		}
	};
	//
	const [counterTalConcealedTalon, setCounterTalConcealedTalon] = useState(0);
	const incrementCounterTalConcealedTalon = () => {
		setCounterTalConcealedTalon(counterTalConcealedTalon + 1);
	};
	const decrementCounterTalConcealedTalon = () => {
		if (counterTalConcealedTalon !== 0) {
			setCounterTalConcealedTalon(counterTalConcealedTalon - 1);
		}
	};

	//Statuettes
	const [counterCharGloomyStatuette, setCounterCharGloomyStatuette] = useState(0);
	const incrementCounterCharGloomyStatuette = () => {
		setCounterCharGloomyStatuette(counterCharGloomyStatuette + 1);
	};
	const decrementCounterCharGloomyStatuette = () => {
		if (counterCharGloomyStatuette !== 0) {
			setCounterCharGloomyStatuette(counterCharGloomyStatuette - 1);
		}
	};
	//
	const [counterTalGloomyStatuette, setCounterTalGloomyStatuette] = useState(0);
	const incrementCounterTalGloomyStatuette = () => {
		setCounterTalGloomyStatuette(counterTalGloomyStatuette + 1);
	};
	const decrementCounterTalGloomyStatuette = () => {
		if (counterTalGloomyStatuette !== 0) {
			setCounterTalGloomyStatuette(counterTalGloomyStatuette - 1);
		}
	};

	//
	const [counterCharDarkStatuette, setCounterCharDarkStatuette] = useState(0);
	const incrementCounterCharDarkStatuette = () => {
		setCounterCharDarkStatuette(counterCharDarkStatuette + 1);
	};
	const decrementCounterCharDarkStatuette = () => {
		if (counterCharDarkStatuette !== 0) {
			setCounterCharDarkStatuette(counterCharDarkStatuette - 1);
		}
	};
	//
	const [counterTalDarkStatuette, setCounterTalDarkStatuette] = useState(0);
	const incrementCounterTalDarkStatuette = () => {
		setCounterTalDarkStatuette(counterTalDarkStatuette + 1);
	};
	const decrementCounterTalDarkStatuette = () => {
		if (counterTalDarkStatuette !== 0) {
			setCounterTalDarkStatuette(counterTalDarkStatuette - 1);
		}
	};
	//
	const [counterCharDeathlyStatuette, setCounterCharDeathlyStatuette] = useState(0);
	const incrementCounterCharDeathlyStatuette = () => {
		setCounterCharDeathlyStatuette(counterCharDeathlyStatuette + 1);
	};
	const decrementCounterCharDeathlyStatuette = () => {
		if (counterCharDeathlyStatuette !== 0) {
			setCounterCharDeathlyStatuette(counterCharDeathlyStatuette - 1);
		}
	};
	//
	const [counterTalDeathlyStatuette, setCounterTalDeathlyStatuette] = useState(0);
	const incrementCounterTalDeathlyStatuette = () => {
		setCounterTalDeathlyStatuette(counterTalDeathlyStatuette + 1);
	};
	const decrementCounterTalDeathlyStatuette = () => {
		if (counterTalDeathlyStatuette !== 0) {
			setCounterTalDeathlyStatuette(counterTalDeathlyStatuette - 1);
		}
	};

	//Fungal Nuclei
	const [counterCharInactivatedFungalNucleus, setCounterCharInactivatedFungalNucleus] = useState(0);
	const incrementCounterCharInactivatedFungalNucleus = () => {
		setCounterCharInactivatedFungalNucleus(counterCharInactivatedFungalNucleus + 1);
	};
	const decrementCounterCharInactivatedFungalNucleus = () => {
		if (counterCharInactivatedFungalNucleus !== 0) {
			setCounterCharInactivatedFungalNucleus(counterCharInactivatedFungalNucleus - 1);
		}
	};
	//
	const [counterTalInactivatedFungalNucleus, setCounterTalInactivatedFungalNucleus] = useState(0);
	const incrementCounterTalInactivatedFungalNucleus = () => {
		setCounterTalInactivatedFungalNucleus(counterTalInactivatedFungalNucleus + 1);
	};
	const decrementCounterTalInactivatedFungalNucleus = () => {
		if (counterTalInactivatedFungalNucleus !== 0) {
			setCounterTalInactivatedFungalNucleus(counterTalInactivatedFungalNucleus - 1);
		}
	};

	//
	const [counterCharDormantFungalNucleus, setCounterCharDormantFungalNucleus] = useState(0);
	const incrementCounterCharDormantFungalNucleus = () => {
		setCounterCharDormantFungalNucleus(counterCharDormantFungalNucleus + 1);
	};
	const decrementCounterCharDormantFungalNucleus = () => {
		if (counterCharDormantFungalNucleus !== 0) {
			setCounterCharDormantFungalNucleus(counterCharDormantFungalNucleus - 1);
		}
	};
	//
	const [counterTalDormantFungalNucleus, setCounterTalDormantFungalNucleus] = useState(0);
	const incrementCounterTalDormantFungalNucleus = () => {
		setCounterTalDormantFungalNucleus(counterTalDormantFungalNucleus + 1);
	};
	const decrementCounterTalDormantFungalNucleus = () => {
		if (counterTalDormantFungalNucleus !== 0) {
			setCounterTalDormantFungalNucleus(counterTalDormantFungalNucleus - 1);
		}
	};
	//
	const [counterCharRobustFungalNucleus, setCounterCharRobustFungalNucleus] = useState(0);
	const incrementCounterCharRobustFungalNucleus = () => {
		setCounterCharRobustFungalNucleus(counterCharRobustFungalNucleus + 1);
	};
	const decrementCounterCharRobustFungalNucleus = () => {
		if (counterCharRobustFungalNucleus !== 0) {
			setCounterCharRobustFungalNucleus(counterCharRobustFungalNucleus - 1);
		}
	};
	//
	const [counterTalRobustFungalNucleus, setCounterTalRobustFungalNucleus] = useState(0);
	const incrementCounterTalRobustFungalNucleus = () => {
		setCounterTalRobustFungalNucleus(counterTalRobustFungalNucleus + 1);
	};
	const decrementCounterTalRobustFungalNucleus = () => {
		if (counterTalRobustFungalNucleus !== 0) {
			setCounterTalRobustFungalNucleus(counterTalRobustFungalNucleus - 1);
		}
	};

	//Drake Chaos Parts
	const [counterCharChaosStorage, setCounterCharChaosStorage] = useState(0);
	const incrementCounterCharChaosStorage = () => {
		setCounterCharChaosStorage(counterCharChaosStorage + 1);
	};
	const decrementCounterCharChaosStorage = () => {
		if (counterCharChaosStorage !== 0) {
			setCounterCharChaosStorage(counterCharChaosStorage - 1);
		}
	};
	//
	const [counterTalChaosStorage, setCounterTalChaosStorage] = useState(0);
	const incrementCounterTalChaosStorage = () => {
		setCounterTalChaosStorage(counterTalChaosStorage + 1);
	};
	const decrementCounterTalChaosStorage = () => {
		if (counterTalChaosStorage !== 0) {
			setCounterTalChaosStorage(counterTalChaosStorage - 1);
		}
	};

	//
	const [counterCharChaosModule, setCounterCharChaosModule] = useState(0);
	const incrementCounterCharChaosModule = () => {
		setCounterCharChaosModule(counterCharChaosModule + 1);
	};
	const decrementCounterCharChaosModule = () => {
		if (counterCharChaosModule !== 0) {
			setCounterCharChaosModule(counterCharChaosModule - 1);
		}
	};
	//
	const [counterTalChaosModule, setCounterTalChaosModule] = useState(0);
	const incrementCounterTalChaosModule = () => {
		setCounterTalChaosModule(counterTalChaosModule + 1);
	};
	const decrementCounterTalChaosModule = () => {
		if (counterTalChaosModule !== 0) {
			setCounterTalChaosModule(counterTalChaosModule - 1);
		}
	};
	//
	const [counterCharChaosBolt, setCounterCharChaosBolt] = useState(0);
	const incrementCounterCharChaosBolt = () => {
		setCounterCharChaosBolt(counterCharChaosBolt + 1);
	};
	const decrementCounterCharChaosBolt = () => {
		if (counterCharChaosBolt !== 0) {
			setCounterCharChaosBolt(counterCharChaosBolt - 1);
		}
	};
	//
	const [counterTalChaosBolt, setCounterTalChaosBolt] = useState(0);
	const incrementCounterTalChaosBolt = () => {
		setCounterTalChaosBolt(counterTalChaosBolt + 1);
	};
	const decrementCounterTalChaosBolt = () => {
		if (counterTalChaosBolt !== 0) {
			setCounterTalChaosBolt(counterTalChaosBolt - 1);
		}
	};

	//Primal Construct Prisms
	const [counterCharDamagedPrism, setCounterCharDamagedPrism] = useState(0);
	const incrementCounterCharDamagedPrism = () => {
		setCounterCharDamagedPrism(counterCharDamagedPrism + 1);
	};
	const decrementCounterCharDamagedPrism = () => {
		if (counterCharDamagedPrism !== 0) {
			setCounterCharDamagedPrism(counterCharDamagedPrism - 1);
		}
	};
	//
	const [counterTalDamagedPrism, setCounterTalDamagedPrism] = useState(0);
	const incrementCounterTalDamagedPrism = () => {
		setCounterTalDamagedPrism(counterTalDamagedPrism + 1);
	};
	const decrementCounterTalDamagedPrism = () => {
		if (counterTalDamagedPrism !== 0) {
			setCounterTalDamagedPrism(counterTalDamagedPrism - 1);
		}
	};

	//
	const [counterCharTurbidPrism, setCounterCharTurbidPrism] = useState(0);
	const incrementCounterCharTurbidPrism = () => {
		setCounterCharTurbidPrism(counterCharTurbidPrism + 1);
	};
	const decrementCounterCharTurbidPrism = () => {
		if (counterCharTurbidPrism !== 0) {
			setCounterCharTurbidPrism(counterCharTurbidPrism - 1);
		}
	};
	//
	const [counterTalTurbidPrism, setCounterTalTurbidPrism] = useState(0);
	const incrementCounterTalTurbidPrism = () => {
		setCounterTalTurbidPrism(counterTalTurbidPrism + 1);
	};
	const decrementCounterTalTurbidPrism = () => {
		if (counterTalTurbidPrism !== 0) {
			setCounterTalTurbidPrism(counterTalTurbidPrism - 1);
		}
	};
	//
	const [counterCharRadiantPrism, setCounterCharRadiantPrism] = useState(0);
	const incrementCounterCharRadiantPrism = () => {
		setCounterCharRadiantPrism(counterCharRadiantPrism + 1);
	};
	const decrementCounterCharRadiantPrism = () => {
		if (counterCharRadiantPrism !== 0) {
			setCounterCharRadiantPrism(counterCharRadiantPrism - 1);
		}
	};
	//
	const [counterTalRadiantPrism, setCounterTalRadiantPrism] = useState(0);
	const incrementCounterTalRadiantPrism = () => {
		setCounterTalRadiantPrism(counterTalRadiantPrism + 1);
	};
	const decrementCounterTalRadiantPrism = () => {
		if (counterTalRadiantPrism !== 0) {
			setCounterTalRadiantPrism(counterTalRadiantPrism - 1);
		}
	};

	//Consecrated Beast Shells
	const [counterCharDesiccatedShell, setCounterCharDesiccatedShell] = useState(0);
	const incrementCounterCharDesiccatedShell = () => {
		setCounterCharDesiccatedShell(counterCharDesiccatedShell + 1);
	};
	const decrementCounterCharDesiccatedShell = () => {
		if (counterCharDesiccatedShell !== 0) {
			setCounterCharDesiccatedShell(counterCharDesiccatedShell - 1);
		}
	};
	//
	const [counterTalDesiccatedShell, setCounterTalDesiccatedShell] = useState(0);
	const incrementCounterTalDesiccatedShell = () => {
		setCounterTalDesiccatedShell(counterTalDesiccatedShell + 1);
	};
	const decrementCounterTalDesiccatedShell = () => {
		if (counterTalDesiccatedShell !== 0) {
			setCounterTalDesiccatedShell(counterTalDesiccatedShell - 1);
		}
	};

	//
	const [counterCharSturdyShell, setCounterCharSturdyShell] = useState(0);
	const incrementCounterCharSturdyShell = () => {
		setCounterCharSturdyShell(counterCharSturdyShell + 1);
	};
	const decrementCounterCharSturdyShell = () => {
		if (counterCharSturdyShell !== 0) {
			setCounterCharSturdyShell(counterCharSturdyShell - 1);
		}
	};
	//
	const [counterTalSturdyShell, setCounterTalSturdyShell] = useState(0);
	const incrementCounterTalSturdyShell = () => {
		setCounterTalSturdyShell(counterTalSturdyShell + 1);
	};
	const decrementCounterTalSturdyShell = () => {
		if (counterTalSturdyShell !== 0) {
			setCounterTalSturdyShell(counterTalSturdyShell - 1);
		}
	};
	//
	const [counterCharMarkedShell, setCounterCharMarkedShell] = useState(0);
	const incrementCounterCharMarkedShell = () => {
		setCounterCharMarkedShell(counterCharMarkedShell + 1);
	};
	const decrementCounterCharMarkedShell = () => {
		if (counterCharMarkedShell !== 0) {
			setCounterCharMarkedShell(counterCharMarkedShell - 1);
		}
	};
	//
	const [counterTalMarkedShell, setCounterTalMarkedShell] = useState(0);
	const incrementCounterTalMarkedShell = () => {
		setCounterTalMarkedShell(counterTalMarkedShell + 1);
	};
	const decrementCounterTalMarkedShell = () => {
		if (counterTalMarkedShell !== 0) {
			setCounterTalMarkedShell(counterTalMarkedShell - 1);
		}
	};

	const inputsCharHave1 = [
		charHeavyHorn,
		charDeadLeyLineBranch,
		charChaosDevice,
		charMistGrassPollen,
		charHunterSacrificialKnife,
		charFragileBoneShard,
		charChaosGear,
		charDismalPrism,
		charConcealedClaw,
		charGloomyStatuette,
		charInactivatedFungalNucleus,
		charChaosStorage,
		charDamagedPrism,
		charDesiccatedShell,
	];
	const inputsCharHave2 = [
		charBlackBronzeHorn,
		charDeadLeyLineLeaves,
		charChaosCircuit,
		charMistGrass,
		charAgentSacrificialKnife,
		charSturdyBoneShard,
		charChaosAxis,
		charCrystalPrism,
		charConcealedUnguis,
		charDarkStatuette,
		charDormantFungalNucleus,
		charChaosModule,
		charTurbidPrism,
		charSturdyShell,
	];
	const inputsCharHave3 = [
		charBlackCrystalHorn,
		charLeyLineSprout,
		charChaosCore,
		charMistGrassWick,
		charInspectorSacrificialKnife,
		charFossilizedBoneShard,
		charChaosOculus,
		charPolarizingPrism,
		charConcealedTalon,
		charDeathlyStatuette,
		charRobustFungalNucleus,
		charChaosBolt,
		charRadiantPrism,
		charMarkedShell,
	];
	const inputsTalHave1 = [
		talHeavyHorn,
		talDeadLeyLineBranch,
		talChaosDevice,
		talMistGrassPollen,
		talHunterSacrificialKnife,
		talFragileBoneShard,
		talChaosGear,
		talDismalPrism,
		talConcealedClaw,
		talGloomyStatuette,
		talInactivatedFungalNucleus,
		talChaosStorage,
		talDamagedPrism,
		talDesiccatedShell,
	];
	const inputsTalHave2 = [
		talBlackBronzeHorn,
		talDeadLeyLineLeaves,
		talChaosCircuit,
		talMistGrass,
		talAgentSacrificialKnife,
		talSturdyBoneShard,
		talChaosAxis,
		talCrystalPrism,
		talConcealedUnguis,
		talDarkStatuette,
		talDormantFungalNucleus,
		talChaosModule,
		talTurbidPrism,
		talSturdyShell,
	];
	const inputsTalHave3 = [
		talBlackCrystalHorn,
		talLeyLineSprout,
		talChaosCore,
		talMistGrassWick,
		talInspectorSacrificialKnife,
		talFossilizedBoneShard,
		talChaosOculus,
		talPolarizingPrism,
		talConcealedTalon,
		talDeathlyStatuette,
		talRobustFungalNucleus,
		talChaosBolt,
		talRadiantPrism,
		talMarkedShell,
	];
	const inputsCharUsed1 = [
		counterCharHeavyHorn,

		counterCharDeadLeyLineBranch,

		counterCharChaosDevice,

		counterCharMistGrassPollen,

		counterCharHunterSacrificialKnife,

		counterCharFragileBoneShard,

		counterCharChaosGear,

		counterCharDismalPrism,

		counterCharConcealedClaw,

		counterCharGloomyStatuette,

		counterCharInactivatedFungalNucleus,

		counterCharChaosStorage,

		counterCharDamagedPrism,

		counterCharDesiccatedShell,
	];
	const inputsCharUsed2 = [
		counterCharBlackBronzeHorn,
		counterCharDeadLeyLineLeaves,
		counterCharChaosCircuit,
		counterCharMistGrass,
		counterCharAgentSacrificialKnife,
		counterCharSturdyBoneShard,
		counterCharChaosAxis,
		counterCharCrystalPrism,
		counterCharConcealedUnguis,
		counterCharDarkStatuette,
		counterCharDormantFungalNucleus,
		counterCharChaosModule,
		counterCharTurbidPrism,
		counterCharSturdyShell,
	];
	const inputsCharUsed3 = [
		counterCharBlackCrystalHorn,
		counterCharLeyLineSprout,
		counterCharChaosCore,
		counterCharInspectorSacrificialKnife,
		counterCharMistGrassWick,
		counterCharFossilizedBoneShard,
		counterCharChaosOculus,
		counterCharPolarizingPrism,
		counterCharConcealedTalon,
		counterCharDeathlyStatuette,
		counterCharRobustFungalNucleus,
		counterCharChaosBolt,
		counterCharRadiantPrism,
		counterCharMarkedShell,
	];

	const inputsTalUsed1 = [
		counterTalHeavyHorn,

		counterTalDeadLeyLineBranch,

		counterTalChaosDevice,

		counterTalMistGrassPollen,

		counterTalInspectorSacrificialKnife,

		counterTalFragileBoneShard,

		counterTalChaosGear,

		counterTalDismalPrism,

		counterTalConcealedClaw,

		counterTalGloomyStatuette,

		counterTalInactivatedFungalNucleus,

		counterTalChaosStorage,

		counterTalDamagedPrism,

		counterTalDesiccatedShell,
	];
	const inputsTalUsed2 = [
		counterTalBlackBronzeHorn,
		counterTalDeadLeyLineLeaves,
		counterTalChaosCircuit,
		counterTalMistGrass,
		counterTalHunterSacrificialKnife,
		counterTalSturdyBoneShard,
		counterTalChaosAxis,
		counterTalCrystalPrism,
		counterTalConcealedUnguis,
		counterTalDarkStatuette,
		counterTalDormantFungalNucleus,
		counterTalChaosModule,
		counterTalTurbidPrism,
		counterTalSturdyShell,
	];
	const inputsTalUsed3 = [
		counterTalBlackCrystalHorn,
		counterTalLeyLineSprout,
		counterTalChaosCore,
		counterTalMistGrassWick,
		counterTalAgentSacrificialKnife,
		counterCharFossilizedBoneShard,
		counterTalChaosOculus,
		counterTalPolarizingPrism,
		counterTalConcealedTalon,
		counterTalDeathlyStatuette,
		counterTalRobustFungalNucleus,
		counterTalChaosBolt,
		counterTalRadiantPrism,
		counterTalMarkedShell,
	];

	const OverallTotalHave = (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14) => {
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
			parseInt(input14)
		);
	};

	const OverallTotalUsed = (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14) => {
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
			parseInt(input14)
		);
	};

	return (
		<div>
			<h1 className="general-asc-mat-h1">Generic Common Ascension Materials</h1>
			<div className="general-asc-mat-block">
				<table className="general-asc-mat-table">
					<thead className="general-asc-mat-header">
						<tr>
							<th>Character</th>
							<th>Need</th>
							<th>Have</th>
							<th>Used</th>
							<th>Talent Books</th>
							<th>Need</th>
							<th>Have</th>
							<th>Used</th>
							<th>Characters / Talent Books</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="9">Hilichurl Horns</td>
						</tr>
						<tr>
							<td>Heavy Horn</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charHeavyHorn}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={charHeavyHorn - counterCharHeavyHorn} onChange={(e) => setCharHeavyHorn(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharHeavyHorn}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharHeavyHorn)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharHeavyHorn}>
											+
										</button>
									</>
								}
							</td>
							<td>Heavy Horn</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talHeavyHorn}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talHeavyHorn - counterTalHeavyHorn} onChange={(e) => CharHeavyHorn(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalHeavyHorn}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalHeavyHorn)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalHeavyHorn}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Black Bronze Horn </td>

							<td>{7 * totalTalentLvUpPerChar_Char2 - charBlackBronzeHorn}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charBlackBronzeHorn - counterCharBlackBronzeHorn}
									onChange={(e) => setCharBlackBronzeHorn(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharBlackBronzeHorn}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharBlackBronzeHorn)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharBlackBronzeHorn}>
											+
										</button>
									</>
								}
							</td>
							<td>Black Bronze Horn</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talBlackBronzeHorn}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talBlackBronzeHorn - counterTalBlackBronzeHorn}
									onChange={(e) => setTalBlackBronzeHorn(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalBlackBronzeHorn}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalBlackBronzeHorn)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalBlackBronzeHorn}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Black Crystal Horn</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charBlackCrystalHorn}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charBlackCrystalHorn - counterCharBlackCrystalHorn}
									onChange={(e) => setCharBlackCrystalHorn(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharBlackCrystalHorn}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharBlackCrystalHorn)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharBlackCrystalHorn}>
											+
										</button>
									</>
								}
							</td>
							<td>Black Crystal Horn</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talBlackCrystalHorn}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talBlackCrystalHorn - counterTalBlackCrystalHorn}
									onChange={(e) => setTalBlackCrystalHorn(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalBlackCrystalHorn}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalBlackCrystalHorn)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalBlackCrystalHorn}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charHeavyHorn, charBlackBronzeHorn, charBlackCrystalHorn)}</td>
							<td>{LvUpMatTotalHave(charHeavyHorn, charBlackBronzeHorn, charBlackCrystalHorn) - LvUpMatTotalUsed(counterCharHeavyHorn, counterCharBlackCrystalHorn, counterCharBlackBronzeHorn)}</td>
							<td>{LvUpMatTotalUsed(counterCharHeavyHorn, counterCharBlackCrystalHorn, counterCharBlackBronzeHorn)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talHeavyHorn, talBlackBronzeHorn, talBlackCrystalHorn)}</td>
							<td>{LvUpMatTotalHave(talHeavyHorn, talBlackBronzeHorn, talBlackCrystalHorn) - LvUpMatTotalUsed(counterTalHeavyHorn, counterTalBlackCrystalHorn, counterTalBlackBronzeHorn)}</td>
							<td>{LvUpMatTotalUsed(counterTalHeavyHorn, counterTalBlackCrystalHorn, counterTalBlackBronzeHorn)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="9">Ley Line Branches</td>
						</tr>

						<tr>
							<td>Dead Ley Line Branch</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charDeadLeyLineBranch}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDeadLeyLineBranch - counterCharDeadLeyLineBranch}
									onChange={(e) => setCharDeadLeyLineBranch(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDeadLeyLineBranch}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDeadLeyLineBranch)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDeadLeyLineBranch}>
											+
										</button>
									</>
								}
							</td>
							<td>Dead Ley Line Branch</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talDeadLeyLineBranch}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDeadLeyLineBranch - counterTalDeadLeyLineBranch}
									onChange={(e) => setTalDeadLeyLineBranch(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDeadLeyLineBranch}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDeadLeyLineBranch)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDeadLeyLineBranch}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Dead Ley Line Leaves</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charDeadLeyLineLeaves}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDeadLeyLineLeaves - counterCharDeadLeyLineLeaves}
									onChange={(e) => setCharDeadLeyLineLeaves(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDeadLeyLineLeaves}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDeadLeyLineLeaves)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDeadLeyLineLeaves}>
											+
										</button>
									</>
								}
							</td>
							<td>Dead Ley Line Leaves</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talDeadLeyLineLeaves}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDeadLeyLineLeaves - counterTalDeadLeyLineLeaves}
									onChange={(e) => setTalDeadLeyLineLeaves(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDeadLeyLineLeaves}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDeadLeyLineLeaves)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDeadLeyLineLeaves}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Ley Line Sprout</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charLeyLineSprout}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charLeyLineSprout - counterCharLeyLineSprout}
									onChange={(e) => setCharLeyLineSprout(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharLeyLineSprout}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharLeyLineSprout)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharLeyLineSprout}>
											+
										</button>
									</>
								}
							</td>
							<td>Ley Line Sprout</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talLeyLineSprout}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talLeyLineSprout - counterTalLeyLineSprout}
									onChange={(e) => setTalLeyLineSprout(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalLeyLineSprout}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalLeyLineSprout)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalLeyLineSprout}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>
								{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charDeadLeyLineBranch, charDeadLeyLineLeaves, charLeyLineSprout)}
							</td>
							<td>
								{LvUpMatTotalHave(charDeadLeyLineBranch, charDeadLeyLineLeaves, charLeyLineSprout) -
									LvUpMatTotalUsed(counterCharDeadLeyLineBranch, counterCharDeadLeyLineLeaves, counterCharLeyLineSprout)}
							</td>

							<td>{LvUpMatTotalUsed(counterCharDeadLeyLineBranch, counterCharDeadLeyLineLeaves, counterCharLeyLineSprout)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talDeadLeyLineBranch, talDeadLeyLineLeaves, talLeyLineSprout)}</td>
							<td>
								{LvUpMatTotalHave(talDeadLeyLineBranch, talDeadLeyLineLeaves, talLeyLineSprout) - LvUpMatTotalUsed(counterTalDeadLeyLineBranch, counterTalDeadLeyLineLeaves, counterTalLeyLineSprout)}
							</td>
							<td>{LvUpMatTotalUsed(counterTalDeadLeyLineBranch, counterTalDeadLeyLineLeaves, counterTalLeyLineSprout)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Chaos Parts</td>
						</tr>

						<tr>
							<td>Chaos Device</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charChaosDevice}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charChaosDevice - counterCharChaosDevice}
									onChange={(e) => setCharChaosDevice(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosDevice}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosDevice)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosDevice}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Device</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talChaosDevice}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosDevice - counterTalChaosDevice} onChange={(e) => setTalChaosDevice(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosDevice}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosDevice)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosDevice}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Chaos Circuit</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charChaosCircuit}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charChaosCircuit - counterCharChaosCircuit}
									onChange={(e) => setCharChaosCircuit(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosCircuit}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosCircuit)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosCircuit}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Circuit</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talChaosCircuit}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talChaosCircuit - counterTalChaosCircuit}
									onChange={(e) => setTalChaosCircuit(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosCircuit}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosCircuit)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosCircuit}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Chaos Core</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charChaosCore}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={charChaosCore - counterCharChaosCore} onChange={(e) => setCharChaosCore(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosCore}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosCore)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosCore}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Core</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talChaosCore}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosCore - counterTalChaosCore} onChange={(e) => setTalChaosCore(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosCore}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosCore)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosCore}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charChaosDevice, charChaosCircuit, charChaosCore)}</td>
							<td>{LvUpMatTotalHave(charChaosDevice, charChaosCircuit, charChaosCore) - LvUpMatTotalUsed(counterCharChaosDevice, counterCharChaosCircuit, counterCharChaosCore)}</td>

							<td>{LvUpMatTotalUsed(counterCharChaosDevice, counterCharChaosCircuit, counterCharChaosCore)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talChaosDevice, talChaosCircuit, talChaosCore)}</td>
							<td>{LvUpMatTotalHave(talChaosDevice, talChaosCircuit, talChaosCore) - LvUpMatTotalUsed(counterTalChaosDevice, counterTalChaosCircuit, counterTalChaosCore)}</td>
							<td>{LvUpMatTotalUsed(counterTalChaosDevice, counterTalChaosCircuit, counterTalChaosCore)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Mist Grasses</td>
						</tr>

						<tr>
							<td>Mist Grass Pollen</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charMistGrassPollen}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charMistGrassPollen - counterCharMistGrassPollen}
									onChange={(e) => setCharMistGrassPollen(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharMistGrassPollen}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharMistGrassPollen)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharMistGrassPollen}>
											+
										</button>
									</>
								}
							</td>
							<td>Mist Grass Pollen</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talMistGrassPollen}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talMistGrassPollen - counterTalMistGrassPollen}
									onChange={(e) => setTalMistGrassPollen(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalMistGrassPollen}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalMistGrassPollen)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalMistGrassPollen}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Mist Grass</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charMistGrass}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={charMistGrass - counterCharMistGrass} onChange={(e) => setCharMistGrass(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharMistGrass}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharMistGrass)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharMistGrass}>
											+
										</button>
									</>
								}
							</td>
							<td>Mist Grass</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talMistGrass}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talMistGrass - counterTalMistGrass} onChange={(e) => setTalMistGrass(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalMistGrass}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalMistGrass)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalMistGrass}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Mist Grass Wick</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charMistGrassWick}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charMistGrassWick - counterCharMistGrassWick}
									onChange={(e) => setCharMistGrassWick(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharMistGrassWick}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharMistGrassWick)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharMistGrassWick}>
											+
										</button>
									</>
								}
							</td>
							<td>Mist Grass Wick</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talMistGrassWick}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talMistGrassWick - counterTalMistGrassWick}
									onChange={(e) => setTalMistGrassWick(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalMistGrassWick}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalMistGrassWick)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalMistGrassWick}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charMistGrassPollen, charMistGrass, charMistGrassWick)}</td>
							<td>{LvUpMatTotalHave(charMistGrassPollen, charMistGrass, charMistGrassWick) - LvUpMatTotalUsed(counterCharMistGrassPollen, counterCharMistGrass, counterCharMistGrassWick)}</td>

							<td>{LvUpMatTotalUsed(counterCharMistGrassPollen, counterCharMistGrass, counterCharMistGrassWick)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talMistGrassPollen, talMistGrass, talMistGrassWick)}</td>
							<td>{LvUpMatTotalHave(talMistGrassPollen, talMistGrass, talMistGrassWick) - LvUpMatTotalUsed(counterTalMistGrassPollen, counterTalMistGrass, counterTalMistGrassWick)}</td>
							<td>{LvUpMatTotalUsed(counterTalMistGrassPollen, counterTalMistGrass, counterTalMistGrassWick)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Sacrificial Knives</td>
						</tr>

						<tr>
							<td>Hunter's Sacrificial Knife</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charHunterSacrificialKnife}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charHunterSacrificialKnife - counterCharHunterSacrificialKnife}
									onChange={(e) => setCharHunterSacrificialKnife(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharHunterSacrificialKnife}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharHunterSacrificialKnife)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharHunterSacrificialKnife}>
											+
										</button>
									</>
								}
							</td>
							<td>Hunter's Sacrificial Knife</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talHunterSacrificialKnife}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talHunterSacrificialKnife - counterTalHunterSacrificialKnife}
									onChange={(e) => setTalHunterSacrificialKnife(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalHunterSacrificialKnife}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalHunterSacrificialKnife)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalHunterSacrificialKnife}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Agent's Sacrificial Knife</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charAgentSacrificialKnife}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charAgentSacrificialKnife - counterCharAgentSacrificialKnife}
									onChange={(e) => setCharAgentSacrificialKnife(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharAgentSacrificialKnife}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharAgentSacrificialKnife)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharAgentSacrificialKnife}>
											+
										</button>
									</>
								}
							</td>
							<td>Agent's Sacrificial Knife</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talAgentSacrificialKnife}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talAgentSacrificialKnife - counterTalAgentSacrificialKnife}
									onChange={(e) => setTalAgentSacrificialKnife(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalAgentSacrificialKnife}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalAgentSacrificialKnife)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalAgentSacrificialKnife}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Inspector's Sacrificial Knife</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charInspectorSacrificialKnife}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charInspectorSacrificialKnife - counterCharInspectorSacrificialKnife}
									onChange={(e) => setCharInspectorSacrificialKnife(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharInspectorSacrificialKnife}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharInspectorSacrificialKnife)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharInspectorSacrificialKnife}>
											+
										</button>
									</>
								}
							</td>
							<td>Inspector's Sacrificial Knife</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talInspectorSacrificialKnife}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talInspectorSacrificialKnife - counterTalInspectorSacrificialKnife}
									onChange={(e) => setTalInspectorSacrificialKnife(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalInspectorSacrificialKnife}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalInspectorSacrificialKnife)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalInspectorSacrificialKnife}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>
								{totalTalentLvUpPerChar_Char1 +
									totalTalentLvUpPerChar_Char2 +
									totalTalentLvUpPerChar_Char3 * 7 -
									LvUpMatTotalHave(charHunterSacrificialKnife, charAgentSacrificialKnife, charInspectorSacrificialKnife)}
							</td>
							<td>
								{LvUpMatTotalHave(charHunterSacrificialKnife, charAgentSacrificialKnife, charInspectorSacrificialKnife) -
									LvUpMatTotalUsed(counterCharHunterSacrificialKnife, counterCharAgentSacrificialKnife, counterCharInspectorSacrificialKnife)}
							</td>

							<td>{LvUpMatTotalUsed(counterCharHunterSacrificialKnife, counterCharAgentSacrificialKnife, counterCharInspectorSacrificialKnife)}</td>
							<td>TOTAL</td>
							<td>
								{totalTalentLvUpPerChar_Tal1 +
									totalTalentLvUpPerChar_Tal2 +
									totalTalentLvUpPerChar_Tal3 * 7 -
									LvUpMatTotalHave(talHunterSacrificialKnife, talAgentSacrificialKnife, talInspectorSacrificialKnife)}
							</td>
							<td>
								{LvUpMatTotalHave(talHunterSacrificialKnife, talAgentSacrificialKnife, talInspectorSacrificialKnife) -
									LvUpMatTotalUsed(counterTalHunterSacrificialKnife, counterTalAgentSacrificialKnife, counterTalInspectorSacrificialKnife)}
							</td>
							<td>{LvUpMatTotalUsed(counterTalHunterSacrificialKnife, counterTalAgentSacrificialKnife, counterTalInspectorSacrificialKnife)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Bone Shards</td>
						</tr>

						<tr>
							<td>Fragile Bone Shard</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charFragileBoneShard}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charFragileBoneShard - counterCharFragileBoneShard}
									onChange={(e) => setCharFragileBoneShard(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharFragileBoneShard}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharFragileBoneShard)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharFragileBoneShard}>
											+
										</button>
									</>
								}
							</td>
							<td>Fragile Bone Shard</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talFragileBoneShard}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talFragileBoneShard - counterTalFragileBoneShard}
									onChange={(e) => setTalFragileBoneShard(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalFragileBoneShard}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalFragileBoneShard)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalFragileBoneShard}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Sturdy Bone Shard</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charSturdyBoneShard}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charSturdyBoneShard - counterCharSturdyBoneShard}
									onChange={(e) => setCharSturdyBoneShard(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharSturdyBoneShard}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharSturdyBoneShard)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharSturdyBoneShard}>
											+
										</button>
									</>
								}
							</td>
							<td>Sturdy Bone Shard</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talSturdyBoneShard}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talSturdyBoneShard - counterTalSturdyBoneShard}
									onChange={(e) => setTalSturdyBoneShard(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalSturdyBoneShard}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalSturdyBoneShard)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalSturdyBoneShard}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Fossilized Bone Shard</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charFossilizedBoneShard}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charFossilizedBoneShard - counterCharFossilizedBoneShard}
									onChange={(e) => setCharFossilizedBoneShard(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharFossilizedBoneShard}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharFossilizedBoneShard)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharFossilizedBoneShard}>
											+
										</button>
									</>
								}
							</td>
							<td>Fossilized Bone Shard</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talFossilizedBoneShard}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talFossilizedBoneShard - counterTalFossilizedBoneShard}
									onChange={(e) => setTalFossilizedBoneShard(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalFossilizedBoneShard}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalFossilizedBoneShard)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalFossilizedBoneShard}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>
								{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charFragileBoneShard, charSturdyBoneShard, charFossilizedBoneShard)}
							</td>
							<td>
								{LvUpMatTotalHave(charFragileBoneShard, charSturdyBoneShard, charFossilizedBoneShard) -
									LvUpMatTotalUsed(counterCharFragileBoneShard, counterCharSturdyBoneShard, counterCharFossilizedBoneShard)}
							</td>

							<td>{LvUpMatTotalUsed(counterCharFragileBoneShard, counterCharSturdyBoneShard, counterCharFossilizedBoneShard)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talFragileBoneShard, talSturdyBoneShard, talFossilizedBoneShard)}</td>
							<td>
								{LvUpMatTotalHave(talFragileBoneShard, talSturdyBoneShard, talFossilizedBoneShard) -
									LvUpMatTotalUsed(counterTalFragileBoneShard, counterTalSturdyBoneShard, counterTalFossilizedBoneShard)}
							</td>
							<td>{LvUpMatTotalUsed(counterTalFragileBoneShard, counterTalSturdyBoneShard, counterTalFossilizedBoneShard)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Sentinel Chaos Parts</td>
						</tr>

						<tr>
							<td>Chaos Gear</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charChaosGear}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={charChaosGear - counterCharChaosGear} onChange={(e) => setCharChaosGear(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosGear}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosGear)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosGear}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Gear</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talChaosGear}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosGear - counterTalChaosGear} onChange={(e) => setTalChaosGear(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosGear}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosGear)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosGear}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Chaos Axis</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charChaosAxis}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={charChaosAxis - counterCharChaosAxis} onChange={(e) => setCharChaosAxis(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosAxis}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosAxis)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosAxis}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Axis</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talChaosAxis}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosAxis - counterTalChaosAxis} onChange={(e) => setTalChaosAxis(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosAxis}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosAxis)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosAxis}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Chaos Oculus</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charChaosOculus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charChaosOculus - counterCharChaosOculus}
									onChange={(e) => setCharChaosOculus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosOculus}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosOculus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosOculus}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Oculus</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talChaosOculus}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosOculus - counterTalChaosOculus} onChange={(e) => setTalChaosOculus(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosOculus}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosOculus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosOculus}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charChaosGear, charChaosAxis, charChaosOculus)}</td>
							<td>{LvUpMatTotalHave(charChaosGear, charChaosAxis, charChaosOculus) - LvUpMatTotalUsed(counterCharChaosGear, counterCharChaosAxis, counterCharChaosOculus)}</td>

							<td>{LvUpMatTotalUsed(counterCharChaosGear, counterCharChaosAxis, counterCharChaosOculus)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talChaosGear, talChaosAxis, talChaosOculus)}</td>
							<td>{LvUpMatTotalHave(talChaosGear, talChaosAxis, talChaosOculus) - LvUpMatTotalUsed(counterTalChaosGear, counterTalChaosAxis, counterTalChaosOculus)}</td>
							<td>{LvUpMatTotalUsed(counterTalChaosGear, counterTalChaosAxis, counterTalChaosOculus)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Mirror Maiden Prisms</td>
						</tr>

						<tr>
							<td>Dismal Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charDismalPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDismalPrism - counterCharDismalPrism}
									onChange={(e) => setCharDismalPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDismalPrism}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDismalPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDismalPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Dismal Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talDismalPrism}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talDismalPrism - counterTalDismalPrism} onChange={(e) => setTalDismalPrism(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDismalPrism}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDismalPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDismalPrism}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Crystal Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charCrystalPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charCrystalPrism - counterCharCrystalPrism}
									onChange={(e) => setCharCrystalPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharCrystalPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharCrystalPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharCrystalPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Crystal Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talCrystalPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talCrystalPrism - counterTalCrystalPrism}
									onChange={(e) => setTalCrystalPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalCrystalPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalCrystalPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalCrystalPrism}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Polarizing Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charPolarizingPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charPolarizingPrism - counterCharPolarizingPrism}
									onChange={(e) => setCharPolarizingPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharPolarizingPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharPolarizingPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharPolarizingPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Polarizing Prism</td>

							<td>{7 * totalTalentLvUpPerChar_Tal3 - talPolarizingPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talPolarizingPrism - counterTalPolarizingPrism}
									onChange={(e) => setTalPolarizingPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalPolarizingPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalPolarizingPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalPolarizingPrism}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charDismalPrism, charCrystalPrism, charPolarizingPrism)}</td>
							<td>{LvUpMatTotalHave(charDismalPrism, charCrystalPrism, charPolarizingPrism) - LvUpMatTotalUsed(counterCharDismalPrism, counterCharCrystalPrism, counterCharPolarizingPrism)}</td>

							<td>{LvUpMatTotalUsed(counterCharDismalPrism, counterCharCrystalPrism, counterCharPolarizingPrism)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talDismalPrism, talCrystalPrism, talPolarizingPrism)}</td>
							<td>{LvUpMatTotalHave(talDismalPrism, talCrystalPrism, talPolarizingPrism) - LvUpMatTotalUsed(counterTalDismalPrism, counterTalCrystalPrism, counterTalPolarizingPrism)}</td>
							<td>{LvUpMatTotalUsed(counterTalDismalPrism, counterTalCrystalPrism, counterTalPolarizingPrism)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Concealed Riftwolf Claws</td>
						</tr>

						<tr>
							<td>Concealed Claw</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charConcealedClaw}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charConcealedClaw - counterCharConcealedClaw}
									onChange={(e) => setCharConcealedClaw(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharConcealedClaw}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharConcealedClaw)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharConcealedClaw}>
											+
										</button>
									</>
								}
							</td>
							<td>Concealed Claw</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talConcealedClaw}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talConcealedClaw - counterTalConcealedClaw}
									onChange={(e) => setTalConcealedClaw(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalConcealedClaw}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalConcealedClaw)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalConcealedClaw}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Concealed Unguis</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charConcealedUnguis}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charConcealedUnguis - counterCharConcealedUnguis}
									onChange={(e) => setCharConcealedUnguis(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharConcealedUnguis}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharConcealedUnguis)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharConcealedUnguis}>
											+
										</button>
									</>
								}
							</td>
							<td>Concealed Unguis</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talConcealedUnguis}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talConcealedUnguis - counterTalConcealedUnguis}
									onChange={(e) => setTalConcealedUnguis(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalConcealedUnguis}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalConcealedUnguis)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalConcealedUnguis}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Concealed Talon</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charConcealedTalon}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charConcealedTalon - counterCharConcealedTalon}
									onChange={(e) => setCharConcealedTalon(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharConcealedTalon}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharConcealedTalon)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharConcealedTalon}>
											+
										</button>
									</>
								}
							</td>
							<td>Concealed Talon</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talConcealedTalon}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talConcealedTalon - counterTalConcealedTalon}
									onChange={(e) => setTalConcealedTalon(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalConcealedTalon}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalConcealedTalon)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalConcealedTalon}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charConcealedClaw, charConcealedUnguis, charConcealedTalon)}</td>
							<td>
								{LvUpMatTotalHave(charConcealedClaw, charConcealedUnguis, charConcealedTalon) - LvUpMatTotalUsed(counterCharConcealedClaw, counterCharConcealedUnguis, counterCharConcealedTalon)}
							</td>

							<td>{LvUpMatTotalUsed(counterCharConcealedClaw, counterCharConcealedUnguis, counterCharConcealedTalon)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talConcealedClaw, talConcealedUnguis, talConcealedTalon)}</td>
							<td>{LvUpMatTotalHave(talConcealedClaw, talConcealedUnguis, talConcealedTalon) - LvUpMatTotalUsed(counterTalConcealedClaw, counterTalConcealedUnguis, counterTalConcealedTalon)}</td>
							<td>{LvUpMatTotalUsed(counterTalConcealedClaw, counterTalConcealedUnguis, counterTalConcealedTalon)}</td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="9">Statuettes</td>
						</tr>

						<tr>
							<td>Gloomy Statuette</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charGloomyStatuette}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charGloomyStatuette - counterCharGloomyStatuette}
									onChange={(e) => setCharGloomyStatuette(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharGloomyStatuette}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharGloomyStatuette)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharGloomyStatuette}>
											+
										</button>
									</>
								}
							</td>
							<td>Gloomy Statuette</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talGloomyStatuette}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talGloomyStatuette - counterTalGloomyStatuette}
									onChange={(e) => setTalGloomyStatuette(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalGloomyStatuette}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalGloomyStatuette)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalGloomyStatuette}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Dark Statuette</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charDarkStatuette}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDarkStatuette - counterCharDarkStatuette}
									onChange={(e) => setCharDarkStatuette(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDarkStatuette}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDarkStatuette)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDarkStatuette}>
											+
										</button>
									</>
								}
							</td>
							<td>Dark Statuette</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talDarkStatuette}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDarkStatuette - counterTalDarkStatuette}
									onChange={(e) => setTalDarkStatuette(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDarkStatuette}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDarkStatuette)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDarkStatuette}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Deathly Statuette</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charDeathlyStatuette}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDeathlyStatuette - counterCharDeathlyStatuette}
									onChange={(e) => setCharDeathlyStatuette(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDeathlyStatuette}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDeathlyStatuette)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDeathlyStatuette}>
											+
										</button>
									</>
								}
							</td>
							<td>Deathly Statuette</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talDeathlyStatuette}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDeathlyStatuette - counterTalDeathlyStatuette}
									onChange={(e) => setTalDeathlyStatuette(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDeathlyStatuette}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDeathlyStatuette)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDeathlyStatuette}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charGloomyStatuette, charDarkStatuette, charDeathlyStatuette)}</td>
							<td>
								{LvUpMatTotalHave(charGloomyStatuette, charDarkStatuette, charDeathlyStatuette) - LvUpMatTotalUsed(counterCharGloomyStatuette, counterCharDarkStatuette, counterCharDeathlyStatuette)}
							</td>

							<td>{LvUpMatTotalUsed(counterCharGloomyStatuette, counterCharDarkStatuette, counterCharDeathlyStatuette)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talGloomyStatuette, talDarkStatuette, talDeathlyStatuette)}</td>
							<td>{LvUpMatTotalHave(talGloomyStatuette, talDarkStatuette, talDeathlyStatuette) - LvUpMatTotalUsed(counterTalGloomyStatuette, counterTalDarkStatuette, counterTalDeathlyStatuette)}</td>
							<td>{LvUpMatTotalUsed(counterTalGloomyStatuette, counterTalDarkStatuette, counterTalDeathlyStatuette)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Fungal Nuclei</td>
						</tr>

						<tr>
							<td>Inactivated Fungal Nucleus</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charInactivatedFungalNucleus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charInactivatedFungalNucleus - counterCharInactivatedFungalNucleus}
									onChange={(e) => setCharInactivatedFungalNucleus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharInactivatedFungalNucleus}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharInactivatedFungalNucleus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharInactivatedFungalNucleus}>
											+
										</button>
									</>
								}
							</td>
							<td>Inactivated Fungal Nucleus</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talInactivatedFungalNucleus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talInactivatedFungalNucleus - counterTalInactivatedFungalNucleus}
									onChange={(e) => setTalInactivatedFungalNucleus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalInactivatedFungalNucleus}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalInactivatedFungalNucleus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalInactivatedFungalNucleus}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Dormant Fungal Nucleus</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charDormantFungalNucleus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDormantFungalNucleus - counterCharDormantFungalNucleus}
									onChange={(e) => setCharDormantFungalNucleus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDormantFungalNucleus}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDormantFungalNucleus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDormantFungalNucleus}>
											+
										</button>
									</>
								}
							</td>
							<td>Dormant Fungal Nucleus</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talDormantFungalNucleus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDormantFungalNucleus - counterTalDormantFungalNucleus}
									onChange={(e) => setTalDormantFungalNucleus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDormantFungalNucleus}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDormantFungalNucleus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDormantFungalNucleus}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Robust Fungal Nucleus</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charRobustFungalNucleus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charRobustFungalNucleus - counterCharRobustFungalNucleus}
									onChange={(e) => setCharRobustFungalNucleus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharRobustFungalNucleus}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharRobustFungalNucleus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharRobustFungalNucleus}>
											+
										</button>
									</>
								}
							</td>
							<td>Robust Fungal Nucleus</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talRobustFungalNucleus}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talRobustFungalNucleus - counterTalRobustFungalNucleus}
									onChange={(e) => setTalRobustFungalNucleus(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalRobustFungalNucleus}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalRobustFungalNucleus)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalRobustFungalNucleus}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>
								{totalTalentLvUpPerChar_Char1 +
									totalTalentLvUpPerChar_Char2 +
									totalTalentLvUpPerChar_Char3 * 7 -
									LvUpMatTotalHave(charInactivatedFungalNucleus, charDormantFungalNucleus, charRobustFungalNucleus)}
							</td>
							<td>
								{LvUpMatTotalHave(charInactivatedFungalNucleus, charDormantFungalNucleus, charRobustFungalNucleus) -
									LvUpMatTotalUsed(counterCharInactivatedFungalNucleus, counterCharDormantFungalNucleus, counterCharRobustFungalNucleus)}
							</td>

							<td>{LvUpMatTotalUsed(counterCharInactivatedFungalNucleus, counterCharDormantFungalNucleus, counterCharRobustFungalNucleus)}</td>
							<td>TOTAL</td>
							<td>
								{totalTalentLvUpPerChar_Tal1 +
									totalTalentLvUpPerChar_Tal2 +
									totalTalentLvUpPerChar_Tal3 * 7 -
									LvUpMatTotalHave(talInactivatedFungalNucleus, talDormantFungalNucleus, talRobustFungalNucleus)}
							</td>
							<td>
								{LvUpMatTotalHave(talInactivatedFungalNucleus, talDormantFungalNucleus, talRobustFungalNucleus) -
									LvUpMatTotalUsed(counterTalInactivatedFungalNucleus, counterTalDormantFungalNucleus, counterTalRobustFungalNucleus)}
							</td>
							<td>{LvUpMatTotalUsed(counterTalInactivatedFungalNucleus, counterTalDormantFungalNucleus, counterTalRobustFungalNucleus)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Drake Chaos Parts</td>
						</tr>

						<tr>
							<td>Chaos Storage</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charChaosStorage}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charChaosStorage - counterCharChaosStorage}
									onChange={(e) => setCharChaosStorage(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosStorage}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosStorage)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosStorage}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Storage</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talChaosStorage}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talChaosStorage - counterTalChaosStorage}
									onChange={(e) => setTalChaosStorage(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosStorage}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosStorage)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosStorage}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Chaos Module</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charChaosModule}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charChaosModule - counterCharChaosModule}
									onChange={(e) => setCharChaosModule(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosModule}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosModule)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosModule}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Module</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talChaosModule}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosModule - counterTalChaosModule} onChange={(e) => setTalChaosModule(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosModule}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosModule)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosModule}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Chaos Bolt</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charChaosBolt}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={charChaosBolt - counterCharChaosBolt} onChange={(e) => setCharChaosBolt(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharChaosBolt}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharChaosBolt)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharChaosBolt}>
											+
										</button>
									</>
								}
							</td>
							<td>Chaos Bolt</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talChaosBolt}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talChaosBolt - counterTalChaosBolt} onChange={(e) => setTalChaosBolt(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalChaosBolt}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalChaosBolt)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalChaosBolt}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charChaosStorage, charChaosModule, charChaosBolt)}</td>
							<td>{LvUpMatTotalHave(charChaosStorage, charChaosModule, charChaosBolt) - LvUpMatTotalUsed(counterCharChaosStorage, counterCharChaosModule, counterCharChaosBolt)}</td>

							<td>{LvUpMatTotalUsed(counterCharChaosStorage, counterCharChaosModule, counterCharChaosBolt)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talChaosStorage, talChaosModule, talChaosBolt)}</td>
							<td>{LvUpMatTotalHave(talChaosStorage, talChaosModule, talChaosBolt) - LvUpMatTotalUsed(counterTalChaosStorage, counterTalChaosModule, counterTalChaosBolt)}</td>
							<td>{LvUpMatTotalUsed(counterTalChaosStorage, counterTalChaosModule, counterTalChaosBolt)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Consecrated Beast Shells</td>
						</tr>

						<tr>
							<td>Damaged Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charDamagedPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDamagedPrism - counterCharDamagedPrism}
									onChange={(e) => setCharDamagedPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDamagedPrism}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDamagedPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDamagedPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Damaged Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talDamagedPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDamagedPrism - counterTalDamagedPrism}
									onChange={(e) => setTalDamagedPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDamagedPrism}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDamagedPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDamagedPrism}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Turbid Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charTurbidPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charTurbidPrism - counterCharTurbidPrism}
									onChange={(e) => setCharTurbidPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharTurbidPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharTurbidPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharTurbidPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Turbid Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talTurbidPrism}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talTurbidPrism - counterTalTurbidPrism} onChange={(e) => setTalTurbidPrism(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalTurbidPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalTurbidPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalTurbidPrism}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Radiant Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charRadiantPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charRadiantPrism - counterCharRadiantPrism}
									onChange={(e) => setCharRadiantPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharRadiantPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharRadiantPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharRadiantPrism}>
											+
										</button>
									</>
								}
							</td>
							<td>Radiant Prism</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talRadiantPrism}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talRadiantPrism - counterTalRadiantPrism}
									onChange={(e) => setTalRadiantPrism(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalRadiantPrism}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalRadiantPrism)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalRadiantPrism}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charDamagedPrism, charTurbidPrism, charRadiantPrism)}</td>
							<td>{LvUpMatTotalHave(charDamagedPrism, charTurbidPrism, charRadiantPrism) - LvUpMatTotalUsed(counterCharDamagedPrism, counterCharTurbidPrism, counterCharRadiantPrism)}</td>

							<td>{LvUpMatTotalUsed(counterCharDamagedPrism, counterCharTurbidPrism, counterCharRadiantPrism)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talDamagedPrism, talTurbidPrism, talRadiantPrism)}</td>
							<td>{LvUpMatTotalHave(talDamagedPrism, talTurbidPrism, talRadiantPrism) - LvUpMatTotalUsed(counterTalDamagedPrism, counterTalTurbidPrism, counterTalRadiantPrism)}</td>
							<td>{LvUpMatTotalUsed(counterTalDamagedPrism, counterTalTurbidPrism, counterTalRadiantPrism)}</td>
							<td></td>
						</tr>

						<tr>
							<td colSpan="9">Consecrated Beast Shells</td>
						</tr>

						<tr>
							<td>Desiccated Shell</td>
							<td>{7 * totalTalentLvUpPerChar_Char1 - charDesiccatedShell}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charDesiccatedShell - counterCharDesiccatedShell}
									onChange={(e) => setCharDesiccatedShell(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharDesiccatedShell}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharDesiccatedShell)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharDesiccatedShell}>
											+
										</button>
									</>
								}
							</td>
							<td>Desiccated Shell</td>
							<td>{7 * totalTalentLvUpPerChar_Tal1 - talDesiccatedShell}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={talDesiccatedShell - counterTalDesiccatedShell}
									onChange={(e) => setTalDesiccatedShell(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalDesiccatedShell}>
											-
										</button>

										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalDesiccatedShell)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalDesiccatedShell}>
											+
										</button>
									</>
								}
							</td>
							<td rowSpan={3}>Aloy, Amber, Barbara, Diona, Klee, Sucrose, Tartaglia</td>
						</tr>

						<tr>
							<td>Sturdy Shell</td>
							<td>{7 * totalTalentLvUpPerChar_Char2 - charSturdyShell}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charSturdyShell - counterCharSturdyShell}
									onChange={(e) => setCharSturdyShell(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharSturdyShell}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharSturdyShell)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharSturdyShell}>
											+
										</button>
									</>
								}
							</td>
							<td>Sturdy Shell</td>
							<td>{7 * totalTalentLvUpPerChar_Tal2 - talSturdyShell}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talSturdyShell - counterTalSturdyShell} onChange={(e) => setTalSturdyShell(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalSturdyShell}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalSturdyShell)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalSturdyShell}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr>
							<td>Marked Shell</td>
							<td>{7 * totalTalentLvUpPerChar_Char3 - charMarkedShell}</td>
							<td>
								<input
									type="number"
									className="general-asc-mat-num-input"
									value={charMarkedShell - counterCharMarkedShell}
									onChange={(e) => setCharMarkedShell(e.target.value)}
									placeholder="0"
									min="0"
								/>
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterCharMarkedShell}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterCharMarkedShell)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterCharMarkedShell}>
											+
										</button>
									</>
								}
							</td>
							<td>Marked Shell</td>
							<td>{7 * totalTalentLvUpPerChar_Tal3 - talMarkedShell}</td>
							<td>
								<input type="number" className="general-asc-mat-num-input" value={talMarkedShell - counterTalMarkedShell} onChange={(e) => setTalMarkedShell(e.target.value)} placeholder="0" min="0" />
							</td>
							<td>
								{
									<>
										<button className="general-asc-mat-arrow-down" onClick={decrementCounterTalMarkedShell}>
											-
										</button>
										<span className="general-asc-mat-arrow-mid-number">{parseInt(counterTalMarkedShell)}</span>
										<button className="general-asc-mat-arrow-up" onClick={incrementCounterTalMarkedShell}>
											+
										</button>
									</>
								}
							</td>
						</tr>
						<tr className="general-asc-mat-total-row">
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Char1 + totalTalentLvUpPerChar_Char2 + totalTalentLvUpPerChar_Char3 * 7 - LvUpMatTotalHave(charDesiccatedShell, charSturdyShell, charMarkedShell)}</td>
							<td>{LvUpMatTotalHave(charDesiccatedShell, charSturdyShell, charMarkedShell) - LvUpMatTotalUsed(counterCharDesiccatedShell, counterCharSturdyShell, counterCharMarkedShell)}</td>

							<td>{LvUpMatTotalUsed(counterCharDesiccatedShell, counterCharSturdyShell, counterCharMarkedShell)}</td>
							<td>TOTAL</td>
							<td>{totalTalentLvUpPerChar_Tal1 + totalTalentLvUpPerChar_Tal2 + totalTalentLvUpPerChar_Tal3 * 7 - LvUpMatTotalHave(talDesiccatedShell, talSturdyShell, talMarkedShell)}</td>
							<td>{LvUpMatTotalHave(talDesiccatedShell, talSturdyShell, talMarkedShell) - LvUpMatTotalUsed(counterTalDesiccatedShell, counterTalSturdyShell, counterTalMarkedShell)}</td>
							<td>{LvUpMatTotalUsed(counterTalDesiccatedShell, counterTalSturdyShell, counterTalMarkedShell)}</td>
							<td></td>
						</tr>
						<tr className="general-asc-mat-overall-row">
							<td>CHARACTER OVERALL</td>
							<td>
								LV1: {totalTalentLvUpPerChar_Char1 * 63 - OverallTotalHave(...inputsCharHave1)} <br />
								LV2: {totalTalentLvUpPerChar_Char2 * 63 - OverallTotalHave(...inputsCharHave2)}
								<br />
								LV3: {totalTalentLvUpPerChar_Char3 * 63 - OverallTotalHave(...inputsCharHave3)}
								<br />
							</td>
							<td>
								LV1: {OverallTotalHave(...inputsCharHave1) - OverallTotalUsed(...inputsCharUsed1)}
								<br />
								LV2: {OverallTotalHave(...inputsCharHave2) - OverallTotalUsed(...inputsCharUsed2)}
								<br />
								LV3: {OverallTotalHave(...inputsCharHave3) - OverallTotalUsed(...inputsCharUsed3)}
								<br />
							</td>
							<td>
								LV1: {OverallTotalUsed(...inputsCharUsed1)}
								<br />
								LV2: {OverallTotalUsed(...inputsCharUsed2)}
								<br />
								LV3: {OverallTotalUsed(...inputsCharUsed3)}
								<br />
							</td>
							<td>TALENT BOOKS OVERALL</td>
							<td>
								LV1: {totalTalentLvUpPerChar_Tal1 * 63 - OverallTotalHave(...inputsTalHave1)} <br />
								LV2: {totalTalentLvUpPerChar_Tal2 * 63 - OverallTotalHave(...inputsTalHave2)}
								<br />
								LV3: {totalTalentLvUpPerChar_Tal3 * 63 - OverallTotalHave(...inputsTalHave3)}
								<br />
							</td>
							<td>
								LV1: {OverallTotalHave(...inputsTalHave1) - OverallTotalUsed(...inputsTalUsed1)}
								<br />
								LV2: {OverallTotalHave(...inputsTalHave2) - OverallTotalUsed(...inputsTalUsed2)}
								<br />
								LV3:{OverallTotalHave(...inputsTalHave3) - OverallTotalUsed(...inputsTalUsed3)}
								<br />
							</td>
							<td>
								LV1: {OverallTotalUsed(...inputsTalUsed1)}
								<br />
								LV2: {OverallTotalUsed(...inputsTalUsed2)}
								<br />
								LV3: {OverallTotalUsed(...inputsTalUsed3)}
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

export default GenericGeneralDrops;
