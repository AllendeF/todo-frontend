import Vue from 'vue';
import Router from 'vue-router';
import Task from '../src/components/Task';


Vue.use(Router)

export default new Router({
    mode: 'history', 
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', //El path tiene que ser con minuscula
            name: 'Task',

            component: Task,
        },
    ],
});