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
            <v-btn icon @click.stop="handleRemoveTask(task.id)">
              <v-icon color="red lighten-1">mdi-trash-can</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            <v-icon color="grey lighten-1">mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: "Tarefa removida.",
    timeout: 2000,
  }),
  props: ["task"],
  methods: {
    handleRemoveTask(id) {
      this.snackbar = true;
      this.$store.commit("deleteTask", id);
    },
  },
};
</script>

<style>
</style>