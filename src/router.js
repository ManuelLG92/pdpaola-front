import { createWebHistory, createRouter } from "vue-router";
import Main from './components/Main.vue'
import Transactions from "@/components/Transactions";
import Product from "@/components/Product";
import Products from "@/components/Products";

const routes = [
    {
        path:  "/:catchAll(.*)",
        redirect: '/'
    },
    {
        path: "/",
        name: "main",
        component: Main,
    },
    {
        path: "/products",
        name: "products",
        component: Products,
        props: true
    },
    {
        path: "/products/:id",
        name: "products-id",
        component: Product,
        props: true
    },
    {
        path: "/transactions",
        name: "transactions",
        component: Transactions,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
