import { createRouter, createWebHashHistory } from "vue-router";
import { useCounterStore } from './stores/counter';
import Main from "./pages/Main.vue";
import AuthPage from "./pages/AuthPage.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/auth',
            component: AuthPage
        }
    ]
});

router.beforeEach((to, from, next) => {
    const store = useCounterStore();

    if (!store.jwt && to.path !== '/auth') {
        next('/auth');
    } else {
        next();
    }
});

export default router;
