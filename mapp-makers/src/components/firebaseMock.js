// firebaseMock.js

export const initializeApp = jest.fn((firebaseConfig) => {
  return {
    options: {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId,
      appId: firebaseConfig.appId,
      measurementId: firebaseConfig.measurementId,
    },
    // You can add other properties or methods based on your app's Firebase usage
    // For example, if your app uses Firestore or Auth, you can mock those functions/methods here.
  };
});

export const mockFirestore = {
  collection: jest.fn(() => mockFirestore),
  doc: jest.fn(() => mockFirestore),
  get: jest.fn(() => Promise.resolve({ data: () => ({ /* mock data */ }) })),
  // Add more methods as needed and define their return values for testing purposes
};

export const getAuth = jest.fn(() => {
  // Simulate Auth functionalities if needed for testing
  return {
    // You can mock Auth methods or functionalities used in your app
  };
});


export const firestore = mockFirestore;