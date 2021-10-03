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
            <h1>home page</h1>
           <div className="display-course">
                {
                    courses.slice(0,6).map( course => <Course course={course} key={course.id}></Course>)
                }
           </div>
        </div>
    );
};

export default Home;