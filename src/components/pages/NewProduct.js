'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import {
  Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button
} from 'react-bootstrap';
import { postProducts } from '../../actions/productsActions';

class NewProduct extends React.Component {
  handleSubmit() {
    const product = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
      quantity: findDOMNode(this.refs.quantity).value
    }];
    this.props.postProducts(product);
  }

  render() {
    return (
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <FormGroup controlId='title'>
                <ControlLabel>Title</ControlLabel>
                <FormControl type='text' placeholder='Enter Title' ref='title' />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId='description'>
                <ControlLabel>Description</ControlLabel>
                <FormControl type='text' placeholder='Enter Description' ref='description' />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId='price'>
                <ControlLabel>Price</ControlLabel>
                <FormControl type='text' placeholder='Enter Price' ref='price' />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId='quantity'>
                <ControlLabel>Quantity</ControlLabel>
                <FormControl type='text' placeholder='Enter Quantity' ref='quantity' />
                <FormControl.Feedback />
              </FormGroup>
                <Button
                 bsStyle='primary'
                 onClick={this.handleSubmit.bind(this)}
                >Save</Button>
            </Panel>
          </Col>
        </Row>
      </Well>
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
    postProducts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
