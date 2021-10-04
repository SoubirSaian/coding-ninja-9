import React from 'react';
import Rating from 'react-rating';
import './CourseDetails.css';

const CourseDetails = (props) => {
    console.log(props);
    const {description,fees,img,mentor,name,problem,rating,time,totalRating} = props.course;
    return (
        <div className="col">
            <div className="course-detail">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <h4>{mentor}</h4>
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star rating-star"
                        fullSymbol="fas fa-star rating-star"
                        readonly
                    >
                    </Rating>
                    <h5 className="rating-point">{rating}* ({totalRating})</h5>
                    <h5>{fees} tk.</h5>
                    <h6>{time}</h6>
                    <h6 className="problem-h">{problem}</h6>
                    <p>{description}</p>
                </div>

            </div>
            
        </div>
    );
};

export default CourseDetails;