import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartActions';
import { addToFavorites } from '../../redux/favorites/FavoritesActions';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
            <button
                className="btn btn-outline-dark mt-2"
                onClick={() => props.addToFavorites({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă la favorite
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);