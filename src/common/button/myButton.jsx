import './myButton.style.css';

const MyButton = ({ buttonText, customClass, type, redirect }) => {
  return (
    <button
      onClick={redirect}
      className={`myButton ${customClass}`}
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default MyButton;
