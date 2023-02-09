import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import './Favorites.css';
import ProductItem from '../components/ProductItem';

function Favorites(props) {
    return (
        <Layout>
            <div className="row my-4">
                { props.favorites.map((product) => {
                    return <ProductItem
                        {...product}
                        key={product.id}
                    />
                })}
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites.favorites
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);