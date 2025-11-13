import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './home.css';

const services = [
  {
    title: 'Reliable storage and fast delivery',
    description: 'Manage inventory and fulfillment effortlessly with Zambeel’s logistics network.',
    cta: 'Zambeel 3PL',
  },
  {
    title: 'Build your brand, your way',
    description: 'Create and scale your own product line with full sourcing and delivery support.',
    cta: 'Zambeel 360',
  },
  {
    title: 'Start selling instantly with no stock',
    description: 'Source trending products and sell globally with zero upfront cost.',
    cta: 'Zambeel Dropshipping',
  },
];

const countries = ['UAE', 'KSA', 'QTR', 'KWT', 'PAK'];

const features = [
  { icon: '🌍', title: '5 countries covered', description: 'Operate cross-border effortlessly with localized support teams.' },
  { icon: '🚚', title: '80%+ Delivery Success', description: 'Optimized logistics to reach your customers faster than ever.' },
  { icon: '🛒', title: '10K+ Products Listed', description: 'Find trending, high-margin products ready for your storefront.' },
  { icon: '💳', title: '5-Day Payment Guarantee', description: 'Sell with confidence knowing cash cycles are fast and reliable.' },
];

const stats = [
  { value: '70M+', label: 'COD Delivered' },
  { value: '30K+', label: 'Sellers Registered' },
  { value: '17+', label: 'Countries Represented' },
  { value: '24/7', label: 'Support Availability' },
];

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main id="home">
        <section id="services" className="hero">
          <div className="hero__content">
            <h1 className="hero__title">
              One platform. <span className="hero__highlight">Three</span> powerful ways to grow your business.
            </h1>
            <p className="hero__subtitle">
              Choose the path that fits your goals—launch fast, build a brand, or scale operations with ease.
            </p>
            <div className="hero__cards">
              {services.map((service) => (
                <article key={service.cta} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button type="button">{service.cta} →</button>
                </article>
              ))}
            </div>
          </div>
          <div className="hero__illustration" aria-hidden="true">
            <div className="hero__badge">Grow Faster</div>
          </div>
        </section>

        <section id="locations" className="country-section">
          <div className="country-section__carousel">
            <button className="carousel__control" aria-label="Previous country">‹</button>
            <div className="carousel__flag">
              <img src="https://flagcdn.com/w320/qa.png" alt="Qatar" />
            </div>
            <button className="carousel__control" aria-label="Next country">›</button>
          </div>
          <div className="country-section__details">
            <h2>Where do you want to sell?</h2>
            <span className="country-section__country">Qatar</span>
            <p>
              Selling from Pakistan gives you full access to all our services. Learn how Zambeel can help you scale by picking the right solution for your business.
            </p>
            <div className="country-section__actions">
              <button type="button" className="country-section__btn country-section__btn--primary">Zambeel 3PL</button>
              <button type="button" className="country-section__btn country-section__btn--ghost">Zambeel 360</button>
            </div>
            <div className="country-section__tabs">
              {countries.map((country) => (
                <button
                  key={country}
                  type="button"
                  className={`country-tab ${country === 'QTR' ? 'country-tab--active' : ''}`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why-section">
          <h2>Why Zambeel?</h2>
          <p className="why-section__intro">
            Start your ecommerce business from anywhere in the world without business registration.
          </p>
          <div className="why-section__grid">
            {features.map((feature) => (
              <article key={feature.title} className="why-card">
                <div className="why-card__icon" aria-hidden="true">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <button type="button" className="why-section__cta">View more →</button>
        </section>

        <section id="team" className="team-section">
          <div className="team-section__content">
            <h2>Our Team</h2>
            <p>
              A collective of ecommerce strategists, logistics specialists, and product mentors dedicated to helping you launch and scale without boundaries.
            </p>
            <div className="team-section__avatars">
              <img src="https://i.pravatar.cc/90?img=32" alt="Team member 1" />
              <img src="https://i.pravatar.cc/90?img=47" alt="Team member 2" />
              <img src="https://i.pravatar.cc/90?img=55" alt="Team member 3" />
              <div className="team-section__count">+20</div>
            </div>
          </div>
          <div className="team-section__card">
            <h3>Meet the experts behind your success</h3>
            <p>Personalized onboarding, growth audits, and around-the-clock support to unlock global opportunities.</p>
            <button type="button">Book a consultation →</button>
          </div>
        </section>

        <section className="stats-section">
          <h2>Our Network, Active & Rising</h2>
          <div className="stats-grid">
            {stats.map((item) => (
              <div key={item.value} className="stat-card">
                <span className="stat-card__value">{item.value}</span>
                <span className="stat-card__label">{item.label || item.suffix}</span>
                {item.suffix && !item.label && <span className="stat-card__suffix">{item.suffix}</span>}
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <h2>What our Customers have to say</h2>
          <div className="reviews-summary">
            <span className="reviews-summary__rating">4.21</span>
            <div>
              <div className="reviews-summary__stars">★★★★★</div>
              <p className="reviews-summary__count">(281 reviews)</p>
            </div>
          </div>
          <div className="reviews-carousel">
            <article className="review-card">
              <div className="review-card__header">
                <img src="https://i.pravatar.cc/80?img=12" alt="Mark Smith" />
                <div>
                  <h3>Mark Smith</h3>
                  <span>19th September, 2025</span>
                </div>
              </div>
              <div className="review-card__rating">★★★★☆</div>
              <p>
                “Started our dropshipping business with Zambeel and never looked back. The product quality is exceptional and customer support is available 24/7. Amazing experience!”
              </p>
            </article>
            <div className="reviews-carousel__dots">
              <span className="dot dot--active" aria-hidden="true"></span>
              <span className="dot" aria-hidden="true"></span>
              <span className="dot" aria-hidden="true"></span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;