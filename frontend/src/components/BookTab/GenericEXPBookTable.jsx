import BookTableRow02 from "./BookTableRows/BookTableRow02";
import BookTableRow24 from "./BookTableRows/BookTableRow24";
import BookTableRow45 from "./BookTableRows/BookTableRow45";
import BookTableRow56 from "./BookTableRows/BookTableRow56";
import BookTableRow67 from "./BookTableRows/BookTableRow67";
import BookTableRow78 from "./BookTableRows/BookTableRow78";
import BookTableRow89 from "./BookTableRows/BookTableRow89";
import BookTableRowHeader from "./BookTableRows/BookTableRowHeader";
import BookTableRowTotal from "./BookTableRows/BookTableRowTotal";

const GenericEXPBookTable = () => {

   return <div className="block-table">
      <div className="book-table">
         <table>
            <thead>
               <BookTableRowHeader />
            </thead>
            <tbody>
               <BookTableRow02 />
               <BookTableRow24 />
               <BookTableRow45 />
               <BookTableRow56 />
               <BookTableRow67 />
               <BookTableRow78 />
               <BookTableRow89 />
               <BookTableRowTotal />
            </tbody>
         </table>
      </div>
   </div>
}

export default GenericEXPBookTable;