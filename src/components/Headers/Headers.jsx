import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./header.scss"



const Header = () => {
    return(
        <header className="container-header bg flex color">
            <div className="icon">
            <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faList} />
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
        
    )
}
export default Header;