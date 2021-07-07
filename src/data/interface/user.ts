

export default interface User extends signup {

}

export type newUser = {
  displayName: string,
  email: string,
  password: string,
  phoneNumber: string
}

interface signup {
  signupWithEmailAndPassword (user: newUser): any,
  login(email: string, password: string): any,
  logout(): void,
  currentUser():any
}