import Business from "./Business";
import styles from "./BusinessList.module.css";

function BusinessList() {
  return (
    <div className={styles.BusinessListContainer}>
      <div className={styles.BusinessList}>
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    </div>
  )
}

export default BusinessList;