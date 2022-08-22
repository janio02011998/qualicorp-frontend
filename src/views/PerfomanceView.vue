<template>
  <div>
    <v-list subheader three-line height="100%">
      <v-subheader>Desempenho</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle
            >Avaliação a cerca da abertura e conclusão de tarefas durante o
            período do projeto.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <center>
      <PieChart />
    </center>
  </div>
</template>

<script lang="ts">
import PieChart from "@/components/PieChart.vue";

export default {
  name: "App",
  components: {
    PieChart,
  },
};
</script>