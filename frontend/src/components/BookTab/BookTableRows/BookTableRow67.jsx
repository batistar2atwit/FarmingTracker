import React, { useState } from "react";

const LevelRange67 = () => {
   const [levelUp67, setLevelUp67] = useState(0);

   return (
      <tr>
         <td>60-70</td>
         <td><input type="number" className="lv-num-input" value={levelUp67} onChange={(e) => setLevelUp67(e.target.value)} placeholder="0" /></td>
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

export default LevelRange67;