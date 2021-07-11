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
exports.deletePost = exports.editPost = exports.createPost = exports.editProfile = void 0;
const user_1 = __importDefault(require("../data/models/user"));
exports.editProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const userParam = req.body;
    // console.log(userParam, uid)
    try {
        let user = new user_1.default();
        let _user = yield user.editProfile(userParam, uid);
        res.json(_user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    // console.log(post)
    try {
        let user = new user_1.default();
        const _post = yield user.makePost(post);
        res.json(_post);
    }
    catch (error) {
        console.log(error);
    }
});
exports.editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    try {
        let user = new user_1.default();
        const _post = yield user.editPost(post);
        res.json(_post);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    try {
        let user = new user_1.default();
        yield user.deletePost(post);
        res.json({ message: 'succesful' });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=user.js.map