import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './home.css';
import heroLogo from '../assets/zambeel.png';

const services = [
  {
    title: 'Reliable storage and fast delivery',
    description: 'Manage inventory effortlessly with Zambeel’s logistics network.',
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

const countryConfigs = [
  {
    code: 'UAE',
    label: 'UAE',
    name: 'United Arab Emirates',
    flag: 'https://flagcdn.com/w320/ae.png',
    description: 'Scale across the Emirates with nationwide fulfilment, prime delivery windows, and ready-to-launch dropshipping.',
    services: ['3pl', '360', 'dropshipping'],
  },
  {
    code: 'KSA',
    label: 'KSA',
    name: 'Kingdom of Saudi Arabia',
    flag: 'https://flagcdn.com/w320/sa.png',
    description: 'Tap into the GCC’s largest market with localized operations, concierge onboarding, and full product sourcing support.',
    services: ['3pl', '360', 'dropshipping'],
  },
  {
    code: 'QTR',
    label: 'Qatar',
    name: 'Qatar',
    flag: 'https://flagcdn.com/w320/qa.png',
    description: 'Serve Qatar with cross-border fulfilment and brand acceleration packages tailored for rapid scaling.',
    services: ['3pl', '360'],
  },
  {
    code: 'KWT',
    label: 'Kuwait',
    name: 'Kuwait',
    flag: 'https://flagcdn.com/w320/kw.png',
    description: 'Deliver to Kuwait with seamless customs handling and dedicated growth advisors for established brands.',
    services: ['3pl', '360'],
  },
  {
    code: 'PAK',
    label: 'Pakistan',
    name: 'Pakistan',
    flag: 'https://flagcdn.com/w320/pk.png',
    description: 'Launch from Pakistan with direct access to warehousing and sourcing support for global expansion.',
    services: ['3pl', '360'],
  },
];

const serviceOptions = [
  { key: '3pl', label: 'Zambeel 3PL', variant: 'primary' },
  { key: '360', label: 'Zambeel 360', variant: 'ghost' },
  { key: 'dropshipping', label: 'Zambeel Dropshipping', variant: 'ghost' },
];

const stats = [
  { id: 'cod', target: 70, suffix: 'M+', label: 'COD Delivered', duration: 1800 },
  { id: 'sellers', target: 30, suffix: 'K+', label: 'Sellers Registered', duration: 1800 },
  { id: 'countries', target: 5, suffix: '', label: 'Countries Represented', duration: 1800 },
  { id: 'support', target: 24, suffix: '/7', label: 'Support Availability', duration: 1800 },
];

const whyHighlights = [
  { id: 'coverage', icon: 'globe', label: '5 countries covered' },
  { id: 'delivery', icon: 'truck', label: '80% Delivery Success' },
  { id: 'products', icon: 'tag', label: '10K+ Products Listed' },
  { id: 'payment', icon: 'calendar', label: 'Guaranteed Payments' },
];

const whySolutions = [
  {
    id: 'dropshipping',
    title: 'Zambeel Dropshipping',
    description: 'Start your ecommerce business from anywhere in the world without business registration.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cod',
    title: 'Cash on Delivery',
    description: 'Scale your business confidently with optimized COD fulfilment and reconciliation.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ai',
    title: 'AI Enabled Ecommerce',
    description: 'Use our AI tools to match customers with trending products in real-time.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sourcing',
    title: 'Global Product Sourcing',
    description: 'Unlock vetted suppliers across regions with full quality assurance and logistics support.',
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'automation',
    title: 'Fulfilment Automation',
    description: 'Integrate warehouses and couriers with one-click automations to reduce manual work.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'analytics',
    title: 'Growth Analytics',
    description: 'Track conversion, retention, and inventory health with dashboards built for operators.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  },
];

const highlightIcons = {
  globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#1d2a69" strokeWidth="1.8" />
      <path d="M12 3C9.5 6.5 9.5 17.5 12 21C14.5 17.5 14.5 6.5 12 3Z" stroke="#1d2a69" strokeWidth="1.4" />
      <path d="M3 12H21" stroke="#1d2a69" strokeWidth="1.4" />
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6.5H14V15.5H3V6.5Z" stroke="#1d2a69" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 9H18L21 12V15.5H14V9Z" stroke="#1d2a69" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="16" r="1.8" stroke="#1d2a69" strokeWidth="1.4" />
      <circle cx="17" cy="16" r="1.8" stroke="#1d2a69" strokeWidth="1.4" />
    </svg>
  ),
  tag: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4H5V10L14 19L20 13L11 4Z" stroke="#1d2a69" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="7.5" r="1" fill="#1d2a69" />
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="#1d2a69" strokeWidth="1.6" fill="none" />
      <path d="M4 9H20" stroke="#1d2a69" strokeWidth="1.6" />
      <path d="M8 3V7" stroke="#1d2a69" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 3V7" stroke="#1d2a69" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 14L11.2 16.2L15 12.8" stroke="#1d2a69" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const reviews = [
  {
    id: 1,
    name: 'Mark Smith',
    date: '19th September, 2025',
    avatar: 'https://i.pravatar.cc/80?img=12',
    rating: '★★★★☆',
    content:
      'Started our dropshipping business with Zambeel and never looked back. The product quality is exceptional and customer support is available 24/7. Amazing experience!',
  },
  {
    id: 2,
    name: 'Aisha Khan',
    date: '2nd October, 2025',
    avatar: 'https://i.pravatar.cc/80?img=15',
    rating: '★★★★★',
    content:
      'The onboarding process was seamless. We scaled to three new countries within months thanks to Zambeel’s logistics and marketing teams.',
  },
  {
    id: 3,
    name: 'Carlos Lima',
    date: '28th August, 2025',
    avatar: 'https://i.pravatar.cc/80?img=33',
    rating: '★★★★☆',
    content:
      'Inventory syncing and automated fulfilment saved our operations team hours every week. Highly recommend for fast-growing stores.',
  },
  {
    id: 4,
    name: 'Emily Chen',
    date: '7th July, 2025',
    avatar: 'https://i.pravatar.cc/80?img=48',
    rating: '★★★★★',
    content:
      'Customer service goes above and beyond. Their sourcing recommendations helped us launch a new product line with record margins.',
  },
  {
    id: 5,
    name: 'Muhammad Ali',
    date: '12th June, 2025',
    avatar: 'https://i.pravatar.cc/80?img=64',
    rating: '★★★★☆',
    content:
      'Reliable COD settlements and analytics dashboards gave us the confidence to scale our ad spend across the region.',
  },
];

const Home = () => {
  const [activeCountryIndex, setActiveCountryIndex] = useState(0);
  const currentCountry = countryConfigs[activeCountryIndex];
  const whyCarouselRef = useRef(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsSectionRef = useRef(null);

  const handlePrevCountry = () => {
    setActiveCountryIndex((prev) => (prev - 1 + countryConfigs.length) % countryConfigs.length);
  };

  const handleNextCountry = () => {
    setActiveCountryIndex((prev) => (prev + 1) % countryConfigs.length);
  };

  const handleSelectCountry = (code) => {
    const index = countryConfigs.findIndex((country) => country.code === code);
    if (index !== -1) {
      setActiveCountryIndex(index);
    }
  };

  const handleWhyViewMore = () => {
    if (whyCarouselRef.current) {
      whyCarouselRef.current.scrollBy({ left: whyCarouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const startStatsAnimation = () => {
    stats.forEach((stat, index) => {
      const startTime = performance.now();
      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / stat.duration, 1);
        const value = stat.target * progress;
        setAnimatedStats((prev) => {
          const next = [...prev];
          next[index] = value;
          return next;
        });
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    });
  };

  useEffect(() => {
    if (statsAnimated) {
      return undefined;
    }

    const section = statsSectionRef.current;
    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startStatsAnimation();
          setStatsAnimated(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [statsAnimated]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <Header />
      <main id="home">
        <section id="services" className="hero">
          <div className="hero__content">
            <img src={heroLogo} alt="Zambeel" className="hero__logo" />
            <h1 className="hero__title">
              One platform. <span className="hero__highlight">Three</span> powerful ways to grow your business.
            </h1>
            <div className="hero__cards">
              {services.map((service) => (
                <article key={service.cta} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button type="button" className="service-card__cta">
                    {service.cta} <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="country-section">
          <div className="country-section__card">
            <div className="country-section__main">
              <div className="country-section__flag">
                <div className="country-section__flag-nav">
                  <button
                    className="carousel__control"
                    type="button"
                    aria-label="Previous country"
                    onClick={handlePrevCountry}
                  >
                    ‹
                  </button>
                  <div className="country-section__flag-inner">
                    <img src={currentCountry.flag} alt={currentCountry.name} />
                  </div>
                  <button
                    className="carousel__control"
                    type="button"
                    aria-label="Next country"
                    onClick={handleNextCountry}
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="country-section__panel">
                <div className="country-section__header">
                  <h2>Where do you want to sell?</h2>
                  <span className="country-section__country">{currentCountry.label}</span>
                </div>
                <p className="country-section__description">{currentCountry.description}</p>
                <div className="country-section__actions">
                  {serviceOptions
                    .filter((service) => currentCountry.services.includes(service.key))
                    .map((service) => (
                      <button
                        key={service.key}
                        type="button"
                        className={`country-section__btn country-section__btn--${service.variant}`}
                      >
                        <span className="country-section__btn-label">{service.label}</span>
                        <span className="country-section__btn-subtext">
                          {service.key === '3pl' && 'Fast, Reliable 3PL Solutions'}
                          {service.key === '360' && 'Launch Your Own Product'}
                          {service.key === 'dropshipping' && 'Zero Inventory, Global Reach'}
                        </span>
                        <span className="country-section__btn-icon" aria-hidden="true">→</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="country-section__tabs">
              {countryConfigs.map((country, index) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelectCountry(country.code)}
                  className={`country-tab ${index === activeCountryIndex ? 'country-tab--active' : ''}`}
                >
                  <span className="country-tab__flag">
                    <img src={country.flag} alt="" aria-hidden="true" />
                  </span>
                  <span className="country-tab__label">{country.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why-section">
          <div className="why-section__header">
            <h2>Why Zambeel?</h2>
            <p className="why-section__intro">
              Start your ecommerce business from anywhere in the world without business registration.
            </p>
          </div>
          <div className="why-section__body">
            <div className="why-section__fixed" aria-label="Zambeel benefits">
              <ul className="why-highlights">
                {whyHighlights.map((highlight) => (
                  <li key={highlight.id} className="why-highlight">
                    <span className="why-highlight__icon" aria-hidden="true">
                      {highlightIcons[highlight.icon]}
                    </span>
                    <span className="why-highlight__label">{highlight.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-section__carousel" aria-label="Zambeel solutions" ref={whyCarouselRef}>
              {whySolutions.map((solution) => (
                <article
                  key={solution.id}
                  className="why-card"
                  style={{ backgroundImage: `url(${solution.image})` }}
                >
                  <div className="why-card__overlay" aria-hidden="true" />
                  <div className="why-card__content">
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button type="button" className="why-section__cta" onClick={handleWhyViewMore}>
            View more <span aria-hidden="true">→</span>
          </button>
        </section>

        <section className="stats-section" ref={statsSectionRef}>
          <h2>Our Network, Active & Rising</h2>
          <div className="stats-grid">
            {stats.map((item, index) => {
              const displayValue = Math.round(animatedStats[index]);
              const formattedValue = `${displayValue.toLocaleString()}${item.suffix}`;
              return (
                <div key={item.id} className="stat-card">
                  <span className="stat-card__value">{formattedValue}</span>
                  <span className="stat-card__label">{item.label}</span>
                </div>
              );
            })}
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
          <div className="reviews-carousel" role="region" aria-label="Customer testimonials">
            <div className="reviews-carousel__track" style={{ transform: `translateX(-${activeReviewIndex * 100}%)` }}>
              {reviews.map((review) => (
                <article key={review.id} className="review-card">
                  <div className="review-card__header">
                    <img src={review.avatar} alt={review.name} />
                    <div>
                      <h3>{review.name}</h3>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  <div className="review-card__rating" aria-label={`Rated ${review.rating.length} out of 5`}>
                    {review.rating}
                  </div>
                  <p>{review.content}</p>
                </article>
              ))}
            </div>
            <div className="reviews-carousel__dots">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  className={`dot ${index === activeReviewIndex ? 'dot--active' : ''}`}
                  onClick={() => setActiveReviewIndex(index)}
                  aria-label={`Show review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;