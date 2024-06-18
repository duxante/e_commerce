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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti
            minima earum dicta non deleniti minus impedit, dolorum, ipsum
            veritatis culpa. Molestiae, repudiandae! Tenetur iure consequuntur
            laboriosam error velit necessitatibus.
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
