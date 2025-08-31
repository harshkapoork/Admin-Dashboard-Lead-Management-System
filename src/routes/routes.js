import { createRouter, createWebHistory } from 'vue-router'


// import the pages component//
import Home from '../components/layouts/Home.vue'
import TaskPage from '../components/layouts/TaskList.vue'
import EditTaskPage from '../components/layouts/EditTask.vue'
import AddTaskPage from '../components/layouts/AddTask.vue'
import ErrorPage from '../components/Pages/ErrorPage.vue'
// import the pages component//

//routes for the pages
const routes =   [
  {path:'',component:Home},
  {path:'/task',component:TaskPage},
  {path:'/task/add', component:AddTaskPage},
  {path:'/task/edit:id',component:EditTaskPage},
  {path:'/:pathMatch(.*)*',component:ErrorPage}

]
export default createRouter({
  history: createWebHistory(),
  routes
})
