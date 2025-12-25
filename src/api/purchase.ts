import request from "../utils/request";

export interface PurchaseDetail
{
    purchaseId:number,
    bookId:number,
    supplierId:number,
    count:number,
}
export interface PurchaseOrder
{
    id:number,
    arrived:number,
    createTime:number,
    details:PurchaseDetail[],
}
export interface PurchaseOrderResponse
{
    success:boolean,
    message:string,
    data:{
        datas:PurchaseOrder[],
    },
}
export interface UpdatePurchaseRequest
{
    id:number,
    arrived:number,
}
export interface UpdatePurchaseResponse
{
    success:boolean,
    message:string,
}
export const getPurchaseOrders=async ():Promise<PurchaseOrderResponse>=>
{
    try
    {
        const response=await request.get<PurchaseOrderResponse>("Purchase/query");
        return response.data;
    }
    catch(e)
    {
        console.error(e);
        throw e;
    }
}
export const updatePurchase=async (data:UpdatePurchaseRequest):Promise<UpdatePurchaseResponse>=>
{
    try
    {
        const response=await request.post<PurchaseOrderResponse>("Purchase/update", data);
        return response.data;
    }
    catch(e)
    {
        console.error(e);
        throw e;
    }
}