<template>
  <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
       <Task />
       <Task />
      </v-list-item-group>
</template>

<script lang="ts">
import Task from "@/components/Task.vue";   
   
  export default {
    name: "Tarefas",
    components: {
      Task
    }
  }
</script>