import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark, faChevronDown, faGear, faPlus, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import Sidebar from "./Sidebar";
import CourseBanner from "./CourseBanner";
import AddCourseForm from './AddCourseForm';
import { useState, useEffect} from 'react';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';




fontawesome.library.add(faUserGroup, faBookBookmark, faPlus, faGear, faChevronDown);


function DashboardLayout({children}) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
          try {
            const db = getFirestore();
            const coursesCollection = collection(db, 'courses');
            const coursesSnapshot = await getDocs(coursesCollection);
            const coursesData = coursesSnapshot.docs.map(doc => doc.data().courseName);
            setCourses(coursesData);
          } catch (error) {
            console.error('Error fetching courses: ', error);
          }
        };
    
        // Fetch courses when the component mounts
        fetchCourses();
      }, []); // The empty dependency array ensures that this effect runs once when the component mounts
    
      const addCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
      };

    return (
        <div className='grid grid-cols-4 h-screen'>
            <Sidebar courses={courses}/>
            <div className='col-span-3'>
                <CourseBanner courseName = 'Software Development I, Section 01'/>
                <div className='mx-12 my-4'>
                   
          
                    {children}
                </div>

            </div>
        </div>
    );
}

export default DashboardLayout;