<template>
  <div>
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
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
</style>