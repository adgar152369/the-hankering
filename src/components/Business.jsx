import styles from "./Business.module.css";

function Business(props) {
  return (
    <div className={styles.BusinessCard}>
      <img src={props.imageSrc} alt="image of business" />
      <h2>{props.name}</h2>
      <div className={styles.BusinessInfo}>
        <div className={styles.BusinessAddress}>
          <p>{props.address}</p>
          <p>{props.city}</p>
          <p>{props.state} {props.zipCode}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <p className={styles.BusinessCategory}>{props.category}</p>
          <p>{props.rating} stars</p>
          <p>{props.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Business;