import React, { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore'; // Import Firestore components

function DashboardForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isStudentExists, setIsStudentExists] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Fetch courses from Firestore
    const fetchCourses = async () => {
      try {
        const db = getFirestore();
        const coursesRef = collection(db, 'users', 'testUID', 'Courses');
        const querySnapshot = await getDocs(coursesRef);
        const coursesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedCourses([...selectedCourses, value]);
    } else {
      setSelectedCourses(selectedCourses.filter((course) => course !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore();

      // Check if the student already exists in the highest level student database
      const usersRef = collection(db, 'Users');
      const querySnapshot = await getDocs(query(usersRef, where('email', '==', formData.email)));

      if (!querySnapshot.empty) {
        setIsStudentExists(true);
        return;
      }

      // Student does not exist, so we can add them to the highest level student database
      const studentRef = await addDoc(collection(db, 'Users', 'test UID', 'Students'), formData);
      const studentDoc = doc(db, 'Users', 'test UID', 'Students', studentRef.id);

      // Add the student to selected courses
      const coursesRef = collection(db, 'Users', 'test UID', 'Courses');
      for (const courseId of selectedCourses) {
        const courseDoc = doc(coursesRef, courseId);
        const courseStudentsRef = collection(courseDoc, 'students');

        const courseQuerySnapshot = await getDocs(
          query(courseStudentsRef, where('email', '==', formData.email))
        );

        if (courseQuerySnapshot.empty) {
          await updateDoc(courseDoc, {
            students: {
              [studentRef.id]: formData,
            },
          });
        }
      }

      setIsEnrolled(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
      setSelectedCourses([]);
    } catch (error) {
      console.error('Error adding student information: ', error);
      alert('An error occurred while adding student information. Please try again.');
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <h2>Add Student to Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Other form inputs as needed */}

        <button type="submit">Add Student & Enroll</button>
        <button type="button" onClick={handleClose}>Close</button>
      </form>

      {isStudentExists && (
        <p className="text-red-500">
          This student already exists in the database.
        </p>
      )}
      {isEnrolled && (
        <p className="text-green-500">
          Student added and enrolled successfully.
        </p>
      )}
    </div>
  );
}

export default DashboardForm;
