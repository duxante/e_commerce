import { Form } from 'react-router-dom';
import { LocationIcon, PhoneIcon } from '../../assets';
import MyButton from '../../common/button/myButton';
import './contact.style.css';
import { TextField, colors } from '@mui/material';

const Contact = () => {
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
        <div className="contactRightside">
          <h2>Get started with a free quotation</h2>
          <div className="textFieldCrap">
            <TextField
              label="Name"
              name="name"
              placeholder="Your Name..."
              fullWidth
              sx={{
                // Root class for the input field
                '& .MuiOutlinedInput-root': {
                  color: '#17252A',
                  fontFamily: 'Arial',

                  // Class for the border around the input field
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3AAFA9',
                  },
                },
                // Class for the label of the input field
                '& .MuiInputLabel-outlined': {
                  color: '#2B7A78',
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              placeholder="Your Email..."
              fullWidth
              sx={{
                // Root class for the input field
                '& .MuiOutlinedInput-root': {
                  color: '#17252A',
                  fontFamily: 'Arial',

                  // Class for the border around the input field
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3AAFA9',
                  },
                },
                // Class for the label of the input field
                '& .MuiInputLabel-outlined': {
                  color: '#2B7A78',
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              placeholder="Write Message..."
              multiline
              rows={10}
              fullWidth
              sx={{
                // Root class for the input field
                '& .MuiOutlinedInput-root': {
                  color: '#17252A',
                  fontFamily: 'Arial',

                  // Class for the border around the input field
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3AAFA9',
                  },
                },
                // Class for the label of the input field
                '& .MuiInputLabel-outlined': {
                  color: '#2B7A78',
                },
              }}
            />
          </div>
          <div className="checkboxThing">
            <input id="cb1" type="checkbox" name="checkbox" />
            <p>I accept the Terms of Service</p>
          </div>
          <MyButton
            customClass="contactButton"
            buttonText="Submit Your Request"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
