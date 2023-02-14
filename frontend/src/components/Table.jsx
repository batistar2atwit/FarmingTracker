import React, { useState } from "react";

export function Table() {

   const [level1, setLevel1] = useState(0);
   const [level2, setLevel2] = useState(0);
   const [level3, setLevel3] = useState(0);
   const [level4, setLevel4] = useState(0);
   // const [table, setTable] = useState('LV1', 'LV2', "LV3");

   return <div>
      <table className="table">
         <tr className="table">
            <th>Level</th>
            <th>Per Character</th>
            <th>Overall</th>
         </tr>
         <tr className="table">
            <td>Level 1:</td>
            <td><input type="number" className="" value={level1} onChange={(e) => setLevel1(e.target.value)} /></td>
            <td><input type="number" className="" value={parseInt(level4) * 3 + parseInt(level3) * 3 + parseInt(level2) * 3 + parseInt(level1)} onChange={(e) => setLevel1(e.target.value)} /></td>
         </tr>
         <tr className="flex">
            <td>Level 2:</td>
            <td><input type="number" className="" value={level2} onChange={(e) => setLevel2(e.target.value)} /></td>
            <td><input type="number" className="" value={(parseInt(level4) * 3) + (parseInt(level3) * 3) + parseInt(level2)} onChange={(e) => setLevel2(e.target.value)} /></td>
         </tr>
         <tr>
            <td>Level 3:</td>
            <td><input type="number" className="" value={level3} onChange={(e) => setLevel3(e.target.value)} /></td>
            <td><input type="number" className="" value={(parseInt(level4) * 3) + parseInt(level3)} onChange={(e) => setLevel3(e.target.value)} /></td>
         </tr>
         <tr>
            <td>Level 4:</td>
            <td><input type="number" className="" value={level4} onChange={(e) => setLevel4(e.target.value)} /></td>
            <td><input type="number" className="" value={parseInt(level4)} onChange={(e) => setLevel4(e.target.value)} /></td>
         </tr>
      </table>
   </div>
   /* {table.map((curr, idx) => {
         <table key={idx} className="table">
            return (
         
            curr.map((ite, idx) => (
            <tr key={idx} className="">{ }</tr>



            ))

            )
         </table>
      })
      } */
}