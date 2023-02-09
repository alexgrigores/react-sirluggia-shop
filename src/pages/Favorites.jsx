import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import './Favorites.css';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

function Favorites(props) {
    return (
        <Layout> 
            {
                props.favorites.length 
                ? <div className="row my-4">
                      { props.favorites.map((product) => {
                            return <ProductItem
                                {...product}
                                key={product.id}
                            />
                    })}
                  </div>
                : <div className="d-flex flex-column align-items-center">
                      <p className="h3">Nu ai produse favorite!</p>
                      <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                  </div>
            }
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