'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCount } from '../../actions/productsActions';

class ProductItem extends React.Component {
  onDecrement() {
    this.props.updateCount(this.props.description, -1, this.props.products);
  }
  onIncrement() {
    this.props.updateCount(this.props.description, 1, this.props.products);
  }
  render() {
    return (
      <ListGroup>
        <ListGroupItem>{this.props.title}</ListGroupItem>
        <ListGroupItem>{this.props.description}</ListGroupItem>
        <ListGroupItem>{this.props.price}</ListGroupItem>
        <ListGroupItem>{this.props.quantity}</ListGroupItem>
        <Button onClick={this.onDecrement.bind(this)} bsSize='small'>-</Button>
        <Button onClick={this.onIncrement.bind(this)} bsSize='small'>+</Button>
      </ListGroup>
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
    updateCount
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
