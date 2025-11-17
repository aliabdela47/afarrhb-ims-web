// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * Firebase config loaded from Vite env variables.
 * Copy .env.example -> .env.local for local dev (do not commit .env.local).
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Optional: warn in dev when config is incomplete
if (
  import.meta.env.DEV &&
  (!firebaseConfig.apiKey ||
    !firebaseConfig.projectId ||
    !firebaseConfig.appId)
) {
  // eslint-disable-next-line no-console
  console.warn(
    "Firebase config appears incomplete. Make sure .env.local is set from .env.example and not committed."
  );
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;
