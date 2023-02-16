
import GenericGemTable from "./GenericGemTable";
import OverallGemsTable from "./OverallTable";
// import generic gems table
// tutorial will show you how to create component and import it 

const AscGemTable = () => {
   //Render GemTable component
   return <div className="block-table">
      <div className="overall-table">
         <div>
            <h3>Total Crystals</h3>
            <OverallGemsTable />
         </div>
      </div>

      <div className="gems-table">
         <div id="pyro-table">
            <h3>Pyro Crystals</h3>
            <GenericGemTable />
         </div>
         <div id="electro-table">
            <h3>Electro Crystals</h3>
            <GenericGemTable />
         </div>
         <div id="anemo-table">
            <h3>Anemo Crystals</h3>
            <GenericGemTable />
         </div>
         <div id="geo-table">
            <h3>Geo Crystals</h3>
            <GenericGemTable />
         </div>
         <div id="cryo-table">
            <h3>Cryo Crystals</h3>
            <GenericGemTable />
         </div>
         <div id="hydro-table">
            <h3>Hydro Crystals</h3>
            <GenericGemTable />
         </div>
         <div id="dendro-table">
            <h3>Dendro Crystals</h3>
            <GenericGemTable />
         </div>
      </div>
   </div>
}

//cryo, electro, pyro, geo, dendro, hydro, anemo
// call functional class (Generic Gem Table)

export default AscGemTable;