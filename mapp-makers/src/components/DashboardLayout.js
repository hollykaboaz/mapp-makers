import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookBookmark,
    faChevronDown,
    faGear,
    faPlus,
    faQrcode,
    faUserGroup,
    faUserXmark
} from "@fortawesome/free-solid-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import Sidebar from "./Sidebar";
import CourseBanner from "./CourseBanner";
import { useState, useEffect } from 'react';
import { 
  getFirestore,  // Importing Firestore functionalities
  collection,    // For creating a collection reference
  onSnapshot,
  getDocs        // For getting documents from Firestore
} from 'firebase/firestore';

// Adding specific icons to the fontawesome library
fontawesome.library.add(faUserGroup, faBookBookmark, faPlus, faGear, faChevronDown,faQrcode,faUserXmark);


// Main DashboardLayout component
function DashboardLayout({ children }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to handle course selection
  const handleCourseSelection = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  // State to manage courses data
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Function to fetch courses from Firestore
    const fetchCourses = async () => {
      try {
        const db = getFirestore(); // Accessing Firestore instance

        // Reference to the 'Courses' collection under 'testUser'
        const coursesCollection = collection(db, 'Users', 'testUser', 'Courses');
        // Use onSnapshot to listen for changes in the collection
        const unsubscribe = onSnapshot(coursesCollection, (coursesSnapshot) => {
        // Extracting course data and setting it in the state
        const coursesData = coursesSnapshot.docs.map((doc) => {
          const courseData = doc.data();
          return `${courseData.title}. Section: ${courseData.section}`;
        });
        setCourses(coursesData);
        // Set the first course as the selected course when courses are loaded
        if (coursesData.length > 0 && !selectedCourse) {
          setSelectedCourse(coursesData[0]);
        }
      });

      // Cleanup the subscription when the component unmounts
      return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    // Fetch courses when the component mounts (runs once)
    fetchCourses();
  }, [selectedCourse]); // The empty dependency array ensures that this effect runs once when the component mounts

  // Structure of the DashboardLayout component
  return (
    <div className='grid grid-cols-4 h-screen'>
      {/* Sidebar component with courses data */}
      <Sidebar courses={courses} onCourseSelect={handleCourseSelection} />

      {/* Main content area */}
      <div className='col-span-3'>
        {/* Banner displaying course information */}
        {selectedCourse && <CourseBanner courseName={selectedCourse} />} {/* Display selected course name */}

        <div className='mx-12 my-4'>
          {/* Nested components or content received as children */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;