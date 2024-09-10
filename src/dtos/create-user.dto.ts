import { Request } from "express";

export interface CreateUserDto extends Request<{
    id: string;
}, {}, {
    username: string;
    email: string;
    password: string;
}, {
    loginAfterCreate?: boolean;
}> { }