import Feature from './component/feature';
import { featureYourBestSellingData } from '../../data/featureData';
import './featureBestSellers.style.css';

const FeatureBestSellers = () => {
  return (
    <div className="featureBestSellersHolder">
      <div className="featureBestSellersMain">
        <div className="featureBestSellersUpper">
          <h1>Feature your best sellers</h1>
          <p>
            Discover our Best Sellers: a curated selection of our most popular
            products, celebrated for their exceptional quality, innovative
            design, and outstanding customer satisfaction. These top-rated items
            are favorites among our clientele and set the standard for
            excellence in our collection. From cutting-edge technology to
            timeless classics, our Best Sellers showcase the very best we have
            to offer. Experience the products that have earned rave reviews and
            loyal followings from customers around the world.
          </p>
        </div>
        <div className="featureBestSellersBottom">
          {featureYourBestSellingData.map((oneFeature) => {
            return (
              <Feature
                img={oneFeature.img}
                description={oneFeature.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureBestSellers;
