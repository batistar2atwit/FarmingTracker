import React, { useState } from "react";

const LevelRange02 = () => {
   const [levelUp02, setLevelUp02] = useState(0);
   return (
      <tr>
         <td>01-20</td>
         <td><input type="number" className="lv-num-input" value={levelUp02} onChange={(e) => setLevelUp02(e.target.value)} placeholder="0" /></td>
         <td>
            Lv 1: <input type="number" className="exp-num-input" placeholder="0" readOnly/>
            Lv 2: <input type="number" className="exp-num-input" placeholder="0" readOnly />
            Lv 3: <input type="number" className="exp-num-input" placeholder="0" readOnly />
         </td>
         <td></td>
         <td></td>
         <td></td>
      </tr>
   )
}

export default LevelRange02;