// AddCourseForm.js
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, query, where, getDocs, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



function AddCourseForm() {
  const [formData, setFormData] = useState({
    courseName: '',
    courseNumber: '',
  });

  const [isCourseExists, setIsCourseExists] = useState(false);

  useEffect(() => {
    // Set up an authentication state observer
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, you can use user.uid as the user ID
        // Set the user ID in state or perform other actions
        // Example: setUserId(user.uid);
      } else {
        // No user is signed in, handle accordingly
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []); // Run this effect once when the component mounts






  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        // User is signed in, you can use user.uid as the user ID
        const userId = user.uid;

        // Check if the course already exists in Firestore based on courseNumber
        const userRef = doc(getFirestore(), 'Users', userId);
        const coursesRef = collection(userRef, 'courses');
        const querySnapshot = await getDocs(query(coursesRef, where('courseNumber', '==', formData.courseNumber)));

        if (querySnapshot.empty) {
          // Course does not exist, so we can add it
          const docRef = await addDoc(coursesRef, formData);
          alert('Course information added successfully with ID: ' + docRef.id);
        } else {
          setIsCourseExists(true);
        }


      // Clear the form
      setFormData({
        courseName: '',
        courseNumber: '',
      });
    } else {
      // No user is signed in, handle accordingly
      // You may want to redirect to a login page or display an error message
      console.error('No user is signed in.');
    }




    } catch (error) {
      console.error('Error adding course information: ', error);
      alert('An error occurred while adding course information. Please try again.');
    }
  };

  return (
    <div className="w-[300px] h-[300px] mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4">Add Course</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Name</label>
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Number</label>
        <input
          type="text"
          name="courseNumber"
          value={formData.courseNumber}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 self-start mb-4"
      >
        Confirm
      </button>
    </form>

    {isCourseExists && (
      <p className="text-red-500 mt-4">
        This course already exists in the database.
      </p>
    )}
  </div>
);
}

export default AddCourseForm;