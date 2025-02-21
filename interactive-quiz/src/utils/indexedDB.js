import { openDB } from "idb";

const DB_NAME = "QuizDB";
const DB_VERSION = 1;
const STORE_NAME = "quiz_attempts";

export const initDB = async () => {
  try {
    const db = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        }
      },
    });
    return db;
  } catch (error) {
    console.error("Error initializing IndexedDB:", error);
  }
};

export const saveQuizAttempt = async (attempt) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  await store.add(attempt);
  await tx.done;
};

export const getQuizAttempts = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  return await store.getAll();
};
