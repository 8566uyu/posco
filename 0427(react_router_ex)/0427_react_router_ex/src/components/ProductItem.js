import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <Link to={"/products/" + product.id}>
      <ul className="ProductItem">
        <li>상품명: {product.name}</li>
        <li>상세설명: {product.body}...</li>
        <li>이미지: {product.url}</li>
      </ul>
    </Link>
  );
};

export default ProductItem;
