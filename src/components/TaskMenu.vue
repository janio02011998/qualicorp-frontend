<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon dark v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEdit
      v-if="items[0].modal"
      @closeModal="items[0].modal = false"
      :task="task"
    />
    <ModalDelete
      v-if="items[1].modal"
      @closeModal="items[1].modal = false"
      :task="task"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalEdit from "./ModalEdit.vue";
import ModalDelete from "./ModalDelete.vue";

export default defineComponent({
  props: ["task"],
  data: () => ({
    items: [
      {
        icon: "mdi-pencil",
        title: "Editar",
        modal: false,
        click() {
          this.modal = true;
        },
      },
      {
        icon: "mdi-trash-can",
        title: "Excluir",
        modal: false,
        click() {
          this.modal = true;
        },
      },
    ],
  }),
  components: { ModalEdit, ModalDelete },
});
</script>

<style scoped>
#SelectedTile {
  background: #fff;
}
</style>