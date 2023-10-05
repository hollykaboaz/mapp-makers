import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase"; // Import the Firebase auth instance

export const AuthContext = createContext(); // Export the AuthContext

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe; // Cleanup function
  }, []);

  const value = {
    currentUser,
    // Add more authentication-related functions here (e.g., signIn, signUp, signOut)
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}