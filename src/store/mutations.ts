import { http } from '@/config/http';
import { RootState } from '@/interfaces/Store';
import { ITasks } from '@/interfaces/Tasks';


export default {
  async getTasks(state: RootState) {
     const { data } = await http.get('/tasks/');
     state.tasks = data;
  }, 
  addTask(state: RootState, title: string) {
     if (title) {
       state.tasks.push({
         id: new Date().getTime(),
         title,
         completed: false,
       });
     }
   },
   deleteTask(state: RootState, id: number) {
     state.tasks = state.tasks.filter(task => task.id !== id)
   },
   editTask(state: RootState, task: ITasks) {
     let oldTask= state.tasks.filter(item => item.id === task.id)[0]
     oldTask.title = task.title;
   }
 }