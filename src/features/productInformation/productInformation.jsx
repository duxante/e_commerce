import './productInformation.style.css';
import MyButton from '../../common/button/myButton';
import InputMethod from './component/inputMethod';

const ProductInformation = () => {
  return (
    <div className="productInformationHolder">
      <div className="productInformationMain">
        <div className="onlyTitle">
          <h1>Product Information</h1>
        </div>
        <div className="inputAndButton">
          <InputMethod />
          <MyButton
            customClass={'productInfoButton'}
            buttonText="Get Product Information"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
