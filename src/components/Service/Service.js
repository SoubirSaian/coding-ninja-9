import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Service.css';

    //    service page  data fetching

const Service = () => {

    const [allCourse,setAllCourse] = useState([]);

    useEffect( ()=>{
        fetch('./fakeData.JSON')
        .then( res => res.json())
        .then( data => setAllCourse(data));
    },[]);

    return (
        <div className="container service-page">

            <h2 className="text-center text-bolder p-4 m-5">All Courses</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    allCourse.map(course => <CourseDetails course={course} key={course.id}></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Service;