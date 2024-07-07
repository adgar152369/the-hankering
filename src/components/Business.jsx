import styles from "./Business.module.css";

function Business(props) {
  return (
    <div className={styles.BusinessCard}>
      <a target="_blank" href={props.link}>
        <img src={props.imageSrc} alt="image of business" />
      </a>
      <h2>{props.name}</h2>
      <div className={styles.BusinessInfo}>
        <div className={styles.BusinessAddress}>
          <p>{props.address}</p>
          <p>{props.city} {props.state} {props.zipCode}</p>
          <p>{props.phone}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <p className={styles.BusinessCategory}>{props.category}</p>
          <p>{props.price}</p>
          <p>{props.rating} stars</p>
          <p>{props.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Business;