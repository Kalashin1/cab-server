import { db, auth } from '../../firebase-settings';
import user, { newUser } from '../interface/user'
/**
 * @class User encapsulates all attributes and functionality of a user
 */
export default class User implements user{
   /**
    * This function actually signs in the user
    * @function signupWithEmailAndPassword expects a an Object which is the user
   * @param newUser should be an object with an email, password, displayName and phoneNumber
   * @returns returns the newly created user
   */
  async signupWithEmailAndPassword({ email, password, displayName, phoneNumber }: newUser) {
    //  * Create the user with google auth
    const userCred = await auth.createUserWithEmailAndPassword(email, password)
    // * Get the user id 
    const { uid } = userCred.user
    // * Create a firestor document based on the newly created user
    await db.collection('users').doc(uid).set({
      name: displayName,
      email,
      phoneNumber
    })
    // * create an object that excludes the password
    const user = { name: displayName, email, phoneNumber, uid }
    // * return that object as the new user
    return user;
  }
  /**
   * @function login allows a user to login
   * @param email the email of the user we want to login
   * @param password the password of the user
   * @returns the logged in user
   */
  async login(email: string, password: string) {
    // * Login the user with firebase auth
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    // * Retrieve the users uid
    const { uid } = user;
    // * Get a document from firebase that has an id equal to the uid
    const docRef = await db.collection('users').doc(uid).get()
    // * Retrieve the user info
    const loggedInUser = docRef.data();
    // * Append the uid to the object we are returning;
    loggedInUser.uid = uid;
    // * Return the logged in user
    return loggedInUser;
  }
  /**
   * @function logout This function signs the user out
   */
  async logout() {
    await auth.signOut()
  }

  async currentUser() {
    const user = auth.currentUser;
    if (user !== null) {
      const { uid } = user

      const docRef = await db.collection('users').doc(uid).get();

      let currentUser = docRef.data();

      currentUser.uid = uid

      return currentUser
    } else {
      return null;
    } 
  }
}
