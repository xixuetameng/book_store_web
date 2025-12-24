import request from "../utils/request";

export interface BookInfo
{
    id:number;
    isbn:string;
    name:string;
    publisher:string;
    author:string;
    price:number;
    keyword:string|null;
    category:string|null;
    supplier:string|null;
    cover:string|null;
}
export enum QueryType
{
    Name,
    Isbn,
    Publisher,
    Author,
    Keyword,
}
export interface QueryRequest
{
    context:string;
    queryType:QueryType;
}

export interface QueryResponse
{
    success: boolean
    message: string
    data: {
        books: BookInfo[]
    }
}

export const queryBooks=async(params:QueryRequest)=>
{
    return  await request.post('/book/query',params);
}