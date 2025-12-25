import request from "../utils/request";

export interface MissingBookRecord
{
    bookId:number;
    count:number;
    updateTime:string;
}
export const getMissingBookRecord = async ():Promise<MissingBookRecord[]> =>
{
    try {
        const response = await request.get<MissingBookRecord[]>('/StockRecord')
        return response.data
    } catch (error) {
        console.error('获取缺书记录失败', error)
        throw error
    }
}
