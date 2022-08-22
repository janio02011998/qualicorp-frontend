<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app height="100%">
      <v-img
        src="https://www.corretoracedro.com.br/blog/wp-content/uploads/2019/09/qualicorp-plano-de-saude.png"
      >
        <v-list-item>
          <v-list-item-avatar size="60">
            <v-img src="https://github.com/janio02011998.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Janio Carvalho</v-list-item-title>
            <v-list-item-subtitle>FullStack Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>
      <v-divider></v-divider>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <Carousel></Carousel>
    </v-navigation-drawer>

    <v-app-bar
      height="145"
      app
      color="#fcb69f"
      dark
      src="https://www.corretoracedro.com.br/blog/wp-content/uploads/2019/09/qualicorp-plano-de-saude.png"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Carousel from "@/components/Carousel.vue";

export default {
  metaInfo: {
    title: "Qualicorp - Task Manager",
  },
  components: { Carousel },
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", route: "/" },
      { title: "Desempenho", icon: "mdi-help-box", route: "/performance" },
      { title: "Sobre", icon: "mdi-image", route: "/about" },
    ],
  }),
};
</script>
