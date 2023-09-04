"use client"
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [data, setData] = useState([])

  const handleButtonClick = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      const URL = process.env.BORED_URL
      const response = await fetch(URL);
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
      {
        data && <div className={data.length === 0 ? styles.wo_idea : styles.idea}>
          <p>maybe you can try:</p>
          <p>{data.activity}</p>
          <a href={data.link === '' ? '' : data.link}>{data.link}</a>
        </div>
      }
    </main>
  )
}
