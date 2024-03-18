import Image from "next/image";
import styles from "./page.module.css";
import Month from "./Component/Month.jsx";
import Year from "./Component/Year.jsx";

export default function Home() {
  return (
    <>
   
      <h1>Diary</h1>
      <div > <Month/> </div>
  <div> <Year/> </div>
      
      <div id="date-container">
        
        <div className="dateCell">
        
          </div>
      </div>
      
        <div id="notes">
          <form>
            <textarea></textarea>
            <button>Submit</button>
          </form>
         
        </div>
      <div>
        
      </div>
     </>
  );
}
