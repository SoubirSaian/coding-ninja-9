import React from 'react';
import './About.css';
      
    //   about page 

const About = () => {
    return (
        <div className="container about-page">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <li>Faculty</li>
                    <p>Experienced faculty from IIT, Stanford, IIIT’s, Facebook and Amazon</p>
                </div>
                <div className="col">
                    <li>7 days refund policy</li>
                    <p>Get your money back within 7 days upon discontinuing a course</p>
                </div>
                <div className="col">
                    <li>Curriculam</li>
                    <p>Personalised course syllabus designed with the industry standards</p>
                </div>
                <div className="col">
                    <li>Slack Community</li>
                    <p>Interact & learn with your batchmates via Slack Groups</p>
                </div>
                <div className="col">
                    <li>Certificate</li>
                    <p>Industry recognised certificate after you finish your course</p>
                </div>
                <div className="col">
                    <li>No cost EMI</li>
                    <p>Get your money back within 7 days upon discontinuing a course</p>
                </div>
                <div className="col">
                    <li>Teaching assistant</li>
                    <p>Doubt Resolution through 1000+ TAs, via Audio /Video Call/Screen Sharing</p>
                </div>
                <div className="col">
                    <li>Premium hirist account</li>
                    <p>Get a Premium Hirist Account on achieving more than 90% in any one of Data & Development, Interview Prep or Foundation courses</p>
                </div>
            
            </div>
        </div>
    );
};

export default About;