import '../style/testimonialMain.style.css';

const MainExample = ({ img, description, title }) => {
  return (
    <div className="testimonialMainHolder">
      {img}
      <p>{description}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default MainExample;
