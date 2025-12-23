import request from "../utils/request";

export interface LoginData
{
    nickname: string,
    password: string,
}

export function login(data:LoginData)
{
    return request.post("/Auth/login", data)
}