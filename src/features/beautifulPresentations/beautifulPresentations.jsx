import { presentationData } from '../../data/beautifulPresentationsData';
import './beautifulPresentations.style.css';
import BeautifulPresentationsOneSegment from './component/beautifulPresentationsOneSegment';

const BeautifulPresentations = () => {
  return (
    <div className="beautifulPresentationsHolder">
      <div className="beautifulPresentationsMain">
        <div className="beautifulPresentationsUpper">
          <h1>Beautiful presentations made easy.</h1>
          <p>
            Creating beautiful presentations has never been easier! With our
            intuitive tools and stunning templates, you can craft professional,
            eye-catching slides in no time. Impress your audience effortlessly
            and make your message unforgettable.
          </p>
        </div>
        <div className="beautifulPresentationsBottom">
          {presentationData.map((oneSegment) => {
            return (
              <BeautifulPresentationsOneSegment
                key={oneSegment.id}
                id={oneSegment.id}
                img={oneSegment.img}
                title={oneSegment.title}
                description={oneSegment.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BeautifulPresentations;
