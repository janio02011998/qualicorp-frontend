import { http } from '@/config/http';
import { RootState } from '@/interfaces/Store';
import { ITasks } from '@/interfaces/Tasks';


export default {
  async getTasks(state: RootState) {
     const { data } = await http.get('/tasks/');
     state.tasks = data;
  }, 
  async addTask(state: RootState, title: string) {
     const payload = {
      id: new Date().getTime(),
      title,
      completed: false,
     } 

     await http.post('/tasks/', payload);
   },
   async deleteTask(state: RootState, id: number) {    
     await http.delete(`/tasks/${id}`);

   },
   async editTask(state: RootState, task: ITasks) {
     await http.patch(`/tasks/${task.id}`, task);
   }
 }