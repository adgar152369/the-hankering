import Business from "./Business";
import styles from "./BusinessList.module.css";

function BusinessList(props) {
  return (
    <div className={styles.BusinessListContainer}>
      <div className={styles.BusinessList}>
        {props.businesses.map((business, i) => (
          <Business
            key={i}
            imageSrc={business.imageSrc}
            name={business.name}
            category={business.category}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            rating={business.rating}
            reviewCount={business.reviewCount}
          />
        ))}
      </div>
    </div>
  )
}

export default BusinessList;