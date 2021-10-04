import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [courses,setCourses] = useState([]);

    useEffect( ()=> {

        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));

    } , []);

    return (
        <div>
            <div className="top-banner row">
                <div className="col-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center align-items-center">
                    <h1>Online Coding Classes</h1>
                    <h5>Most popular and loved online coding courses by the college community</h5>
                    <button className="btn-regular">Browse popular course</button>
                    <button className="btn-regular">Try for free</button>
                </div>
                <div className="col-12 col-md-4 col-lg-4"></div>
                
            </div>

            <h2 className="course-text">Popular Courses</h2>
        
           <div className="container">
               <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        courses.slice(0,4).map( course => <Course course={course} key={course.id}></Course>)
                    }
               </div>
           </div>
        </div>
    );
};

export default Home;