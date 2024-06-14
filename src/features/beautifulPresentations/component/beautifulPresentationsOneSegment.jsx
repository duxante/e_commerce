import '../style/beautifulPresentationsOneSegment.style.css';

const BeautifulPresentationsOneSegment = ({ id, img, title, description }) => {
  return (
    <div className="beautifulPresentationsOneSegmentHolder">
      {img}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BeautifulPresentationsOneSegment;
