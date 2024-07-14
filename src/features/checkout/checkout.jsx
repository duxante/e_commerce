import { Form, Formik } from 'formik';
import MyButton from '../../common/button/myButton';
import { TextField } from '@mui/material';
import { LockIcon } from '../../assets';
import './checkout.style.css';

const Checkout = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    streetAddress: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    emailForOrder: '',
    phone: '',
  };

  const handleFormSubmit = (values, actions) => {
    console.log(values, 'values');
    actions.reset();
  };

  return (
    <div className="checkoutHolder">
      <div className="checkoutMain">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <Form className="delivery" onSubmit={handleSubmit}>
              <div className="deliveryAddress">
                <h2>Delivery Address</h2>
                <div className="firstAndLastName">
                  <TextField
                    className="field"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="First Name"
                    name="firstName"
                    placeholder="· First Name"
                    fullWidth
                  />
                  <TextField
                    className="field"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Last Name"
                    name="lastName"
                    placeholder="· Last Name"
                    fullWidth
                  />
                </div>
                <p>+ Add Your company Name</p>
                <div className="streetAddress">
                  <TextField
                    className="field"
                    value={values.streetAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Street Address"
                    name="streetAddress"
                    placeholder="· Street Address"
                    fullWidth
                  />
                  <TextField
                    className="field"
                    value={values.apt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Apt/Suite/Floor (Optional)"
                    name="apt"
                    placeholder="· Apt/Suite/Floor (Optional)"
                    fullWidth
                  />
                  <div className="cityState">
                    <TextField
                      className="field"
                      value={values.cityt}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="City"
                      name="city"
                      placeholder="· City"
                    />
                    <TextField
                      className="field"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="State"
                      name="state"
                      placeholder="· State"
                    />
                    <TextField
                      className="field"
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Zip Code"
                      name="zip"
                      placeholder="· Zip Code"
                    />
                  </div>
                  <div className="checkboxThing">
                    <input id="cb1" type="checkbox" name="checkbox" />
                    <p>Use as billing address</p>
                  </div>
                </div>
              </div>
              <div className="contactInfo">
                <h2>Contact Info</h2>
                <div className="emailAndPhone">
                  <TextField
                    className="field"
                    value={values.emailForOrder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email For Order Tracking"
                    name="emailForOrder"
                    placeholder="· Email For Order Tracking"
                  />
                  <TextField
                    className="field"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Phone for Delivery Contact"
                    name="phone"
                    placeholder="· Phone for Delivery Contact"
                  />
                </div>
                <div className="privacyTerms">
                  <LockIcon />
                  <p>
                    Your privacy is important to us. View our privacy policy
                    here. we'll only contact you if there's an issue with your
                    order.
                  </p>
                  <p>
                    We'll also look for coupons associated with your email and
                    phone number
                  </p>
                  <div className="checkboxThing">
                    <input id="cb1" type="checkbox" name="checkbox" />
                    <p>Get text alerts for your order on your mobile</p>
                  </div>
                </div>
              </div>
              <MyButton buttonText="Proceed to Savings and Payments" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
