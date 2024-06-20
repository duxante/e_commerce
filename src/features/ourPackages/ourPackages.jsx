import { packagesData } from '../../data/packagesData';
import Package from './component/package';
import './ourPackages.style.css';

const OurPackages = () => {
  return (
    <div className="ourPackagesHolder">
      <div className="ourPackagesMain">
        <h1 className="packagesTitle">Our Packages</h1>
        <div className="packagesBottom">
          {packagesData.map((onePackage) => {
            return (
              <Package
                key={onePackage.id}
                img={onePackage.img}
                title={onePackage.title}
                description={onePackage.description}
                price={onePackage.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
