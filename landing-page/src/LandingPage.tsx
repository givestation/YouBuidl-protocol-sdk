import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Empowering the Future of Decentralized Applications</h1>
          <p className="hero-subtitle">Build, scale, and innovate with cutting-edge tools and protocols.</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/public/hero-illustration.png" alt="Hero Illustration" className="hero-image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="/public/icons/scalability-icon.png" alt="Scalability" className="feature-icon" />
            <h3>Scalability</h3>
            <p>Effortlessly scale your applications with our robust and reliable infrastructure.</p>
          </div>
          <div className="feature-card">
            <img src="/public/icons/security-icon.png" alt="Security" className="feature-icon" />
            <h3>Security</h3>
            <p>State-of-the-art security measures to protect your data and users.</p>
          </div>
          <div className="feature-card">
            <img src="/public/icons/interoperability-icon.png" alt="Interoperability" className="feature-icon" />
            <h3>Interoperability</h3>
            <p>Seamlessly connect with multiple blockchains and ecosystems.</p>
          </div>
          <div className="feature-card">
            <img src="/public/icons/support-icon.png" alt="Support" className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Our team is here to help you every step of the way, anytime you need.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="testimonials-title">What Our Users Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-slide">
            <img src="/public/icons/user1.jpg" alt="User 1" className="testimonial-image" />
            <blockquote>
              "This platform has revolutionized the way we build dApps. Highly recommend!"
            </blockquote>
            <p className="user-name">- Alex Johnson</p>
          </div>
          <div className="testimonial-slide">
            <img src="/public/icons/user2.jpg" alt="User 2" className="testimonial-image" />
            <blockquote>
              "The tools provided are intuitive and powerful. A game-changer for developers."
            </blockquote>
            <p className="user-name">- Maria Lopez</p>
          </div>
          <div className="testimonial-slide">
            <img src="/public/icons/user3.jpg" alt="User 3" className="testimonial-image" />
            <blockquote>
              "Exceptional support and seamless integration. Couldn't ask for more."
            </blockquote>
            <p className="user-name">- Chris Evans</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon"><img src="/public/icons/facebook-icon.png" alt="Facebook" /></a>
            <a href="#" className="social-icon"><img src="/public/icons/twitter-icon.png" alt="Twitter" /></a>
            <a href="#" className="social-icon"><img src="/public/icons/linkedin-icon.png" alt="LinkedIn" /></a>
          </div>
          <p>&copy; 2025 YouBuidl Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;