import './myButton.style.css';

const MyButton = ({ buttonText, customClass }) => {
  return <button className={`myButton ${customClass}`}>{buttonText}</button>;
};

export default MyButton;
