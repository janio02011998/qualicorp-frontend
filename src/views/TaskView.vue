<template>
  <div>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="inputField"
        label="Tarefa diária:"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(task, index) in tasks" :key="index">
          <Task :task="task" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import Task from "@/components/Task.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tarefas",
  components: {
    Task,
  },
  data: () => ({
    inputField: null,
    tasks: [
      { title: "Ir ao mercado", completed: false },
      { title: "Fazer lanche", completed: false },
      { title: "Malhar", completed: false },
      { title: "Buscar filha", completed: false },
      { title: "Ir ao jogo", completed: false },
    ],
  }),
  methods:  {
    handleAddTask() {
      if(this.inputField) {
        this.tasks.push({
          title: this.inputField,
          completed: false,
        })
        this.inputField = null;
      }
    }
  }
});
</script>