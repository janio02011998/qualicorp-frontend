 <template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe Descrição da tarefa.</v-card-text>
        <v-text-field
          v-model="title"
          label="Descrição"
          outlined
          class="px-3"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('closeModal')">
            Cancelar
          </v-btn>
          <v-btn color="primary" text @click="handleToSave()"> Salvar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["task"],
  data() {
    return {
      title: null,
      id: null,
      dialog: true,
    };
  },
  created() {
    this.title = this.task.title;
    this.id = this.task.id;
  },
  methods: {
    handleToSave() {
      const newTask = {
        title: this.title,
        id: this.task.id,
        completed: this.task.completed,
      };

      this.$store.commit("editTask", newTask);
      this.$emit("closeModal");
    },
  },
});
</script>
 
 <style>
</style>