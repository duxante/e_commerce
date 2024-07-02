import { Bowers, CatHeadphones, OurStory } from '../../assets';
import './aboutUs.style.css';

const AboutUs = () => {
  return (
    <div className="aboutUsHolder">
      <div className="aboutUsMain">
        <div className="aboutUsOneSegment">
          <div className="aboutUsText">
            <h1>About Us</h1>
            <p>
              Welcome to new world of sound, your ultimate destination for
              premium headphones. Our mission is to deliver exceptional audio
              experiences through cutting-edge technology and innovative design.
              We believe that great sound can transform everyday moments into
              extraordinary experiences. Our curated collection features a range
              of styles and features to suit every listener, from audiophiles to
              casual music lovers. With a commitment to quality, comfort, and
              customer satisfaction, we aim to provide headphones that not only
              sound amazing but also feel great to wear. Explore our products
              and find your perfect sound with us.
            </p>
          </div>
          <CatHeadphones />
        </div>
        <div className="aboutUsOneSegment">
          <Bowers />
          <div className="aboutUsText">
            <h1>Our Mission: Bring You Closer To Better Sound</h1>
            <p>
              Our mission is to deliver unparalleled audio experiences through
              innovative design and cutting-edge technology, ensuring every
              listener finds their perfect sound. We strive to exceed
              expectations by combining superior quality, exceptional customer
              service, and a commitment to continuous improvement in all our
              products.
            </p>
          </div>
        </div>
        <div className="aboutUsOneSegment">
          <div className="aboutUsText">
            <h1>Our Story</h1>
            <p>
              Our story began with a passion for high-fidelity sound and a
              vision to revolutionize the headphone industry. It all started in
              a small garage, where a group of audio enthusiasts and engineers
              came together, driven by a shared love for music and innovation.
              Late nights, countless prototypes, and a relentless pursuit of
              perfection marked our early days. From these humble beginnings,
              we've grown into a trusted brand, recognized for our dedication to
              exceptional sound quality and cutting-edge design. Our journey has
              been fueled by a commitment to excellence and a belief in the
              transformative power of music. Each headphone we create is a
              testament to our craftsmanship, designed to deliver an immersive
              audio experience while ensuring maximum comfort and durability.
              Today, our team continues to push the boundaries of audio
              technology, staying true to our roots while embracing the future.
              We are proud to offer a diverse range of products that cater to
              audiophiles and casual listeners alike. Join us as we continue to
              bring the joy of perfect sound to people around the world, one
              pair of headphones at a time.
            </p>
          </div>
          <OurStory />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
