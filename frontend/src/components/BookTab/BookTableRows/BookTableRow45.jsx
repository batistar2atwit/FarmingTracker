import React, { useState } from "react";

const LevelRange45 = () => {
   const [levelUp45, setLevelUp45] = useState(0);
   return (
      <tr>
         <td>40-50</td>
         <td><input type="number" className="lv-num-input" value={levelUp45} onChange={(e) => setLevelUp45(e.target.value)} placeholder="0" /></td>
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

export default LevelRange45;