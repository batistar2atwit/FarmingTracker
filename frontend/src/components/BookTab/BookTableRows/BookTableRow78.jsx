import React, { useState } from "react";

const LevelRange78 = () => {
   const [levelUp78, setLevelUp78] = useState(0);

   return (
      <tr>
         <td>70-80</td>
         <td><input type="number" className="lv-num-input" value={levelUp78} onChange={(e) => setLevelUp78(e.target.value)} placeholder="0" /></td>
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

export default LevelRange78;