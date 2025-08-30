import { createRouter, createWebHistory } from 'vue-router'


// import the pages component//
import Dashboard from '../components/Pages/Dashboard.vue'
import TaskPage from '../components/Pages/TaskPage.vue'
import EditTaskPage from '../components/Pages/EditTaskPage.vue'
import AddTaskPage from '../components/Pages/AddTaskPage.vue'
import ErrorPage from '../components/Pages/ErrorPage.vue'
// import the pages component//

//routes for the pages
const routes =   [
  {path:'',component:Dashboard},
  {path:'/task',component:TaskPage},
  {path:'/task/add', component:AddTaskPage},
  {path:'/task/edit:id',component:EditTaskPage},
  {path:'/:pathMatch(.*)*',component:ErrorPage}

]
export default createRouter({
  history: createWebHistory(),
  routes
})
