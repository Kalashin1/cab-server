
/**
 * @interface User placeholder interface, extends other smaller interfaces
 * @extends auth this is the authentication interface
 * @extends LoggedInUser This is the interface for a loggedInUser
 */
export default interface User extends auth, LoggedInUser {

}
/**
 * @typedef newUser Placeholder for object used to signup a user
 */
export type newUser = {
  displayName: string,
  email: string,
  password: string,
  phoneNumber: string
}
/**
 * @typedef gender ensures that gender can only be 'male' or 'female'
 */
export type gender = 'male' | 'female'
/**
 * @typedef role ensures that the role can only be 'admin' or 'user'
 */
export type role = 'admin' | 'user'
/**
 * @typedef user is the type definition for what a real user who is currently loggedIn
 */
export type user <Role extends role> = {
  name?: string,
  uid?: string,
  username: string,
  email?: string,
  phoneNumber?: string,
  available_for?: string,
  age: number,
  dob: string | Date,
  preferred_gender?: gender,
  gender: gender,
  interests?: string[],
  role: Role
}
/**
 * @interface auth Is responsible for authentication service.
 */
export interface auth {
  /**
   * @function signupWithEmailAndPassword creates a new user
   * @param user is of type user 
   * @returns a loggedInUser
   */
  signupWithEmailAndPassword(user: newUser): any,
  /**
   * @function login logs a user in
   * @param email the users email
   * @param password the users password
   * @returns a loggedInUser
   */
  login(email: string, password: string): any,
  /**
   * @function logout destroys the user's session
   */
  logout(): void,
  /**
   * @function currentUser fetches and returns the current user
   * @returns LoggedInUser
   */
  currentUser():any
}

/**
 * @interface LoggedInUser the loggedInUser contract
 * @extends editProfile
 */
export interface LoggedInUser extends editProfile {
  
}

/**
 * @interface editProfile allows a user to edit their profile
 */
export interface editProfile {
  /**
   * @function editProfile edits the user profile
   * @param obj must be of type user with a role 
   * @param userId is the id of the user whose profile we want to edit
   * @returns the edit profile of the user
   */
  editProfile(obj: user<role>, userId: string):any
}