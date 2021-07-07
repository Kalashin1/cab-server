"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require('../hermes-2cb56-firebase-adminsdk-znz90-b0050b1e15.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount)
});
const db = firebase_admin_1.default.firestore();
exports.db = db;
const auth = firebase_admin_1.default.auth();
exports.auth = auth;
//# sourceMappingURL=admin-settings.js.map