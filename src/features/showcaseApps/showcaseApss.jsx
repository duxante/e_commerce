import { ATHeadphones } from '../../assets';
import MyButton from '../../common/button/myButton';
import './showcaseApps.style.css';

const ShowcaseApps = () => {
  return (
    <div className="showcaseAppsHolder">
      <div className="showcaseAppsMain">
        <div className="showcaseAppsLeft">
          <div className="showcaseLeft">
            <h1>SHOWCASE APPS, INNOVATIVE TECH OR BUSINESSES.</h1>
            <p>
              Never be without the product you need! Sign Up today to save money
              and time. Cancel anytime.
            </p>

            <MyButton customClass={'tryThisButton'} buttonText="ORDER NOW" />
          </div>
        </div>
        <div className="showcaseAppsRight">
          <ATHeadphones />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseApps;
