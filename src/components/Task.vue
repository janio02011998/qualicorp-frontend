<template>
  <div>
    <v-card elevation="2" tile>
      <v-list-item
        :class="{ 'blue lighten-4': task.completed }"
        @click="handleToSave(task)"
      >
        <template v-slot:default="{}">
          <v-list-item-action>
            <v-checkbox :input-value="task.completed"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content
            :class="{ 'text-decoration-line-through': task.completed }"
          >
            <v-list-item-title>{{ task.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <TaskMenu :task="task" />
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script lang="ts">
import TaskMenu from "@/components/TaskMenu.vue";
import { ITasks } from "@/interfaces/Tasks";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TaskMenu },
  data: () => ({}),
  props: ["task"],
  methods: {
    handleToSave(task: ITasks) {
      const newTask = {
        title: task.title,
        id: task.id,
        completed: !this.task.completed,
      };

      this.$store.commit("editTask", newTask);
      this.$emit("closeModal");
      setTimeout(() => window.location.reload(), 1000);
    },
    handleRemoveTask(id: number) {
      this.$store.commit("deleteTask", id);
    },
  },
});
</script>

<style>
</style>