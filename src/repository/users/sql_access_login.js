"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACCESS_LOGIN = void 0;
exports.SQL_ACCESS_LOGIN = {
    VALIDATELOGIN: "SELECT id_user,full_name,email_user,state_user\
    FROM users \
    WHERE email_user = $1 \
    AND password_user = MD5($2)"
};
