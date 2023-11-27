import React, { useState } from 'react';
import { 
  getFirestore,  // Importing Firestore functionalities
  collection,    // For creating a collection reference
  addDoc,        // For adding documents to Firestore
  query,         // For querying Firestore
  where,         // For specifying conditions in Firestore queries
  getDocs        // For getting documents from Firestore
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function AddCourseForm() {
  // State variables to manage form data and course existence status
  const [formData, setFormData] = useState({
    title: '',
    section: '',
  });
  const [isCourseExists, setIsCourseExists] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore(); // Accessing Firestore instance

      const testUserId = 'testUser'; // Hardcoded testUser ID
      const coursesRef = collection(db, 'Users', testUserId, 'Courses'); // Reference to the 'Courses' collection

      // Query Firestore to check if the course already exists based on section
      const querySnapshot = await getDocs(query(coursesRef, where('section', '==', formData.section)));

      if (querySnapshot.empty) {
        // Course does not exist, so add it to Firestore
        const docRef = await addDoc(coursesRef, formData);
        alert('Course information added successfully with ID: ' + docRef.id);
      } else {
        // Set flag if the course already exists
        setIsCourseExists(true);
      }

      // Clear the form data after submission
      setFormData({
        title: '',
        section: '',
      });
    } catch (error) {
      console.error('Error adding course information: ', error);
      alert('An error occurred while adding course information. Please try again.');
    }
  };

  // JSX structure of the form component
  return (
    <div className="w-[300px] h-[300px] mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Section</label>
          <input
            type="text"
            name="section"
            value={formData.section}
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

      {/* Display error message if course already exists */}
      {isCourseExists && (
        <p className="text-red-500 mt-4">
          This course already exists in the database.
        </p>
      )}
    </div>
  );
}

export default AddCourseForm;
