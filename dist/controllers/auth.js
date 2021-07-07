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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = exports.logout = exports.login = exports.singupWithEmailAndPassword = void 0;
const user_1 = __importDefault(require("../data/models/user"));
exports.singupWithEmailAndPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, displayName, phoneNumber } = req.body;
    try {
        const user = new user_1.default();
        const newUser = yield user.signupWithEmailAndPassword({ email, password, displayName, phoneNumber });
        res.json(newUser);
    }
    catch (err) {
        console.log(err);
    }
});
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = new user_1.default();
        const loggedInUser = yield user.login(email, password);
        res.json(loggedInUser);
    }
    catch (error) {
        console.log(error);
    }
});
exports.logout = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default();
        yield user.logout();
        res.json({ message: 'Logout successful' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.currentUser = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default();
    const loggedInUser = yield user.currentUser();
    if (loggedInUser) {
        res.json(loggedInUser);
    }
    else {
        res.status(400).json({ message: 'User is Not logged in' });
    }
});
//# sourceMappingURL=auth.js.map