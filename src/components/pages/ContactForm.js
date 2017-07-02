'use strict';
/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <Field name="price" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <Field name="quantity" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'contact'
})(ContactForm);
