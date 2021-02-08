import { UserRecord } from "firebase-functions/lib/providers/auth";

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

const createProfile = (userRecord: UserRecord, context: any) => {
  const { email, phoneNumber, uid } = userRecord;

  return db
    .collection("Users")
    .doc(uid)
    .set({ email, phoneNumber })
    .catch(console.error);
};

module.exports = {
  createProfile,
};
