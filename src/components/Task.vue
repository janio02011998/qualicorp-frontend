<template>
  <div>
    <v-card elevation="2" tile>
      <v-list-item
        :class="{ 'blue lighten-4': task.completed }"
        @click="task.completed = !task.completed"
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
import { defineComponent } from "vue";

export default defineComponent({
  components: { TaskMenu },
  data: () => ({}),
  props: ["task"],
  methods: {
    handleRemoveTask(id: number) {
      this.$store.commit("deleteTask", id);
    },
  },
});
</script>

<style>
</style>