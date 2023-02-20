import React, { useState } from "react";

const LevelRange24 = () => {
   const [levelUp24, setLevelUp24] = useState(0);
   return (
      <tr>
         <td>20-40</td>
         <td><input type="number" className="lv-num-input" value={levelUp24} onChange={(e) => setLevelUp24(e.target.value)} placeholder="0" /></td>
         <td>
            Lv 1: <input type="number" className="exp-num-input" placeholder="0" readOnly />
            Lv 2: <input type="number" className="exp-num-input" placeholder="0" readOnly />
            Lv 3: <input type="number" className="exp-num-input" placeholder="0" readOnly />
         </td>
         <td></td>
         <td></td>
         <td></td>
      </tr>
   )
}

export default LevelRange24;