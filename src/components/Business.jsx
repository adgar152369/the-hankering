import { sampleBusiness } from "../sampeBusinessData";

function Business() {
  return (
    <>
      <img src={sampleBusiness.imageSrc} alt="image of business" />
      <h2>{sampleBusiness.name}</h2>
      <p>{sampleBusiness.address}</p>
      <p>{sampleBusiness.city} {sampleBusiness.state} {sampleBusiness.zipCode}</p>
      <p>{sampleBusiness.category}</p>
      <p>{sampleBusiness.rating}</p>
      <p>{sampleBusiness.reviewCount}</p>
    </>
  )
}

export default Business;