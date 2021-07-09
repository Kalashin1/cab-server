"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.get('/', (_req, res) => {
    res.status(200).json({ message: 'success' });
});
router.post('/signup', auth_1.singupWithEmailAndPassword);
router.post('/login', auth_1.login);
router.get('/logout', auth_1.logout);
router.get('/current-user', auth_1.currentUser);
router.post('/edit-profile/:uid', auth_1.isUserOnline, user_1.editProfile);
exports.default = router;
//# sourceMappingURL=router.js.map