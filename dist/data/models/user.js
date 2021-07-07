"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_settings_1 = require("../../firebase-settings");
/**
 * @class User encapsulates all attributes and functionality of a user
 */
class User {
    /**
     * This function actually signs in the user
     * @function signupWithEmailAndPassword expects a an Object which is the user
    * @param newUser should be an object with an email, password, displayName and phoneNumber
    * @returns returns the newly created user
    */
    signupWithEmailAndPassword({ email, password, displayName, phoneNumber }) {
        return __awaiter(this, void 0, void 0, function* () {
            //  * Create the user with google auth
            const userCred = yield firebase_settings_1.auth.createUserWithEmailAndPassword(email, password);
            // * Get the user id 
            const { uid } = userCred.user;
            // * Create a firestor document based on the newly created user
            yield firebase_settings_1.db.collection('users').doc(uid).set({
                name: displayName,
                email,
                phoneNumber
            });
            // * create an object that excludes the password
            const user = { name: displayName, email, phoneNumber, uid };
            // * return that object as the new user
            return user;
        });
    }
    /**
     * @function login allows a user to login
     * @param email the email of the user we want to login
     * @param password the password of the user
     * @returns the logged in user
     */
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // * Login the user with firebase auth
            const { user } = yield firebase_settings_1.auth.signInWithEmailAndPassword(email, password);
            // * Retrieve the users uid
            const { uid } = user;
            // * Get a document from firebase that has an id equal to the uid
            const docRef = yield firebase_settings_1.db.collection('users').doc(uid).get();
            // * Retrieve the user info
            const loggedInUser = docRef.data();
            // * Append the uid to the object we are returning;
            loggedInUser.uid = uid;
            // * Return the logged in user
            return loggedInUser;
        });
    }
    /**
     * @function logout This function signs the user out
     */
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield firebase_settings_1.auth.signOut();
        });
    }
    currentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = firebase_settings_1.auth.currentUser;
            if (user !== null) {
                const { uid } = user;
                const docRef = yield firebase_settings_1.db.collection('users').doc(uid).get();
                let currentUser = docRef.data();
                currentUser.uid = uid;
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map