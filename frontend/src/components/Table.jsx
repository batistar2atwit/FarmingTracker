import React, { useState } from "react";

export function Table() {

   const [level, setLevel] = useState(0);
   const [table, setTable] = useState('LV1', 'LV2', "LV3")


   return <div>
      <table className="table">
         <tr className="table">
            <th>Level</th>
            <th>Per Character</th>
            <th>Overall</th>
         </tr>
         <tr className="table">
            <td>Maria Anders</td>
            <input type="text" className="" />
            <td>Germany</td>
         </tr>
         <tr className="flex">
            <td>Francisco Chang</td>
            <input type="text" className="" />
         </tr>
         <tr>
            <td>Francisco Chang</td>
            <input type="text" className="" value={level} onChange={(e) => setLevel(e.target.value)} />
            <td>Mexico</td>
         </tr>
      </table>

      {table.map((curr, idx) => {
         <table key={idx} className="table">
            return (
            
               curr.map((ite, idx) => (
            <tr key={idx} className="">{ }</tr>



            ))

            )
         </table>
      })
      }
   </div >

}