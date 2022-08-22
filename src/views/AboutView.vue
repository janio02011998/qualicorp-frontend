<template>
  <div class="pa-3">
    <h1>Sobre</h1>
    <p>
      Sistema de gerenciamento de tarefas do time de TI da Qualicorp, conheça um
      pouco mais da empresa no vídeo abaixo. Faça parte do time :D
    </p>
    <center>
      <iframe
        min-width="300"
        max-height="315"
        style="border-radius: 10px"
        src="https://www.youtube.com/embed/EE0s8I56FxY"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </center>
    <hr />
    <p>Ferramentas utilizadas:</p>
    <v-list>
      <div v-for="item in technology" :key="item.title">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
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
      technology: [
        {
          title: "HTML",
          icon: "mdi-language-html5",
        },
        {
          title: "Vue.js",
          icon: "mdi-vuejs",
        },
        {
          title: "Vuetify",
          icon: "mdi-vuetify",
        },
        {
          title: "VUEX",
          icon: "mdi-vuejs",
        },
        {
          title: "VueRouter",
          icon: "mdi-vuejs",
        },
        {
          title: "Git",
          icon: "mdi-git",
        },
        {
          title: "GitHub",
          icon: "mdi-github",
        },
      ],
    };
  },
};
</script>