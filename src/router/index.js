import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Blog from "@/pages/Blog.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import Project from "@/pages/Project.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/Blog",
        component: Blog
    },
    {
        path: "/BlogDetails",
        component: BlogDetails
    },
    {
        path: "/Project",
        component: Project
    },
    {
        path: "/ProjectDetails",
        component: ProjectDetails
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        return {
            top: 0
        }
    }
})

export default router