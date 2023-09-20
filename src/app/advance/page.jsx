"use client";
import React, { useState } from "react";
import styles from "./advance.module.css";
export default function AdvanceSearch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [param, setParam] = useState("");

  const handleButtonClick = (event) => {
    event.preventDefault();
    setLoading(true);
    if (param != "") {
      const fetchData = async () => {
        const response = await fetch(
          `https://www.boredapi.com/api/activity?type=${param}`
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      };
      setTimeout(() => {
        fetchData();
      }, 1000);
    } else {
      setLoading(false);
      alert("masukan input");
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setParam(value);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Are you feeling bored?</h1>
      <form className={styles.form}>
        <p>Search by your type: </p>
        <div className={styles.form_sub}>
          <div>
            <div>
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="education"
                onChange={handleChange}
              />
              <label>Education</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="recreational"
                onChange={handleChange}
              />
              <label>Recreational</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="social"
                onChange={handleChange}
              />
              <label>Social</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="cooking"
                onChange={handleChange}
              />
              <label>Cooking</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="music"
                onChange={handleChange}
              />
              <label>Music</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="relaxation"
                onChange={handleChange}
              />
              <label>Relaxation</label>
            </div>
          </div>
        </div>
      </form>
      <button className={styles.btn} onClick={handleButtonClick}>
        {data.length === 0 ? "Click Me" : "Try Again"}
      </button>
      {loading ? (
        <p className={styles.loader}></p>
      ) : (
        <div className={data.length === 0 ? styles.wo_idea : styles.idea}>
          <p>maybe you can try:</p>
          <mark>{data.activity}</mark>
          <a target="_blank" href={data.link === "" ? "" : data.link}>
            {data.link}
          </a>
        </div>
      )}
    </main>
  );
}
