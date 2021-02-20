"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRouter_1 = __importDefault(require("../routes/indexRouter"));
const gamesRouter_1 = __importDefault(require("../routes/gamesRouter"));
exports.default = (app) => {
    class Server {
        constructor() {
            this.app = app;
            this.config();
            this.middlewares();
            this.routes();
        }
        config() {
            this.app.set('Port', process.env.PORT || 3500);
        }
        middlewares() {
            this.app.use(morgan_1.default('dev'));
            this.app.use(cors_1.default());
            this.app.use(express_1.default.json());
            this.app.use(express_1.urlencoded({ extended: false }));
        }
        routes() {
            this.app.use(indexRouter_1.default);
            this.app.use('/api/games', gamesRouter_1.default);
        }
    }
    new Server();
    return app;
};
