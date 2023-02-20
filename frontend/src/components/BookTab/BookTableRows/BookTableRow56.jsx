import React, { useState } from "react";

const LevelRange56 = () => {
   const [levelUp56, setLevelUp56] = useState(0);

   return (
      <tr>
         <td>50-60</td>
         <td><input type="number" className="lv-num-input" value={levelUp56} onChange={(e) => setLevelUp56(e.target.value)} placeholder="0" /></td>
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

export default LevelRange56;