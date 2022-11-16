import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, 
         faLaptop, 
         faBottleDroplet, 
         faHandHoldingHeart, 
         faBagShopping, 
         faHome, 
         faCouch, 
         faShirt, 
         faPersonDress, 
         faSocks, 
         faClock, 
         faBriefcase, 
         faGem, 
         faGlasses, 
         faCar, 
         faMotorcycle, 
         faLightbulb,
         faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function setIcon(category) {
    switch (category){
        case "smartphones":
            return <FontAwesomeIcon icon={faMobileScreenButton} />;
            
        case "laptops":
            return <FontAwesomeIcon icon={faLaptop} />;
            
        case "fragrances":
            return <FontAwesomeIcon icon={faBottleDroplet} />
            
        case "skincare":
            return <FontAwesomeIcon icon={faHandHoldingHeart} />
            
        case "groceries":
            return <FontAwesomeIcon icon={faBagShopping} />
            
        case "home-decoration":
            return <FontAwesomeIcon icon={faHome} />
            
        case "furniture":
            return <FontAwesomeIcon icon={faCouch} />
            
        case "tops":
            return <FontAwesomeIcon icon={faShirt} />
            
        case "womens-dresses":
            return <FontAwesomeIcon icon={faPersonDress} />
            
        case "womens-shoes":
            return <FontAwesomeIcon icon={faSocks} />
            
        case "mens-shirts":
            return <FontAwesomeIcon icon={faShirt} />
            
        case "mens-shoes":
            return <FontAwesomeIcon icon={faSocks} />
            
        case "mens-watches":
            return <FontAwesomeIcon icon={faClock} />
            
        case "womens-watches":
            return <FontAwesomeIcon icon={faClock} />
            
        case "womens-bags":
            return <FontAwesomeIcon icon={faBriefcase} />
            
        case "womens-jewellery":
            return <FontAwesomeIcon icon={faGem} />
            
        case "sunglasses":
            return <FontAwesomeIcon icon={faGlasses} />
            
        case "automotive":
            return <FontAwesomeIcon icon={faCar} />
            
        case "motorcycle":
            return <FontAwesomeIcon icon={faMotorcycle} />
            
        case "lighting":
            return <FontAwesomeIcon icon={faLightbulb} />
            
        default:
            return <FontAwesomeIcon icon={faCircleQuestion} />
            
            
    }
    
}