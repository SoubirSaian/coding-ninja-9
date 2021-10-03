import React from 'react';
import './Course.css';

const Course = (props) => {
    console.log(props);
    const { name,img } = props.course;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Course;