<template>
  <div>
    <v-col cols="12">
      <v-text-field
        class="mt-4"
        v-model="inputField"
        label="Insira suas tarefa:"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(task, index) in $store.state.tasks" :key="index">
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
  }),
  created() {
    this.$store.commit("getTasks");
  },
  methods: {
    handleAddTask() {
      if (this.inputField) {
        this.$store.commit("addTask", this.inputField);
        this.inputField = null;
      }
    },
  },
});
</script>