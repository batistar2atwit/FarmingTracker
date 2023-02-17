import React, { useState } from "react";

const GenericEXPBookTable = () => {
   const [levelUp0_2, setLevelUp0_2] = useState(0);
   const [levelUp2_4, setLevelUp2_4] = useState(0);
   const [levelUp4_5, setLevelUp4_5] = useState(0);
   const [levelUp5_6, setLevelUp5_6] = useState(0);
   const [levelUp6_7, setLevelUp6_7] = useState(0);
   const [levelUp7_8, setLevelUp7_8] = useState(0);
   const [levelUp8_9, setLevelUp8_9] = useState(0);

   return <div>
      <h2></h2>
      <table>
         <thead>
            <tr>
               <th>Level Range</th>
               <th>Hero's Wit</th>
               <th>EXP Needed <br /> Subtotal</th>
               <th>EXP Wasted</th>
               <th>Cost <br /> Subtotal</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>01-20 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>20-40 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3:<input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>40-50 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>50-60 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3:<input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>60-70 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3:<input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>70-80 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>80-90 <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /> Lv 3: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
            <tr>
               <td>Total: <input type="number" className="num-input" value={levelUp0_2} onChange={(e) => setLevelUp0_2(e.target.value)} placeholder="0" /></td>
               <td>Lv 1: <input type="number" className="num-input" value={levelUp0_2} placeholder="0" /> Lv 2: <input type="number" className="num-input" value={levelUp0_2} placeholder="0" /> Lv 3: <input type="number" className="num-input" value={levelUp0_2} placeholder="0" /></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
         </tbody>
      </table>
   </div>


}

export default GenericEXPBookTable;