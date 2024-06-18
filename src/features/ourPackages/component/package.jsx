import MyButton from '../../../common/button/myButton';
import '../style/package.style.css';

const Package = ({ img, title, description, price }) => {
  return (
    <div className="packageHolder">
      {img}
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>{price}</h2>
      <MyButton customClass={'packageButton'} buttonText="SHOP NOW" />
    </div>
  );
};

export default Package;
