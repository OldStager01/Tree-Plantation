import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT,
  firebaseServiceAccountKey: JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ),
  databaseURL: process.env.DATABASE_URL,
  // firestoreUsersCollection: "users",
  firestoreUsersCollection: process.env.FIREBASE_USER_COLLECTION_NAME,
  firestoreNGOCollection: process.env.FIREBASE_NGO_COLLECTION_NAME,
  firestorePlacesCollection: process.env.FIREBASE_PLACES_COLLECTION_NAME,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  geminiAPIKey: process.env.GEMINI_API_KEY,
};

export default config;
