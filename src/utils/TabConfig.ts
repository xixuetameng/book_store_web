import CustomerRevise from "../components/CustomerRevise.vue";
import OrderQuery from "../components/OrderQuery.vue";
import BookOrder from "../components/BookOrder.vue";
import BookQuery from "../components/BookQuery.vue";

export interface TabConfigItem
{
    label: string;
    name: string;
    component: any;
}
export const tabConfig: TabConfigItem[] =
[
    {
        label:"用户信息修改",
        name:"CustomerRevise",
        component:CustomerRevise
    },
    {
        label:"订购记录",
        name:"OrderQuery",
        component:OrderQuery
    },
    {
        label:"书籍订购",
        name:"BookOrder",
        component:BookOrder
    },
    {
        label:"书籍查询",
        name:"BookQuery",
        component:BookQuery
    }
]