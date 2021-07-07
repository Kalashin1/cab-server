"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./Router/router"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(router_1.default);
app.listen(process.env.PORT, () => console.log(`App is running on ${process.env.PORT}. Visit http://localhost:${process.env.PORT}`));
//# sourceMappingURL=app.js.map