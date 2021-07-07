"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebase = exports.auth = exports.db = void 0;
const app_1 = __importDefault(require("firebase/app"));
exports.firebase = app_1.default;
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyDqrQKtd9G70ZMjTRn6xLVHEwMo8_PWYCE",
    authDomain: "hermes-2cb56.firebaseapp.com",
    projectId: "hermes-2cb56",
    storageBucket: "hermes-2cb56.appspot.com",
    messagingSenderId: "157797851869",
    appId: "1:157797851869:web:28a39cb3ea083513e53134",
    measurementId: "G-9JDZQHTL8F"
};
app_1.default.initializeApp(firebaseConfig);
const db = app_1.default.firestore();
exports.db = db;
const auth = app_1.default.auth();
exports.auth = auth;
//# sourceMappingURL=firebase-settings.js.map