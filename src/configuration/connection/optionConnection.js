"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const funtionConnection_1 = require("./funtionConnection");
//        receive?( data: any[], result: IResultExt | void, ctx: IEventContext<C> ): void
exports.opcionesPG = {
    receive(data, result, e) {
        (0, funtionConnection_1.camelizeColumns)(data);
    }
};
