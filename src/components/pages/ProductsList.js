'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { postProducts } from '../../actions/productsActions';

class ProductsList extends React.Component {

  render() {
    const list = this.props.products.map((product) => {
      return (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>{product.description}</h2>
          <h2>{product.price}</h2>
        </div>
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

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     postProducts: postProducts
//   }, dispatch)
// }

export default connect(mapStateToProps)(ProductsList);
