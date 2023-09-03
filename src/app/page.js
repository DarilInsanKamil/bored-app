"use client"
import styles from './page.module.css'
import { useState } from 'react'



export default function Home() {
  const [data, setData] = useState([]);
  const handleButtonClick = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      const response = await fetch('http://www.boredapi.com/api/activity');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  };
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Are you feeling bored?
      </h1>
      <p className={styles.sub_head}>press button below we will give you idea</p>
      <button className={styles.btn} onClick={handleButtonClick}>{data.length === 0 ? "Click Me" : "Try Again"}</button>
      <div className={styles.idea}>
        {
          data&&<p>{data.activity}</p>
        }
      </div>
    </main>
  )
}
