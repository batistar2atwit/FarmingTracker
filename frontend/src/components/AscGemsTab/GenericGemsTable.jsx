import React, { useState } from "react";
// Creates HTML code for the Gem table - Check
// functional class
// Create the class
// HTML table. 

const GenericGemsTable = () => {
   const [level4, setLevel4] = useState(0);
   const [level3, setLevel3] = useState(0);
   const [level2, setLevel2] = useState(0);
   const [level1, setLevel1] = useState(0);

   const Overall = (prevLevel, currLevel) => {
      return parseInt(prevLevel) * 3 + parseInt(currLevel);
   }

   return <div>
      <table>
         <tr>
            <th>Level</th>
            <th>Per Character</th>
            <th>Overall</th>
         </tr>
         <tr>
            <td>Level 1:</td>
            <td><input type="number" className="num-input" value={level1} onChange={(e) => setLevel1(e.target.value)} /></td>
            <td><input type="number" className="num-input" value={Overall(Overall(Overall(level4, level3), level2), level1)} readOnly /></td>
         </tr>
         <tr>
            <td>Level 2:</td>
            <td><input type="number" className="num-input" value={level2} onChange={(e) => setLevel2(e.target.value)} /></td>
            <td><input type="number" className="num-input" value={Overall(Overall(level4, level3), level2)} readOnly /></td>
         </tr>
         <tr>
            <td>Level 3:</td>
            <td><input type="number" className="num-input" value={level3} onChange={(e) => setLevel3(e.target.value)} /></td>
            <td><input type="number" className="num-input" value={Overall(level4, level3)} readOnly /></td>
         </tr>
         <tr>
            <td>Level 4:</td>
            <td><input type="number" className="num-input" value={level4} onChange={(e) => setLevel4(e.target.value)} /></td>
            <td ><input type="number" className="num-input" value={level4} readOnly /></td>
         </tr>
      </table>
   </div>
}

export default GenericGemsTable;