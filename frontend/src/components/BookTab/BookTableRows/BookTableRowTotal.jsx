const BookTableRowTotal = () => {
   return (
      <tr class="total-line">
         <td>Total:</td>
         <td><input type="number" className="lv-num-output" placeholder="0" readOnly /></td>
         <td>
            Lv 1: <input type="number" className="exp-num-output" placeholder="0" readOnly />
            Lv 2: <input type="number" className="exp-num-output" placeholder="0" readOnly />
            Lv 3: <input type="number" className="exp-num-output" placeholder="0" readOnly />
         </td>
         <td></td>
         <td></td>
         <td></td>
      </tr>
   )
}

export default BookTableRowTotal;