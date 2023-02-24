import AscOverallGems from './AscOverallGems';
import GenericAscGems from './GenericAscGems';
// import generic gems table
// tutorial will show you how to create component and import it

const AscGems = () => {
	//Render GemTable component
	return (
		<div className="block-table">
			<h1 className="asc-gems-h1">World Boss - Ascension Gems</h1>
			<div className="asc-overall-table">
				<div>
					<h3>Total Crystals</h3>
					<AscOverallGems />
				</div>
			</div>

			<div className="asc-gems-table">
				<div id="pyro-table">
					<h3>Pyro Crystals</h3>
					<GenericAscGems />
				</div>
				<div id="electro-table">
					<h3>Electro Crystals</h3>
					<GenericAscGems />
				</div>
				<div id="anemo-table">
					<h3>Anemo Crystals</h3>
					<GenericAscGems />
				</div>
				<div id="geo-table">
					<h3>Geo Crystals</h3>
					<GenericAscGems />
				</div>
				<div id="cryo-table">
					<h3>Cryo Crystals</h3>
					<GenericAscGems />
				</div>
				<div id="hydro-table">
					<h3>Hydro Crystals</h3>
					<GenericAscGems />
				</div>
				<div id="dendro-table">
					<h3>Dendro Crystals</h3>
					<GenericAscGems />
				</div>
			</div>
		</div>
	);
};

//cryo, electro, pyro, geo, dendro, hydro, anemo
// call functional class (Generic Gem Table)

export default AscGems;
