import React from "react";

import bgCard from "../../assets/bg-card-front.png";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={bgCard} alt="card front" className={styles.background} />
      <p>Jane Appleseed</p>
    </div>
  );
};

export default Card;
