import Business from "./Business";
import styles from "./BusinessList.module.css";

function BusinessList(props) {
  return (
    <div className={styles.BusinessListContainer}>
      <div className={styles.BusinessList}>
        {props.businesses.businesses.map((business, i) => (
          <Business
            key={i}
            imageSrc={business.image_url}
            name={business.name}
            category={business.categories[0].title}
            address={`${business.location.address1}`}
            city={business.location.city}
            state={business.location.state}
            zipCode={business.location.zipCode}
            rating={business.rating}
            reviewCount={business.review_count}
            phone={business.display_phone}
            link={business.attributes.menu_url}
            price={business.price}
            transactions={business.transactions}
          />
        ))}
      </div>
    </div>
  )
}

export default BusinessList;