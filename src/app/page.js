"use client"
import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleButtonClick = (event) => {
    setLoading(true)
    event.preventDefault();
    const fetchData = async () => {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Are you feeling bored?
      </h1>
      <p className={styles.sub_head}>press button below we will give you idea</p>
      <button className={styles.btn} onClick={handleButtonClick}>{data.length === 0 ? "Click Me" : "Try Again"}</button>
      {
        loading ? <p className={styles.loader}></p> : <div className={data.length === 0 ? styles.wo_idea : styles.idea}>
          <p>maybe you can try:</p>
          <mark>{data.activity}</mark>
          <a href={data.link === '' ? '' : data.link}>{data.link}</a>
          <div className={styles.advance}>
            <p>if you no satisfied try:</p>
            <Link href={'/advance'}>advance search</Link>
          </div>
        </div>

      }

    </main>
  )
}
