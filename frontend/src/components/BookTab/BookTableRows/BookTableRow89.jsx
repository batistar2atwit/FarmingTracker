import React, { useState } from "react";

const LevelRange89 = () => {
   const [levelUp89, setLevelUp89] = useState(0);
   return (
      <tr>
         <td>80-90</td>
         <td><input type="number" className="lv-num-input" value={levelUp89} onChange={(e) => setLevelUp89(e.target.value)} placeholder="0" /></td>
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

export default LevelRange89;