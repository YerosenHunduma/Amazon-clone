import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<div className="left__header">
				<Link to="/">
					<img
						className="header__logo"
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt="amazon logo"
					/>
				</Link>
				<div className="header__search">
					<input className="header__searchInput" type="text" />
					<SearchIcon className="header__searchIcon" />
				</div>
			</div>
			<div className="right__header ">
				<Link to={!user && "/Login"}>
					<div onClick={handleAuthenticaton} className="header__option">
						<span className="header__optionLineOne">
							hello, {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{" "}
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/Checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
