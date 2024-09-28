import { createRouter, createWebHashHistory } from "vue-router";
import { useCounterStore } from './stores/counter';
import Main from "./pages/Main.vue";
import AuthPage from "./pages/AuthPage.vue";
import MainPage from "./pages/MainPage.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/main',
            component: MainPage
        },
        {
            path: '/auth',
            component: AuthPage
        },
        {
            path: '/',
            redirect: '/main'
        }
    ]
});

router.beforeEach((to, from, next) => {
    const store = useCounterStore();

    if (!store.jwt && to.path === '/some-protected-page') {
        next('/auth');
    } else {
        next();
    }
});

export default router;
