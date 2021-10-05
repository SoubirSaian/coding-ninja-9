import React from 'react';
import Rating from 'react-rating';
import './Course.css';

//    home page fake data 

const Course = (props) => {
    //  data destructuring 
    const { img,name,mentor,rating,time,problem } = props.course;

    return (
       <div className="col">
            <div className="course">
                <div className="card h-100 d-flex flex-column justify-content-center align-items-center">
                   <img src={img} className="card-img-top card-img" alt="" />
                   <h3>{name}</h3>
                    <h4>{mentor}</h4>
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star rating-star"
                        fullSymbol="fas fa-star rating-star"
                        readonly
                    >
                    </Rating>
                     
                    <h6>{time}</h6>
                    <h6 className="problem-h">{problem}</h6>
                </div>
            </div>
       </div>
    );
};

export default Course;