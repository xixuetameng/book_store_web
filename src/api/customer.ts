import request from "../utils/request";

export interface Customer
{
    id: number;
    nickName: string;
    password: string;
    balance: number;
    credit: number;
    address: string|null;
    name: string;
    email: string|null;
    phone: string|null;
}

export const getAllCustomers=async ()=>
{
    return await request.get('Customer');
}

export const UpdateCustomer=async (data:Customer)=>
{
    return await request.post('Customer/update', data);
}