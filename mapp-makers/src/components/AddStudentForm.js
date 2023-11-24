// StudentForm.js
import React, { useState, useEffect } from 'react';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs,  
  doc,
  updateDoc, } from 'firebase/firestore'; // Import Firestore components

function AddStudentForm() {
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


  return (
    <div className="w-[300px] h-[flex] mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
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


        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 self-start mb-4"
        >
          confirm
        </button>
      </form>

      {isStudentExists && (
        <p className="text-red-500 mt-4">
          This student already exists in the database.
        </p>
      )}
    </div>
  );
}

export default AddStudentForm;