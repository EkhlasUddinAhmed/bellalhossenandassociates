import React from 'react';
// import './VisionMissionSection.css'; // External CSS for styling

const VisionMissionSection = () => {
  return (
    <section className="vm-section">
      <div className="vm-container">
        <h2 className="vm-title">Our Vision & Mission</h2>
        <div className="vm-cards">
          <div className="vm-card vm-vision">
            <h3>Our Vision</h3>
            <p>
              To provide our clients with professional legal guidance proficiently and in a timely manner.
            </p>
          </div>
          <div className="vm-card vm-mission">
            <h3>Our Mission</h3>
            <p>
              We go deep to unlock insight and have the courage to act. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage. We are shaping the future. Together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
