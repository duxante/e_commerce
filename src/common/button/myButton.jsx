import './myButton.style.css';

const MyButton = ({ buttonText, customClass, type }) => {
  return (
    <button className={`myButton ${customClass}`} type={type}>
      {buttonText}
    </button>
  );
};

export default MyButton;
