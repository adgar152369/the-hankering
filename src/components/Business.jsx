import styles from "./Business.module.css";

function Business({...business}) {
  return (
    <div className={styles.BusinessCard}>
      <a target="_blank" href={business.link ? business.link : undefined} className={business.link && styles.BusinessCardHasLink}>
        <img src={business.imageSrc} alt="image of business" />
      </a>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInfo}>
        <div className={styles.BusinessAddress}>
          <p>{business.address ? business.address : ''}</p>
          <p>{business.city} {business.state} {business.zipCode}</p>
          <p>{business.phone}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <p className={styles.BusinessCategory}>{business.category}</p>
          <p>{business.price}</p>
          <p>{business.rating} stars</p>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Business;