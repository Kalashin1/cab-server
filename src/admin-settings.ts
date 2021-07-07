import admin from 'firebase-admin';

const serviceAccount = require('../hermes-2cb56-firebase-adminsdk-znz90-b0050b1e15.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }