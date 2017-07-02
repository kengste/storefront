'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactForm from './ContactForm';
import { postProducts } from '../../actions/productsActions';

class ContactPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values);
    this.props.postProducts([values]);
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    postProducts
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ContactPage);
