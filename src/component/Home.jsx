import React from 'react';
import home from '../img/home.png'

function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <img src={home} alt="" className="home__img" />

        <div className="home__data">
          <h1 className="home__title">
            Plants will make <br /> your life better
          </h1>
          <p className="home__description">
            Create incredible plant design for your offices or apartments. Add freshness to your new ideas.
          </p>
          <a href="#about" className="button button--flex">
            Explore <i className="ri-arrow-right-down-line button__icon"></i>
          </a>
        </div>

        <div className="home__social">
          <span className="home__social-follow">Follow Me</span>

          <div className="home__social-links">
            <a href="https://web.facebook.com/profile.php?id=100094042236553" target="_blank" className="home__social-link">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://www.instagram.com/tahirah_roohi/" target="_blank" className="home__social-link">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://twitter.com/Tahirah_webDev" target="_blank" className="home__social-link">
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
