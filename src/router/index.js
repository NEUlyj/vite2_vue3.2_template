import {createRouter,createWebHistory} from "vue-router";

export const routes=[
    {
        path:'/',
        hidden:true,
        redirect:{name:'home'}
    },
    {
        path: '/login',
        name:'login',
        hidden:true,
        component:()=>import('@/components/Login/index.vue'),
    },
    {
        path: '/Layout',
        name:'home',
        hidden:false,
        component:()=>import('@/components/LayOut/index.vue'),
        redirect: '/Layout/nav',
        meta:{title:'无二级分类页',icon:'Menu',child:false},
        children:[
            {
                path:'nav',
                name:'nav',
                component:()=>import('@/views/Nav/index.vue')
            }
        ]
    },
    {
        path: '/item',
        name:'item',
        hidden:false,
        component:()=>import('@/components/LayOut/index.vue'),
        redirect: '/item/item1',
        meta:{title:'有二级分类页',icon:'SetUp',child:true},
        children: [
            {
                path: 'item1',
                name: 'item1',
                component:()=>import('@/views/Item1/index.vue'),
                meta:{title:'二级分类子页1'},
            },
            {
                path: 'item2',
                name: 'item2',
                component:()=>import('@/views/Item2/index.vue'),
                meta:{title:'二级分类子页2'},
            }
        ]
    }
];
const Router=()=> createRouter({
    history:createWebHistory(),
    routes
})
const router = Router()
export function resetRouter() {
    const newRouter = Router()
    router.matcher = newRouter.matcher
}
export default router
