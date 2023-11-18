// StudentForm.js
import React, { useState } from 'react';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore'; // Import Firestore components

function AddStudentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isStudentExists, setIsStudentExists] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Initialize Firestore
      const db = getFirestore();

      // Check if the student already exists in Firestore based on email
      const studentsRef = collection(db, 'students');
      const querySnapshot = await getDocs(query(studentsRef, where('email', '==', formData.email)));

      if (querySnapshot.empty) {
        // Student does not exist, so we can add them
        const docRef = await addDoc(collection(db, 'students'), formData);
        alert('Student information added successfully with ID: ' + docRef.id);
      } else {
        setIsStudentExists(true);
      }

      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } catch (error) {
      console.error('Error adding student information: ', error);
      alert('An error occurred while adding student information. Please try again.');
    }
  };

  return (
    <div className="w-[300px] h-[300px] mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
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