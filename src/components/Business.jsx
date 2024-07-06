import { sampleBusiness } from "../sampeBusinessData";
import styles from "./Business.module.css";

function Business() {
  return (
    <div className={styles.BusinessCard}>
      <img src={sampleBusiness.imageSrc} alt="image of business" />
      <h2>{sampleBusiness.name}</h2>
      <div className={styles.BusinessInfo}>
        <div className={styles.BusinessAddress}>
          <p>{sampleBusiness.address}</p>
          <p>{sampleBusiness.city}</p>
          <p>{sampleBusiness.state} {sampleBusiness.zipCode}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <p className={styles.BusinessCategory}>{sampleBusiness.category}</p>
          <p>{sampleBusiness.rating} stars</p>
          <p>{sampleBusiness.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Business;