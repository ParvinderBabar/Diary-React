"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Month from "./Component/Month.jsx";
import Year from "./Component/Year.jsx";
import React, { useState, useEffect } from "react";

export default function Home() {
   const [displayHeart, setDisplayHeart] = useState({});
  return (
    <>
   
     
      
      <div id="date-container">
        
        
       
        <div>
 <h1 >Diary</h1>
        </div>

      <div id="formContent" > <Month displayHeart={displayHeart} /> </div>
  {/* <div> <Year/> </div>  */}
          </div>
   
      
       
        
     
     </>
  );
}
