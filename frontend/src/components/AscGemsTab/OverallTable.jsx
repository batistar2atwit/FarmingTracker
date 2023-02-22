// import React, { useState } from "react";

// Creates HTML code for the Gem table - Check
// functional class
// Create the class
// HTML table.

const OverallGemsTable = () => {
   // const [level4, setLevel4] = useState(0);
   // const [level3, setLevel3] = useState(0);
   // const [level2, setLevel2] = useState(0);
   // const [level1, setLevel1] = useState(0);

   // const PerCharacter = (prevChar, currChar) => {
   //    return parseInt(prevChar) + parseInt(currChar);
   // }
   // const Overall = (prevLevel, currLevel) => {
   //    return parseInt(prevLevel) * 3 + parseInt(currLevel);
   // }

   return <div className="output-table">
      <table>
         <thead>
            <tr>
               <th>Level</th>
               <th>Per Character</th>
               <th>Overall</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Level 1:</td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
            </tr>
            <tr>
               <td>Level 2:</td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
            </tr>
            <tr>
               <td>Level 3:</td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
            </tr>
            <tr>
               <td>Level 4:</td>
               <td><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
               <td ><input type="number" className="num-input" placeholder="0" min="0" readOnly /></td>
            </tr>
         </tbody>
      </table>
   </div>
}

export default OverallGemsTable;