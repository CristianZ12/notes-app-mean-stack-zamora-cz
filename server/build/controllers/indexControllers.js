"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(req, resp) {
        resp.send('Hello');
    }
}
exports.indexControllers = new IndexControllers();
