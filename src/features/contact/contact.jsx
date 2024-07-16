import { Form, Formik } from 'formik';
import { LocationIcon, PhoneIcon } from '../../assets';
import MyButton from '../../common/button/myButton';
import './contact.style.css';
import { TextField, colors } from '@mui/material';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleFormSubmit = (values, actions) => {
    console.log(values, 'values');
    actions.resetForm();
  };

  return (
    <div className="contactHolder">
      <div className="contactMain">
        <div className="contactLeftSide">
          <div className="contactLeftSideText">
            <h1>Get in touch</h1>
            <p>
              Use our contact form for all information requests or contact us
              directly using the contact information below.
            </p>
            <p>Feel free to get in touch with us via email or phone</p>
          </div>
          <hr />
          <div className="contactLocationAndPhone">
            <div className="contactLocation">
              <LocationIcon />
              <div className="locationText">
                <h3>Our Office Location</h3>
                <p>The Interior Design Studio Company</p>
                <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
              </div>
            </div>
            <div className="contactLocation">
              <PhoneIcon />
              <div className="locationText">
                <h3>Phone (Landline)</h3>
                <p>+ 912 3 567 8987</p>
              </div>
            </div>
          </div>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <Form className="formRightside" onSubmit={handleSubmit}>
              <div className="contactRightside">
                <h2>Get started with a free quotation</h2>
                <div className="textFieldCrap">
                  <TextField
                    className="field"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Name"
                    name="name"
                    placeholder="Your Name..."
                    fullWidth
                  />
                  <TextField
                    className="field"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    name="email"
                    placeholder="Your Email..."
                    fullWidth
                  />
                  <TextField
                    className="field"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Message"
                    name="message"
                    placeholder="Write Message..."
                    multiline
                    rows={10}
                    fullWidth
                  />
                </div>
                <div className="checkboxThing">
                  <input id="cb1" type="checkbox" name="checkbox" />
                  <p>I accept the Terms of Service</p>
                </div>
                <MyButton
                  type="submit"
                  customClass="contactButton"
                  buttonText="Submit Your Request"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
