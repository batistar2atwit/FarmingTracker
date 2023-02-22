import React, { useState } from "react";

const GenericEXPBookTable = () => {
   const [levelUp02, setLevelUp02] = useState(0);
   const [levelUp24, setLevelUp24] = useState(0);
   const [levelUp45, setLevelUp45] = useState(0);
   const [levelUp56, setLevelUp56] = useState(0);
   const [levelUp67, setLevelUp67] = useState(0);
   const [levelUp78, setLevelUp78] = useState(0);
   const [levelUp89, setLevelUp89] = useState(0);

   // Adding number of characters
   const Overall = (addCharacter, substractCharacter) => {
      return parseInt(addCharacter) + parseInt(substractCharacter);
   }

   // Items/Books required for leveling up
   // EXP Needed per ascension
   const expNeeded02 = 120175;
   const expNeeded24 = 578325;
   const expNeeded45 = 579100;
   const expNeeded56 = 854125;
   const expNeeded67 = 1195925;
   const expNeeded78 = 1611875;
   const expNeeded89 = 3423125;

   // EXP Wasted per ascension
   const expWasted02 = 825;
   const expWasted24 = 675;
   const expWasted45 = 900;
   const expWasted56 = 875;
   const expWasted67 = 75;
   const expWasted78 = 125;
   const expWasted89 = 875;

   // Cost per ascension
   const moraCost02 = 24200;
   const moraCost24 = 115800;
   const moraCost45 = 116000;
   const moraCost56 = 171000;
   const moraCost67 = 239200;
   const moraCost78 = 322400;
   const moraCost89 = 684800;


   // Book Level 1 => 1,000
   // Book Level 2 => 5,000
   // Book Level 3 => 20,000

   // Level 01 to 20
   const expInput02_3 = Math.floor((expNeeded02 + expWasted02) / 20000);
   const expMod02_3 = (expNeeded02 + expWasted02) % 20000;
   const expInput02_2 = Math.floor(expMod02_3 / 5000);
   const expMod02_2 = Math.floor(expMod02_3 % 5000);
   const expInput02_1 = Math.floor(expMod02_2 / 1000);

   //Level 20 to 40
   const expInput24_3 = Math.floor((expNeeded24 + expWasted24) / 20000);
   const expMod24_3 = (expNeeded24 + expWasted24) % 20000;
   const expInput24_2 = Math.floor(expMod24_3 / 5000);
   const expMod24_2 = Math.floor(expMod24_3 % 5000);
   const expInput24_1 = Math.floor(expMod24_2 / 1000);

   //Level 40 to 50
   const expInput45_3 = Math.floor((expNeeded45 + expWasted45) / 20000);
   const expMod45_3 = (expNeeded45 + expWasted45) % 20000;
   const expInput45_2 = Math.floor(expMod45_3 / 5000);
   const expMod45_2 = Math.floor(expMod45_3 % 5000);
   const expInput45_1 = Math.floor(expMod45_2 / 1000);

   //Level 50 to 60
   const expInput56_3 = Math.floor((expNeeded56 + expWasted56) / 20000);
   const expMod56_3 = (expNeeded56 + expWasted56) % 20000;
   const expInput56_2 = Math.floor(expMod56_3 / 5000);
   const expMod56_2 = Math.floor(expMod56_3 % 5000);
   const expInput56_1 = Math.floor(expMod56_2 / 1000);

   //Level 60 to 70
   const expInput67_3 = Math.floor((expNeeded67 + expWasted67) / 20000);
   const expMod67_3 = (expNeeded67 + expWasted67) % 20000;
   const expInput67_2 = Math.floor(expMod67_3 / 5000);
   const expMod67_2 = Math.floor(expMod67_3 % 5000);
   const expInput67_1 = Math.floor(expMod67_2 / 1000);

   //Level 70 to 80
   const expInput78_3 = Math.floor((expNeeded78 + expWasted78) / 20000);
   const expMod78_3 = (expNeeded78 + expWasted78) % 20000;
   const expInput78_2 = Math.floor(expMod78_3 / 5000);
   const expMod78_2 = Math.floor(expMod78_3 % 5000);
   const expInput78_1 = Math.floor(expMod78_2 / 1000);

   //Level 80 to 90
   const expInput89_3 = Math.floor((expNeeded89 + expWasted89) / 20000);
   const expMod89_3 = (expNeeded89 + expWasted89) % 20000;
   const expInput89_2 = Math.floor(expMod89_3 / 5000);
   const expMod89_2 = Math.floor(expMod89_3 % 5000);
   const expInput89_1 = Math.floor(expMod89_2 / 1000);

   // Character count collection completion
   const totalCharCollection = Overall(Overall(Overall(Overall(Overall(Overall(levelUp89, levelUp78), levelUp67), levelUp56), levelUp45), levelUp24), levelUp02);

   //Total EXP books to farm
   const totalExpBook1 = (parseInt(levelUp02) * expInput02_1) + (parseInt(levelUp24) * expInput24_1) + (parseInt(levelUp45) * expInput45_1) + (parseInt(levelUp56) * expInput56_1) + (parseInt(levelUp67) * expInput67_1) + (parseInt(levelUp78) * expInput78_1) + (parseInt(levelUp89) * expInput89_1);

   const totalExpBook2 = (parseInt(levelUp02) * expInput02_2) + (parseInt(levelUp24) * expInput24_2) + (parseInt(levelUp45) * expInput45_2) + (parseInt(levelUp56) * expInput56_2) + (parseInt(levelUp67) * expInput67_2) + (parseInt(levelUp78) * expInput78_2) + (parseInt(levelUp89) * expInput89_2);

   const totalExpBook3 = (parseInt(levelUp02) * expInput02_3) + (parseInt(levelUp24) * expInput24_3) + (parseInt(levelUp45) * expInput45_3) + (parseInt(levelUp56) * expInput56_3) + (parseInt(levelUp67) * expInput67_3) + (parseInt(levelUp78) * expInput78_3) + (parseInt(levelUp89) * expInput89_3);

   //Total Exp needed to level up
   const expNeeded = (parseInt(levelUp02) * expNeeded02) + (parseInt(levelUp24) * expNeeded24) + (parseInt(levelUp45) * expNeeded45) + (parseInt(levelUp56) * expNeeded56) + (parseInt(levelUp67) * expNeeded67) + (parseInt(levelUp78) * expNeeded78) + (parseInt(levelUp89) * expNeeded89);

   //Total Exp wasted when leveling up
   const expWasted = (parseInt(levelUp02) * expWasted02) + (parseInt(levelUp24) * expWasted24) + (parseInt(levelUp45) * expWasted45) + (parseInt(levelUp56) * expWasted56) + (parseInt(levelUp67) * expWasted67) + (parseInt(levelUp78) * expWasted78) + (parseInt(levelUp89) * expWasted89);

   //Total mora cost
   const totalMoraCost = (parseInt(levelUp02) * moraCost02) + (parseInt(levelUp24) * moraCost24) + (parseInt(levelUp45) * moraCost45) + (parseInt(levelUp56) * moraCost56) + (parseInt(levelUp67) * moraCost67) + (parseInt(levelUp78) * moraCost78) + (parseInt(levelUp89) * moraCost89);

   // EXP Book: Calculate total runs needed to fully complete the EXP farm
   const estBookFarm2 = 6.5 * 5000;
   const estBookFarm3 = 4.5 * 20000;
   const avgBookExperience = estBookFarm2 + estBookFarm3;
   const avgExpFarmed = totalExpBook1 * 1000 + totalExpBook2 * 5000 + totalExpBook3 * 20000
   const totalExpAvg = Math.round((avgExpFarmed / avgBookExperience) * 100) / 100;

   // MORA: Calculate total runs needed to fully complete the EXP farm
   const estMoraFarm = 60000;
   const totalMoraAvg = Math.round((totalMoraCost / estMoraFarm) * 100) / 100;

   // Farming cost
   const normalFarmCost = 20;

   return <div className="block-table">
      <h2>These tables will only consider farming data between World Level 6 to 8 where the calculation for the Ley Lines drops is set to avg=max/min</h2>
      <div className="farming-table">
         <table>
            <thead>
               <tr>
                  <th>Level Range</th>
                  <th>Asc #</th>
                  <th>Items Required</th>
                  <th>EXP Needed </th>
                  <th>EXP Wasted</th>
                  <th>Mora Cost</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>01-20</td>
                  <td><input type="number" className="lv-num-input" value={levelUp02} onChange={(e) => setLevelUp02(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp02) * expInput02_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp02) * expInput02_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp02) * expInput02_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded02 * parseInt(levelUp02)}</td>
                  <td>{expWasted02 * parseInt(levelUp02)}</td>
                  <td>{moraCost02 * parseInt(levelUp02)}</td>
               </tr>
               <tr>
                  <td>20-40</td>
                  <td><input type="number" className="lv-num-input" value={levelUp24} onChange={(e) => setLevelUp24(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp24) * expInput24_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp24) * expInput24_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp24) * expInput24_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded24 * parseInt(levelUp24)}</td>
                  <td>{expWasted24 * parseInt(levelUp24)}</td>
                  <td>{moraCost24 * parseInt(levelUp24)}</td>
               </tr>
               <tr>
                  <td>40-50</td>
                  <td><input type="number" className="lv-num-input" value={levelUp45} onChange={(e) => setLevelUp45(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp45) * expInput45_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp45) * expInput45_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp45) * expInput45_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded45 * parseInt(levelUp45)}</td>
                  <td>{expWasted45 * parseInt(levelUp45)}</td>
                  <td>{moraCost45 * parseInt(levelUp45)}</td>
               </tr>
               <tr>
                  <td>50-60</td>
                  <td><input type="number" className="lv-num-input" value={levelUp56} onChange={(e) => setLevelUp56(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp56) * expInput56_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp56) * expInput56_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp56) * expInput56_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded56 * parseInt(levelUp56)}</td>
                  <td>{expWasted56 * parseInt(levelUp56)}</td>
                  <td>{moraCost56 * parseInt(levelUp56)}</td>
               </tr>
               <tr>
                  <td>60-70</td>
                  <td><input type="number" className="lv-num-input" value={levelUp67} onChange={(e) => setLevelUp67(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp67) * expInput67_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp67) * expInput67_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp67) * expInput67_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded67 * parseInt(levelUp67)}</td>
                  <td>{expWasted67 * parseInt(levelUp67)}</td>
                  <td>{moraCost67 * parseInt(levelUp67)}</td>
               </tr>
               <tr>
                  <td>70-80</td>
                  <td><input type="number" className="lv-num-input" value={levelUp78} onChange={(e) => setLevelUp78(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp78) * expInput78_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp78) * expInput78_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp78) * expInput78_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded78 * parseInt(levelUp78)}</td>
                  <td>{expWasted78 * parseInt(levelUp78)}</td>
                  <td>{moraCost78 * parseInt(levelUp78)}</td>
               </tr>
               <tr>
                  <td>80-90</td>
                  <td><input type="number" className="lv-num-input" value={levelUp89} onChange={(e) => setLevelUp89(e.target.value)} placeholder="0" min="0" /></td>
                  <td>
                     Lv 3: <input type="number" className="exp-num-input" value={parseInt(levelUp89) * expInput89_3} placeholder="0" min="0" readOnly />
                     Lv 2: <input type="number" className="exp-num-input" value={parseInt(levelUp89) * expInput89_2} placeholder="0" min="0" readOnly />
                     Lv 1: <input type="number" className="exp-num-input" value={parseInt(levelUp89) * expInput89_1} placeholder="0" min="0" readOnly />
                  </td>
                  <td>{expNeeded89 * parseInt(levelUp89)}</td>
                  <td>{expWasted89 * parseInt(levelUp89)}</td>
                  <td>{moraCost89 * parseInt(levelUp89)}</td>
               </tr>
               <tr className="total-line">
                  <td>Total:</td>
                  <td>{totalCharCollection}</td>
                  <td>
                     Lv 1: {totalExpBook1} <br />
                     Lv 2: {totalExpBook2} <br />
                     Lv 3: {totalExpBook3}
                  </td>
                  <td>
                     {expNeeded}
                  </td>
                  <td>
                     {expWasted}
                  </td>
                  <td>
                     {totalMoraCost}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>

      <div className="farming-req-block">
         <div className="book-farming-req-table">
            <h2>Total Runs</h2>
            <table>
               <thead>
                  <tr>
                     <th></th>
                     <th>Normal</th>
                     <th>Condensed</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th>ExpBook</th>
                     <td>{totalExpAvg}</td>
                     <td>{totalExpAvg / 2}</td>
                  </tr>
                  <tr>
                     <th>Mora</th>
                     <td>{totalMoraAvg}</td>
                     <td>{totalMoraAvg / 2}</td>
                  </tr>
                  <tr className="runs-total-line">
                     <th>Total</th>
                     <td>{(totalExpAvg) + (totalMoraAvg)}</td>
                     <td>{(totalExpAvg / 2) + (totalMoraAvg / 2)}</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="mora-farming-req-table">
            <h2>Total Resin</h2>
            <table>
               <thead>
                  <tr>
                     <th></th>
                     <th>Resin Amount</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th>ExpBook</th>
                     <td>{totalExpAvg * normalFarmCost}</td>
                  </tr>
                  <tr>
                     <th>Mora</th>
                     <td>{totalMoraAvg * normalFarmCost}</td>
                  </tr>
                  <tr className="runs-total-line">
                     <th>Total</th>
                     <td>{(totalExpAvg * normalFarmCost) + (totalMoraAvg * normalFarmCost)}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
}

export default GenericEXPBookTable;