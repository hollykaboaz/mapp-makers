import { db } from '../firebase/firebase'; 
import { getDoc, doc } from 'firebase/firestore';

// Utility function to get user data from Firestore
export const getFirestoreUserData = async (userId) => {
  try {
    const userDocRef = doc(db, 'Users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists) {
      return userDoc.data();
    } else {
      console.log('User document not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};
