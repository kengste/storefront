'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'react-bootstrap';
import { getProducts } from '../../actions/productsActions';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
  componentDidMount() {
    this.props.getProducts(
      [{
        id: 1,
        title: 'this was the book title',
        description: 'this is the book description',
        price: 33.33
      },
      {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 50
      }]
    );
  }
  render() {
    const list = this.props.products.map((product, index) => {
      return (
        <Col xs={12} sm={6} md={4} key={index}>
          <ProductItem
            title={product.title}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
          />
        </Col>
    );
  });
    return (
      <div>
        <h1>Hello React!</h1>
        {list}
      </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      products: state.products.products,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      getProducts
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
