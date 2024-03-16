import Image from "next/image";
import styles from "./page.module.css";
import Month from "./Component/Month.jsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Diary</h1>
      <div>Month
        <Month/>{monthName}
      </div>
      
      
        <div>Year</div>
        <div id="date-container">
          <div className="date"></div>
        </div>
        <div id="notes">
          <form>
            <textarea></textarea>
            <button>Submit</button>
          </form>
         
        </div>
      <div>
        
      </div>
    </main>
  );
}
