
<template>
  <v-carousel
    cycle
    height="180"
    hide-delimiter-background
    show-arrows-on-hover
    id="carousel"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <img :src="item.image" id="image-carousel" />
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          image:
            "https://blogdocorretor.com/_upload/blog/capas/20210405-172456-qualicorp_Samp.png",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsM6g-QFOqs6RjX9E9_8hCpSObfodXA3X3Mg&usqp=CAU",
        },
      ],
    };
  },
};
</script>

<style scoped>
#carousel {
  position: absolute;
  bottom: 0;
  padding: 12px 10px;
}
#image-carousel {
  width: 100%;
  object-fit: contain;
  height: auto;
  border-radius: 8px;
  align-self: center;
}
</style>