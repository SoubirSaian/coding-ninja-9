import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import photo from '../../images/banner2.png';
import './Home.css';

const Home = () => {
    // fetching fake data 
    const [courses,setCourses] = useState([]);

    useEffect( ()=> {

        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));

    } , []);

    return (
        // top banner area 
        <div>
            <div className="top-banner row">

                <div className="col-12 col-md-7 col-lg-7 d-flex flex-column justify-content-center align-items-center">
                    <h1>Online Coding Classes</h1>
                    <h5>Most popular and loved online coding courses by the college community</h5>
                    <button className="btn-regular">Browse popular course</button>
                    <button className="btn-regular">Try for free</button>
                </div>
                <div className="col-12 col-md-5 col-lg-5">
                    <img className="w-100 h-100" src={photo} alt="" />
                </div>
                
            </div>

            <h2 className="course-text">Popular Courses</h2>

                {/* displaying fakedata in the homepage */}
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