<template>
  <div class="pa-3">
    <h1>Sobre</h1>
    <p>
      Sistema de gerenciamento de tarefas do time de TI da Qualicorp, conheça um
      pouco mais da empresa no vídeo abaixo. Faça parte do time :D
    </p>
    <center>
      <iframe
        min-width="100%"
        max-height="315"
        style="border-radius: 10px"
        src="https://www.youtube.com/embed/EE0s8I56FxY"
        title="Playlist do YouTube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
    <hr />
    <p>Ferramentas utilizadas:</p>
    <v-list>
      <template v-for="item in tacnologias">
        <v-list-item :key="item.titulo">
          <v-list-item-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.titulo"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <hr />
    <section>
      <p>
        <v-card-title>Obrigado por prestigiar o projeto!!!</v-card-title>
        <v-card-subtitle>Contato:</v-card-subtitle>
        <v-card-text>
          <strong>📨E-mail:</strong> janiocarvalhojr@gmail.com<br />
          <strong>🧑‍💻 Jânio Carvalho</strong><br />
          <img src="../assets/octocat.png" height="20px" alt="imagem octocat" />
          <a href="https://github.com/yurimarcon">/janio02011998</a>
        </v-card-text>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tacnologias: [
        {
          titulo: "HTML",
          icon: "mdi-language-html5",
        },
        {
          titulo: "Vue.js",
          icon: "mdi-vuejs",
        },
        {
          titulo: "Vuetify",
          icon: "mdi-vuetify",
        },
        {
          titulo: "VUEX",
          icon: "mdi-vuejs",
        },
        {
          titulo: "VueRouter",
          icon: "mdi-vuejs",
        },
        {
          titulo: "Localbase DB",
          icon: "mdi-database",
        },
        {
          titulo: "Animate.css",
          icon: "mdi-transition",
        },
        {
          titulo: "Drag and Drop",
          icon: "mdi-drag-variant",
        },
        {
          titulo: "Git",
          icon: "mdi-git",
        },
        {
          titulo: "GitHub",
          icon: "mdi-github",
        },
        {
          titulo: "Netlify",
          icon: "mdi-web",
        },
      ],
    };
  },
};
</script>