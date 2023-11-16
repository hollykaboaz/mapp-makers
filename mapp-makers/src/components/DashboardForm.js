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
    // Fetch courses from Firestore for the user 'testUser'
    const fetchCourses = async () => {
      try {
        const db = getFirestore();
        const userRef = doc(db, 'Users', 'testUser');
        const coursesSnapshot = await getDocs(collection(userRef, 'Courses'));
        const coursesData = coursesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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

  //for adding to field as map
  /**
   *const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const db = getFirestore();

        // Check if the student already exists in the highest level Students subcollection
        const usersRef = collection(db, 'Users', 'testUser', 'Students');
        const querySnapshot = await getDocs(query(usersRef, where('email', '==', formData.email)));

        if (!querySnapshot.empty) {
            setIsStudentExists(true);
            return;
        }

        // Student does not exist, so we can add them to the highest level Students subcollection
        const studentRef = await addDoc(collection(db, 'Users', 'testUser', 'Students'), formData);

        // Add the student to selected courses
        for (const courseId of selectedCourses) {
            const courseRef = doc(db, 'Users', 'testUser', 'Courses', courseId);
            const courseStudentsRef = collection(courseRef, 'students');

            const courseQuerySnapshot = await getDocs(
            query(courseStudentsRef, where('email', '==', formData.email))
            );

            if (courseQuerySnapshot.empty) {
            await updateDoc(courseRef, {
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
   * 
   */


    /**
     * holding cell for subcollection code. switch as neccessary
     * 
     * const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const db = getFirestore();
  
      // Check if the student already exists in the highest level Students subcollection
      const usersRef = collection(db, 'Users', 'testUser', 'Students');
      const querySnapshot = await getDocs(query(usersRef, where('email', '==', formData.email)));
  
      if (!querySnapshot.empty) {
        setIsStudentExists(true);
        return;
      }
  
      // Student does not exist, so we can add them to the highest level Students subcollection
      const studentRef = await addDoc(collection(db, 'Users', 'testUser', 'Students'), formData);
  
      // Add the student to selected courses' students subcollections
      for (const courseId of selectedCourses) {
        const courseStudentsRef = collection(
          db,
          'Users',
          'testUser',
          'Courses',
          courseId,
          'students'
        );
  
        const courseQuerySnapshot = await getDocs(
          query(courseStudentsRef, where('email', '==', formData.email))
        );
  
        if (courseQuerySnapshot.empty) {
          await addDoc(courseStudentsRef, formData);
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
     * 
     * 
     */


  //For adding to subcollection
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const db = getFirestore();
  
      // Check if the student already exists in the highest level Students subcollection
      const usersRef = collection(db, 'Users', 'testUser', 'Students');
      const querySnapshot = await getDocs(query(usersRef, where('email', '==', formData.email)));
  
      if (!querySnapshot.empty) {
        setIsStudentExists(true);
        return;
      }
  
      // Student does not exist, so we can add them to the highest level Students subcollection
      const studentRef = await addDoc(collection(db, 'Users', 'testUser', 'Students'), formData);
  
      // Add the student to selected courses' students subcollections
      for (const courseId of selectedCourses) {
        const courseStudentsRef = collection(
          db,
          'Users',
          'testUser',
          'Courses',
          courseId,
          'students'
        );
  
        const courseQuerySnapshot = await getDocs(
          query(courseStudentsRef, where('email', '==', formData.email))
        );
  
        if (courseQuerySnapshot.empty) {
          await addDoc(courseStudentsRef, formData);
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
        {/* Your form inputs for first name, last name, email */}
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
        {/* Render course checkboxes */}
        {courses.map((course) => (
          <div key={course.id}>
            <label>
              <input
                type="checkbox"
                value={course.id}
                onChange={handleCheckboxChange}
                checked={selectedCourses.includes(course.id)}
              />
              {`Course Section: ${course.section}`}
            </label>
          </div>
        ))}
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
