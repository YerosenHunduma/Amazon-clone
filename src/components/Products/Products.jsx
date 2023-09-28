import { useStateValue } from "../StateProvider";
import "./Products.css";
import StarIcon from "@mui/icons-material/Star";
function Products({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();
	// console.log("this is the basket", basket);
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>
								<StarIcon />
							</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export default Products;
