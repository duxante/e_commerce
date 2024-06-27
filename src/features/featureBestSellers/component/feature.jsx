import '../style/feature.style.css';

const Feature = ({ img, description }) => {
  return (
    <div className="featureHolder">
      {img}
      <p>{description}</p>
    </div>
  );
};

export default Feature;
