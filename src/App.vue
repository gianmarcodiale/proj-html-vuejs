<template>
  <div id="app">
    <SiteHeader :navMenu="navMenu" />
    <SiteJumbo />
    <SiteMain />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteJumbo from "@/components/SiteJumbo.vue";
import SiteMain from "@/components/SiteMain.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteJumbo,
    SiteMain,
  },
  data() {
    return {
      navMenu: [
        {
          text: "Home",
          link: "#",
        },
        {
          text: "Pages",
          link: "#",
        },
        {
          text: "Courses",
          link: "#",
        },
        {
          text: "Features",
          link: "#",
        },
        {
          text: "Shop",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
