 <template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Excluir </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Tem certeza que deseja excluir?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('closeModal')"> Não </v-btn>
          <v-btn color="primary" text @click="handleDelete()"> Sim </v-btn>
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
    handleDelete() {
      this.$store.commit("deleteTask", this.id);
      this.$emit("closeModal");
      setTimeout(() => window.location.reload(), 1000);
    },
  },
});
</script>
 
 <style>
</style>